import { Text, View, TouchableOpacity } from 'react-native';
// styles
import styles from "./stylesChatHeader";
import { globalStyles } from "../../../shared/styles/global";
import { typography } from '../../../shared/styles/global';

// svg
import GoBackArrow from '../../../assets/GoBackArrow';
import PhoneSvg from '../../../assets/PhoneSvg';
import VideoCallSvg from '../../../assets/VideoCallSvg';
import UserIconSvg from '../../../assets/UserIconSvg';
// functions
import { shortenText } from '../../../shared/functions/shortenText';

export const ChatHeader = ({ navigation, roomName }: { navigation: any, roomName: string }) => {
    return (
        <View style={[styles.chatHeader, globalStyles.headerBasic]}>
            <View style={styles.contentContainer}>
                <View style={styles.arrowContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
                        <GoBackArrow />
                    </TouchableOpacity>
                </View>
                <View style={styles.userDetailsContainer}>
                    <View>
                        <UserIconSvg />
                    </View>
                    <View style={styles.userNameAndStatusContainer}>
                        <Text style={[typography.h4, styles.h4]}>
                            {shortenText(20, roomName)}
                        </Text>
                        <Text style={[typography.bodyText, styles.bodyText]}>
                            Active now
                        </Text>
                    </View>
                </View>
                <View style={styles.iconsContainer}>
                    <PhoneSvg />
                    <VideoCallSvg />
                </View>
            </View>
        </View>
    )
}