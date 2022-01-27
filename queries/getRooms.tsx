import gql from "graphql-tag";

export const GET_ROOMS = gql`
    {
        usersRooms {
            rooms {
                id
                name
            }
        }
    }
`;