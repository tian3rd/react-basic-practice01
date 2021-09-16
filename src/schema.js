const { gql } = require('apollo-server-express');

module.exports = gql`
  # customer date scalar type
  scalar DateTime
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
    # corresponds to timestamps
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
`;
