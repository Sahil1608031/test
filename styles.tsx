import { StyleSheet } from "react-native";
import { app_colors, h, w } from "./src/constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: app_colors.color_EEEEEE,
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: w(15),
        backgroundColor: app_colors.color_EEEEEE,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: h(36)
    },
    inputMain: {
        flexDirection: "row", alignItems: "center",
        backgroundColor: app_colors.color_FFFFFF,
        borderRadius: w(50),
        paddingHorizontal: w(10),
        justifyContent: "space-between",
        flex: 1
    },
    flexDir: { flexDirection: "row", alignItems: "center" },
    inputStyles:
    {
        color: app_colors.color_1C1B1F,
        fontSize: w(14),
        fontWeight: "400",
        marginStart: w(12)
    },
    imgContainer: {
        height: w(24),
        width: w(24),
        alignItems: "center",
        justifyContent: "center"
    },
    micImgContainer: {
        height: w(40),
        width: w(40),
        alignItems: "center",
        justifyContent: "center",
        marginStart: w(8)
    }
})

export default styles