import gql from "graphql-tag";

const POST_MESSAGE = gql`
    mutation SendMessage($body: String, $roomId: ID!){
        sendMessage(body: $body, roomId: $roomId) {
            id
			body
            insertedAt
            user {
                id
                email
                firstName
                lastName
                role
            }
        }
    }
`;

export default POST_MESSAGE;