const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();

// import db.js
const db = require('./db');
// import models, by default using index.js inside a folder?
const models = require('./models');

// run server on port specified in .env
const port = process.env.PORT || 4001;
// store DB_HOST value as a variable
const DB_HOST = process.env.DB_HOST;

// let notes = [
//   { id: '1', content: 'This is note 1', author: 'Phi' },
//   { id: '2', content: 'This is note 2', author: 'Tian' },
//   { id: '3', content: 'Yet another note 3', author: 'TW' }
// ];

// construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
`;

// provide resolver functions for our schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello, there',
    // notes: () => notes,
    notes: async () => {
      return await models.Note.find();
    },
    note: async (parent, args) => {
      //   return notes.find(note => note.id === args.id);
      return await models.Note.findById(args.id);
    }
  },
  Mutation: {
    newNote: async (parent, args) => {
      //   let noteValue = {
      //     id: String(notes.length + 1),
      //     content: args.content,
      //     author: 'Unknown'
      //   };
      //   notes.push(noteValue);
      //   return noteValue;
      return await models.Note.create({
        content: args.content,
        author: 'Unknown'
      });
    }
  }
};

const app = express();

// connect to database, using dot notation
db.connect(DB_HOST);

// Apollo server setup
const server = new ApolloServer({ typeDefs, resolvers });

// apply Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => res.send('Hello there!!!'));

app.listen({ port }, () =>
  console.log(
    `GraphQL server is running at http://localhost:${port}${server.graphqlPath}`
  )
);
