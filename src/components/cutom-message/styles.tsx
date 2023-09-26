import { StyleSheet } from "react-native";
import { app_colors, h, w } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: app_colors.color_EEEEEE,
        marginTop: h(24)
    },
    messageContainer: {
        marginBottom: h(14),
    },
    message: {
        fontSize: w(14),
        color: app_colors.color_1C1B1F,
        fontWeight: "400",
    },
    timestamp: {
        alignSelf: 'flex-end',
        fontSize: w(12),
        color: app_colors.color_9C9B9B
    },
});

export default styles