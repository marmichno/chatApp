import { Text, View } from 'react-native';
// styles
import styles from './stylesRoomsHeader';
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