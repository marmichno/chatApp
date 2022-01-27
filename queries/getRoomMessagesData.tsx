import gql from "graphql-tag";

const GET_ROOMS_MESSAGES_DATA = gql`
    query RoomsMessagesData($roomId: ID!){
        room(id: $roomId) {
            messages {
                body
                insertedAt
            }
        }
    }
`;

export default GET_ROOMS_MESSAGES_DATA;