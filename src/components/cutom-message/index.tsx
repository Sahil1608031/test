import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { app_colors, h, w } from '../../constants';
import styles from './styles';


const ChatBubble = ({ message, sender, timestamp }: any) => (
    <View style={{
        flexDirection: "row", alignItems: "center",
        paddingStart: sender === "You" ? w(68) : w(16),
        paddingEnd: sender === "You" ? w(16) : w(68),
    }}>
        {sender === "You" && <View style={{ flex: 1 }}></View>}
        <View style={[styles.messageContainer, {
            backgroundColor: sender === "You" ? app_colors.color_E4FFDF : app_colors.color_FFFFFF,
            borderTopLeftRadius: sender === "You" ? w(50) : w(0),
            borderBottomLeftRadius: sender === "You" ? w(50) : w(16),
            borderBottomEndRadius: sender === "You" ? w(15) : w(16),
            borderTopRightRadius: sender === "You" ? w(0) : w(16),
            paddingHorizontal: sender === "You" ? w(20) : w(12),
            paddingVertical: sender === "You" ? h(20) : h(16),
            flexDirection: message.length <= 40 ? "row" : "column"
        }]}>
            <Text style={styles.message}>{message}</Text>
            <Text style={[styles.timestamp, {
                marginStart: message.length <= 40 ? w(10) : 0
            }]}>{timestamp}</Text>
        </View >
    </View>
);

const WhatsappChat = (props: any) => {
    const flatListRef = useRef<FlatList>(null)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (flatListRef.current && props.messageData && props.messageData.length > 0 && props.isKeyboardVisible) {
                flatListRef.current.scrollToEnd({ animated: true });
            }
        }, 100);

        return () => {
            clearTimeout(timeout);
        };
    }, [props.isKeyboardVisible])


    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={props.messageData}
                keyExtractor={(messageData, index) => index.toString()}
                renderItem={({ item }) => (
                    <ChatBubble
                        message={item.message}
                        sender={item.sender}
                        timestamp={item.timestamp}
                    />
                )}
            />
        </View>
    );
}


export default WhatsappChat;
