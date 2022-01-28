import { StyleSheet } from "react-native";
import { variables } from "../../../shared/styles/variables";

const styles = StyleSheet.create({
    chatHeader: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    contentContainer: {
        flexDirection: 'row',
        marginBottom: 16
    },
    arrowContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    userDetailsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    h4: {
        fontSize: 14,
        color: `${variables.highlightColor}`
    },
    bodyText: {
        fontSize: 14,
        color: 'white'
    },
    userNameAndStatusContainer: {
        justifyContent: 'flex-start',
        marginLeft: 13
    },
    iconsContainer: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginRight: 13
    }
});

export default styles;