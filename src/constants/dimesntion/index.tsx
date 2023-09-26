import { Platform } from "react-native";
import { Dimensions } from "react-native";
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
import { getStatusBarHeight } from 'react-native-status-bar-height';
//width
export const w = (givenWidth: number) => {
    return 2.5 * ((screenWidth * givenWidth) / (100 * 10));
};

//height
export const h = (givenHeight: number) => {
    return Platform.OS === 'ios' ? ((screenHeight * givenHeight) / (100 * 10)) - (getStatusBarHeight() * givenHeight / (100 * 10)) :
        screenHeight > 790 ? (screenHeight * givenHeight) / (100 * 10.6) : (screenHeight * givenHeight) / (100 * 10);
};


