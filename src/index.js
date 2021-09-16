const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// run server on port specified in .env
const port = process.env.PORT || 4001;

let notes = [
  { id: '1', content: 'This is note 1', author: 'Phi' },
  { id: '2', content: 'This is note 2', author: 'Tian' },
  { id: '3', content: 'Yet another note 3', author: 'TW' }
];

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
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Unknown'
      };
      notes.push(noteValue);
      return noteValue;
    }
  }
};

const app = express();

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
