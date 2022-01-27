import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// styles
import { globalStyles } from '../../shared/styles/global';
import { variables } from '../../shared/styles/variables';
// components
import { RoomsHeader } from './header/RoomsHeader';
import { Room } from './room/Room';
// apollo
import { useQuery } from '@apollo/client';
// queries
import { GET_ROOMS } from '../../queries/getRooms';

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

export const Rooms = ({ navigation }: any) => {
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
                            <TouchableOpacity onPress={() => navigation.navigate('Chat', {roomId: item.id})}>
                                <Room roomId={item.id} roomName={item.name} />
                            </TouchableOpacity>
                        )}
                    />
                )
            }
        }
    }

    return (
        <>
            <RoomsHeader />
            <View style={styles.bodyContainer}>
                {renderSwitch()}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
