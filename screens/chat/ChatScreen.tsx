import { Text, View } from 'react-native';
// components
import { ChatHeader } from './chatHeader/ChatHeader';
import { ChatBody } from './chatBody/ChatBody';
import { ChatFooter } from './chatFooter/ChatFooter';
// queries 
import { useQuery } from '@apollo/client';
import GET_ROOM_MESSAGES_DETAILS from '../../queries/getRoomMessagesDetails';
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Rooms: undefined;
    Chat: { roomId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Chat'>;

interface Room {
    "room": {
        "name": string,
        "messages": {
            "id": string
            "body": string,
            "insertedAt": string,
            "user": {
                "id": string
                "firstName": string,
                "lastName": string
            }
        }[],
    }
}

export const ChatScreen = ({ navigation }: Props) => {

    let roomId = navigation.getState().routes.filter(val => val.name === 'Chat')[0].params?.roomId;

    const { loading, error, data } = useQuery<Room>(GET_ROOM_MESSAGES_DETAILS, {
        variables: { roomId },
        pollInterval: 5000
    });

    if (loading) {
        return (
            <View>
                <Text>
                    Loading
                </Text>
            </View>
        )
    } else if (error) {
        return (
            <View>
                <Text>
                    Something went wrong
                </Text>
            </View>
        )
    } else if (data) {
        return (
            <View style={{ backgroundColor: "#F0F8FF", flex: 1 }}>
                <ChatHeader navigation={navigation} roomName={data.room.name} />
                <ChatBody roomMessages={data.room.messages} roomId={roomId} />
                <ChatFooter />
            </View>
        )
    } else {
        return (
            <></>
        )
    }
}