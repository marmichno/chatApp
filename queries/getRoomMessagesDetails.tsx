import gql from "graphql-tag";

const GET_ROOM_MESSAGES_DETAILS = gql`
    query RoomsMessagesDetails($roomId: ID!){
        room(id: $roomId) {
            name
            messages {
                id
                body
                insertedAt
                user {
                    id
                    firstName
                    lastName
                }
            }
        }
    }
`;

export default GET_ROOM_MESSAGES_DETAILS;