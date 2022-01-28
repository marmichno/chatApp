import { variables } from '../../../shared/styles/variables';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    header: {
        fontSize: 30,
        fontFamily: "poppins-bold",
        color: `${variables.highlightColor}`,
        paddingBottom: 10,
        paddingLeft: 20
    },
    iconsContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '29%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: 17,
        paddingRight: 10
    }
})

export default styles;