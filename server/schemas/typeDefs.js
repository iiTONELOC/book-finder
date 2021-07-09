// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}
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
    me: User
    users: [User]
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;