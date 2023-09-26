import { View, Text, TextInput, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomStatusBar, CutomHeader } from './src/components'
import { app_colors, h, w } from './src/constants'
import { app_images, getImageFromURL } from './src/constants/images'
import WhatsappChat from './src/components/cutom-message'
import { whatsappChat } from './dummyData'
import styles from './styles'

const App = () => {
  const [chat, setChat] = useState<string>("")
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar backgroundColor={app_colors.color_FFFFFF} />
      <CutomHeader
        profileImage={app_images.PROFILE}
        userName='Anna'
        lastSeenText={`Last seen 12:40 AM`}
        backButtonPress={() => { }}
        videoCallButtonPress={() => { }
        } audioButtonPress={() => { }}
        threeDotButtonPress={() => { }} />
      <View style={[styles.container, { paddingTop: isKeyboardVisible ? h(0) : h(24) }]}>
        <WhatsappChat
          messageData={whatsappChat}
          isKeyboardVisible={isKeyboardVisible} />
        <View style={styles.inputContainer}>
          <View style={styles.inputMain}>
            <View style={styles.flexDir}>
              <View style={styles.imgContainer}>
                <Image source={getImageFromURL(app_images.MOOD)} />
              </View>
              <TextInput
                placeholder='Message...'
                placeholderTextColor={app_colors.color_9C9B9B}
                value={chat}
                onChangeText={(text: string) => setChat(text)}
                style={styles.inputStyles}
                multiline
              />
            </View>
            <View style={styles.flexDir}>
              <View style={[styles.imgContainer, { marginHorizontal: w(16) }]}>
                <Image source={getImageFromURL(app_images.ATTECHMENT)} />
              </View>
              {chat.length <= 0 && <View style={styles.imgContainer}>
                <Image source={getImageFromURL(app_images.PHOTO_CAMERA)} />
              </View>}
            </View>
          </View>
          <View style={styles.micImgContainer}>
            <Image source={getImageFromURL(chat.length > 0 ? app_images.SEND : app_images.MICK)} />
          </View>
          <View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default App