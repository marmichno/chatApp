import { View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
// styles
import styles from './stylesChatBody';
import { variables } from "../../../shared/styles/variables";
// react hooks
import React, { useState, useCallback, useEffect } from 'react'
// gifted chat
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
// svg
import SendSvg from '../../../assets/SendSvg';
// apollo
import { useMutation } from '@apollo/client';
// mutations
import POST_MESSAGE from '../../../mutations/postMessage';
// queries
import GET_ROOM_MESSAGES_DETAILS from '../../../queries/getRoomMessagesDetails';
import GET_ROOMS_MESSAGES_DATA from '../../../queries/getRoomMessagesData';

interface Messages {
    "_id": string,
    "text": string,
    "createdAt": Date,
    "user": {
        "_id": string,
        "name": string,
        "avatar": string
    }
}

interface RoomMessages {
    "id": string
    "body": string,
    "insertedAt": string,
    "user": {
        "id": string
        "firstName": string,
        "lastName": string
    }
}

export const ChatBody = ({ roomMessages, roomId }: { roomMessages: Array<RoomMessages>, roomId: string | undefined }) => {

    const [sendMessage] = useMutation(POST_MESSAGE, {
        refetchQueries: [
            GET_ROOM_MESSAGES_DETAILS,
            'RoomsMessagesDetails',
            GET_ROOMS_MESSAGES_DATA,
            'RoomsMessagesData'
        ]
    });

    const [messages, setMessages] = useState<Messages[]>([]);

    const properArr = roomMessages.map(val => {
        return ({
            "_id": val.id,
            "text": val.body,
            "createdAt": new Date(),
            "user": {
                "_id": val.user.id,
                "name": `${val.user.firstName} ${val.user.lastName}`,
                "avatar": 'https://placeimg.com/140/140/any',
            },
        })
    })

    useEffect(() => {
        setMessages(properArr)
    }, []);

    const onSend = useCallback((messages = []) => {
        if (messages[0].text.length === 0) {
            return
        } else {
            sendMessage({ variables: { body: messages[0].text, roomId: roomId } })
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        }
    }, []);

    const renderSend = (props: any) => {
        return (
            <TouchableOpacity style={styles.sendIcon} onPress={() => props.onSend({ text: props.text })}>
                <SendSvg />
            </TouchableOpacity>
        )
    }

    const customtInputToolbar = (props: any) => {

        return (
            <InputToolbar
                {...props}
                placeholder=""
                containerStyle={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    backgroundColor: `${variables.secondBackgroundColor}`,
                    width: '100%',
                    height: 68,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 12
                }}
                textInputStyle={{
                    width: 287,
                    height: 41,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    borderBottomLeftRadius: 12,
                    marginRight: 17,
                    paddingLeft: 20
                }}
            />
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.chatContainer}>
                <GiftedChat
                    keyboardShouldPersistTaps={'handled'}
                    renderDay={() => null}
                    renderTime={() => null}
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: "25d7c74d-b2a6-4600-8512-afc39cdcfde4",
                    }}
                    minInputToolbarHeight={68}
                    renderSend={(props) => renderSend(props)}
                    renderBubble={(props) => {
                        return (
                            <Bubble
                                {...props}
                                wrapperStyle={{
                                    left: {
                                        backgroundColor: 'white',
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 0,
                                        marginTop: 15,
                                        marginLeft: 15,
                                        padding: 12
                                    },
                                    right: {
                                        backgroundColor: `${variables.chatColor}`,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 12,
                                        marginTop: 15,
                                        padding: 12
                                    }
                                }}
                            />
                        )
                    }}
                    renderInputToolbar={(props) => customtInputToolbar(props)}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}