import { Text, View, FlatList, TouchableOpacity } from 'react-native';
// styles
import styles from './stylesRoomsScreen';
// components
import { RoomsHeader } from './header/RoomsHeader';
import { Room } from './room/Room';
// apollo
import { useQuery } from '@apollo/client';
// queries
import { GET_ROOMS } from '../../queries/getRooms';
// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Rooms: undefined;
    Chat: { roomId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Rooms'>;

interface Rooms {
    "usersRooms": {
        "rooms":
        {
            "id": string,
            "name": string
        }[]
    }
}

interface Room {
    "id": string,
    "name": string
}

export const RoomsScreen = ({ navigation }: Props) => {

    const { loading, error, data } = useQuery<Rooms>(GET_ROOMS);

    const renderSwitch = () => {
        if (error) {
            return (
                <View>
                    <Text>
                        Something went wrong
                    </Text>
                </View>
            )
        } else if (loading) {
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        } else {
            if (data) {
                return (
                    <FlatList
                        style={styles.roomsContainer}
                        keyExtractor={(item: Room) => item.id}
                        data={data.usersRooms.rooms}
                        renderItem={({ item }: { item: Room }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Chat', { roomId: item.id })}>
                                <Room roomId={item.id} roomName={item.name} />
                            </TouchableOpacity>
                        )}
                    />
                )
            }
        }
    }

    return (
        <View style={styles.screenContainer}>
            <RoomsHeader />
            <View style={styles.bodyContainer}>
                {renderSwitch()}
            </View>
        </View>
    )
}