import { StyleSheet, Dimensions } from "react-native";
import { variables } from "./variables";

export const globalStyles = StyleSheet.create({
    headerBasic: {
        backgroundColor:`${variables.secondBackgroundColor}`,
        height:120,
        width:Dimensions.get('window').width,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        flexDirection: 'row'
    }
});

export const typography = StyleSheet.create({
    h1: {
        fontFamily: 'poppins-bold',
        fontSize: 36
    },
    h2: {
        fontFamily: 'poppins-bold',
        fontSize: 28
    },
    h3: {
        fontFamily: 'poppins-semiBold',
        fontSize:22
    },
    h4: {
        fontFamily: 'poppins-semiBold',
        fontSize:16
    },
    buttonText: {
        fontFamily: 'poppins-semiBold',
        fontSize: 16
    },
    label: {
        fontFamily: 'poppins-medium',
        fontSize: 16
    },
    titleAndInput: {
        fontFamily: 'poppins-medium',
        fontSize: 15,
        lineHeight: 20
    },
    captionInput: {
        fontFamily: 'poppins-regular',
        fontSize: 10,
        lineHeight:10
    },
    bodyText: {
        fontFamily: 'sf-compact-text',
        fontSize: 14
    },
    caption: {
        fontFamily: 'sf-compact-displayBold',
        fontSize: 12,
        lineHeight:16
    },
    specialText:{
        fontFamily: 'sf-compact-displayRegular',
        fontSize: 12,
        lineHeight: 16
    }
})