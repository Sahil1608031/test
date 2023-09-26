//global import
import React, {
} from 'react';
import {
    StatusBar,
    SafeAreaView,
} from 'react-native';
//main component
const CustomStatusBar = ({ backgroundColor, ...props }: any) => {
    //return statement
    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight, backgroundColor: backgroundColor }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} barStyle={"dark-content"} />
        </SafeAreaView>
    )
};
//export statement
export default CustomStatusBar;
