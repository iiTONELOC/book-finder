// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}
type Book {
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
    savedBooks: [Book]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput): User
}
input BookInput {
    "Google's Book Id"
    bookId: ID
    "Lis of Authors of the book"
    authors: [String]
    "Books description"
    description: String
    "Image"
    image: String
    "Link "
    link: String
    "Title"
    title: String
}
`;

// export the typeDefs
module.exports = typeDefs;