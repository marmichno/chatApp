import { Text, View } from 'react-native';
// styles
import styles from "./stylesRoom";
import { typography } from '../../../shared/styles/global';
// svg
import ProfileSvg from '../../../assets/ProfileSvg';
import OnlineSvg from '../../../assets/OnlineSvg';
// apollo
import { useQuery } from '@apollo/client';
// queries
import GET_ROOMS_MESSAGES_DATA from '../../../queries/getRoomMessagesData';
// functions
import { shortenText } from '../../../shared/functions/shortenText';

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
        let comparedDateInMs = new Date(date.replace(/-/g, '/')).getTime() + 3600000;
        let msDiffrence = Date.now() - comparedDateInMs;

        const getTime = (ms: number) => {
            let h, m, s;
            h = Math.floor(ms / 1000 / 60 / 60);
            m = Math.floor((ms / 1000 / 60 / 60 - h) * 60);
            s = Math.floor(((ms / 1000 / 60 / 60 - h) * 60 - m) * 60);

            if (h > 24) {
                return 'more than a day ago';
            } else if (h > 0) {
                return `${h < 10 ? h = `0${h}` : h = `${h}`} hours ago`
            } else if (m !== 0 && m > 0) {
                return `${m < 10 ? m = `0${m}` : m = `${m}`} minutes ago`;
            } else {
                return `${s < 10 ? s = `0${s}` : s = `${s}`} seconds ago`;
            }
        }

        return (getTime(msDiffrence));
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
                            {shortenText(30, roomName)}
                        </Text>
                        <Text
                            style={[typography.bodyText, styles.lastMessage,
                            roomId === "c887ee1c-24fc-446f-b02b-85165daa1aa1" ?
                                styles.lastMessageOnline
                                :
                                styles.lastMessageOffline]}>
                            {/* shorten last message to 30 characters */}
                            {shortenText(30, data.room.messages[0].body)}
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