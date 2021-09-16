const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();

// import db.js
const db = require('./db');
// import models, by default using index.js inside a folder?
const models = require('./models');
// construct a schema, using GraphQL schema language
const typeDefs = require('./schema');
// provide resolver functions for our schema fields
const resolvers = require('./resolvers');

// run server on port specified in .env
const port = process.env.PORT || 4001;
// store DB_HOST value as a variable
const DB_HOST = process.env.DB_HOST;

const app = express();

// connect to database, using dot notation
db.connect(DB_HOST);

// Apollo server setup, including a context for resolver modules to reference models
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // add db models to the context
    return { models };
  }
});

// apply Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => res.send('Hello there!!!'));

app.listen({ port }, () =>
  console.log(
    `GraphQL server is running at http://localhost:${port}${server.graphqlPath}`
  )
);
