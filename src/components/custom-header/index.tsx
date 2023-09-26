import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { w } from '../../constants'
import { app_images, getImageFromURL } from '../../constants/images'
import styles from './styles'
import { CutomHeaderProps } from './interface'
const CutomHeader = (props: CutomHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.imgContainer} onPress={() => props.backButtonPress()}>
          <Image source={getImageFromURL(app_images.ARROW_BACK)} resizeMode="contain" />
        </TouchableOpacity>
        <View style={{ marginStart: w(4) }}>
          <Image source={getImageFromURL(props.profileImage)} />
        </View>
        <View>
          <Text style={styles.userNameText}>{props.userName}</Text>
          <Text style={styles.lastSeenText}>{props.lastSeenText}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.imgContainer} onPress={() => props.videoCallButtonPress()}>
          <Image source={getImageFromURL(app_images.VIDEOCAM)} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.imgContainer, {
          marginHorizontal: w(16)
        }]} onPress={() => props.audioButtonPress()}>
          <Image source={getImageFromURL(app_images.CALL)} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgContainer} onPress={() => props.threeDotButtonPress()}>
          <Image source={getImageFromURL(app_images.MORE_VERT)} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CutomHeader