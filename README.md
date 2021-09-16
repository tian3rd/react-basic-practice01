## Q & A

> Here's a list of the questions along the way...

### General Questions

1. How is the `package.json` file working? The structure and meaning of each key inside?

### Chapter 3 - A Web Application with Node and Express

1. What's the difference between `require` and `import`?

2. Know more about `app.get()` and `app.listen()` by reading docs on `Express`.

### Chapter 4 - Our First GraphQL API

GraphQL Basics

**Schemas**
A schema is a written representation of data and interactions. By requiringa a schema, GraphQL enforces a strict plan for our API. The fundamental component of GraphQL are object types.

```javascript
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello, there'
  }
};
```

The above example we created a GraphQL object type of `Query` with a field of `hello`, which returns a scalar type of `String`. GraphQL constains five built in scalar types: `String`, `Boolean`, `Int`, `Float`, and `ID`. More examples:

```
type Pizza {
    id: ID
    size: String
    slices: Int
    toppings: [String]
}
```

**Resolvers**

They resolve the data that the API user has requested. There're two kinds of resovlers: queries and mutations.

1. Play with the Apollo server playground.
2. Read more about GraphQL on: 1. <https://www.apollographql.com/docs/apollo-server/schema/schema/>; 2. <https://graphql.org/learn/schema/>;

### Chapter 5 - Database

To start `mongodb` in the terminal, `brew services start`

1. Read mongodb docs:

### Chapter 6 - CRUD Operations

Add create, read, update and delete functionality to API.

1. What's the difference between `mongodb` and `mongoose`?

2. What's the difference between `mongodb` and `graphql`?
3. `$set` operator in `mutation`
4. `timestamps` option in `noteSchema`
