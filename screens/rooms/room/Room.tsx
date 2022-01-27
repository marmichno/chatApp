import { Text, View, StyleSheet } from 'react-native';
// styles
import { variables } from '../../../shared/styles/variables';
import { typography } from '../../../shared/styles/global';
// svg
import ProfileSvg from '../../../assets/ProfileSvg';
import OnlineSvg from '../../../assets/OnlineSvg';
// apollo
import { useQuery } from '@apollo/client';
// queries
import GET_ROOMS_MESSAGES_DATA from '../../../queries/getRoomMessagesData';

interface Room {
    "roomId": string,
    "roomName": string
}

interface Messages {
    "room": {
        "messages": {
            "body": string,
            "insertedAt": string
        }[]
    }
}

export const Room = ({ roomId, roomName }: Room) => {

    const { loading, error, data } = useQuery<Messages>(GET_ROOMS_MESSAGES_DATA, { variables: { roomId } });

    // since I have no way to tell who is online now I hard coded roomId to get preview on online styles.

    const compareDates = (date: string) => {
        console.log(date);
        const d = new Date()
        const todayDate = d.toISOString().split('T')[0];
        const time = d.toTimeString().split(' ')[0];
        let comparableTodayDate = `${todayDate} ${time}`;
        let todayDateInMs = new Date(comparableTodayDate.replace(/-/g, '/')).getTime();
        let comparedDateInMs = new Date(date.replace(/-/g, '/')).getTime();
        let msDiffrence = todayDateInMs - comparedDateInMs;

        const getTime = (ms: number) => {
            let h, m, s;
            h = Math.floor(ms / 1000 / 60 / 60);
            m = Math.floor((ms / 1000 / 60 / 60 - h) * 60);
            s = Math.floor(((ms / 1000 / 60 / 60 - h) * 60 - m) * 60);

            if(h > 24){
                return 'more than a day ago';
            }else if(h < 24 && h !== 0){
                return `${h < 10 ? h = `0${h}`: h = `${h}`} hours ago`
            } else if(m !== 0){
                return `${m < 10 ? m = `0${m}`: m = `${m}`} minutes ago`;
            } else {
                return `${s < 10 ? s = `0${s}`: s = `${s}`} seconds ago`;
            }
        }

        return(getTime(msDiffrence));
    }

    if (loading) {
        return (
            <></>
        )
    } else if (error) {
        return (
            <></>
        )
    } else if (data) {
        return (
            <View style={[styles.roomContainer, roomId === "c887ee1c-24fc-446f-b02b-85165daa1aa1" ? styles.roomContainerOnline : styles.roomContainerOffline]}>
                <View style={styles.avatarContainer}>
                    <ProfileSvg />
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.lastOnlineContainer}>
                        {roomId === "c887ee1c-24fc-446f-b02b-85165daa1aa1" ?
                            <OnlineSvg />
                            :
                            <Text style={[typography.bodyText, styles.lastOnlineContainerText]}>
                                {compareDates(data.room.messages[0].insertedAt)}
                            </Text>}
                    </View>
                    <View style={styles.messageAndNameContainer}>
                        <Text
                            style={[typography.h3, styles.roomName,
                            roomId === "c887ee1c-24fc-446f-b02b-85165daa1aa1" ?
                                styles.roomNameOnline
                                :
                                styles.roomNameOffline]}>
                            {/* shorten roomName to 30 characters */}
                            {roomName.length > 30 ? roomName.replace(/(.{30})..+/, "$1...") : roomName}
                        </Text>
                        <Text
                            style={[typography.bodyText, styles.lastMessage,
                            roomId === "c887ee1c-24fc-446f-b02b-85165daa1aa1" ?
                                styles.lastMessageOnline
                                :
                                styles.lastMessageOffline]}>
                            {/* shorten last message to 30 characters */}
                            {data.room.messages[0].body.length > 30 ? data.room.messages[0].body.replace(/(.{30})..+/, "$1...") : data.room.messages[0].body}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <></>
        )
    }
}

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
        fontFamily: "SF Compact Text",
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