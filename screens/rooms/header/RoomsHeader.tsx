import { Text, View, Image } from 'react-native';
// styles
import { variables } from '../../../shared/styles/variables';
import { StyleSheet } from "react-native";
import { globalStyles } from '../../../shared/styles/global';
// svg
import RoomsSvg from '../../../assets/RoomsSvg';
import SearchSvg from '../../../assets/SearchSvg';

export const RoomsHeader = () => {
    return (
        <View style={globalStyles.headerBasic}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    Rooms
                </Text>
            </View>
            <View style={styles.iconsContainer}>
                <SearchSvg />
                <RoomsSvg />
            </View>
        </View>
    )
}

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
        height:'100%',
        width:'29%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom:17,
        paddingRight: 10
    }
})
