import { StyleSheet } from "react-native";
import { variables } from "../../../shared/styles/variables";

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: `${variables.backgroundColor}`
    },
    topRectangle: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: `${variables.secondBackgroundColor}`,
        width: '100%',
        height: 68,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 12
    },
    sendMessageInput: {
        width: 287,
        height: 41,
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginRight: 17
    },
    sendIcon: {
        marginRight: 5
    }
})

export default styles;