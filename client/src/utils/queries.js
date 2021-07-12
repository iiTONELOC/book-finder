import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
    _id
    username
    email
    bookCount
    savedBooks{
        bookId
        title
        authors
        image
        description
        link
    }
    }
}
`;

export const QUERY_ME_BASIC = gql`
{
    me {
    _id
    username
    email
    bookCount
    }
}
`;

