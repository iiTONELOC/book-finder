// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type bookSchema {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [bookSchema]
}

type Query {
    users: [User]
    user(username: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;