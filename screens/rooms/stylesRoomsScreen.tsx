import { StyleSheet } from "react-native";
import { variables } from '../../shared/styles/variables';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: `${variables.backgroundColor}`
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: `${variables.backgroundColor}`
    },
    roomsContainer: {
        flex: 1,
        marginTop: 36,
        backgroundColor: `${variables.backgroundColor}`
    }
})

export default styles;