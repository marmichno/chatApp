import { variables } from '../../../shared/styles/variables';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userRoomsContainer: {
        flex: 1,
        backgroundColor: `${variables.backgroundColor}`,
        top: 36
    },
    flatListContainer: {
        flex: 1
    },
    roomContainer: {
        width: '100%',
        height: 88,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    roomContainerOnline: {
        backgroundColor: `${variables.highlightColor}`,
    },
    roomContainerOffline: {
        backgroundColor: `white`,
    },
    avatarContainer: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionContainer: {
        height: '100%',
        width: '75%'
    },
    lastOnlineContainer: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 12
    },
    lastOnlineContainerText: {
        color: '#9FA2B2',
        fontSize: 13
    },
    messageAndNameContainer: {
        flex: 1,
        width: '100%',
        height: '75%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    roomName: {
        fontSize: 15
    },
    roomNameOnline: {
        color: 'white'
    },
    roomNameOffline: {
        color: 'black'
    },
    lastMessage: {
        fontFamily: "sf-compact-text",
        fontStyle: "normal",
        fontWeight: "normal"
    },
    lastMessageOnline: {
        color: "#F0F8FF"
    },
    lastMessageOffline: {
        color: "black"
    }
})

export default styles;