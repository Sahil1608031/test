import { StyleSheet } from "react-native";
import { app_colors, h, w } from "../../constants";

const styles = StyleSheet.create({
    container: {
        height: h(72),
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: app_colors.color_FFFFFF,
        paddingStart: w(8),
        paddingEnd: w(24)
    },
    imgContainer: {
        width: w(24),
        height: w(24)
    },
    userNameText: {
        color: app_colors.color_1C1B1F,
        fontSize: w(18),
        fontWeight: "600"
    },
    lastSeenText: {
        color: app_colors.color_9C9B9B,
        fontSize: w(12),
        fontWeight: "400"
    }
})

export default styles