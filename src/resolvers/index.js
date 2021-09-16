const Query = require('./query');
const Mutation = require('./mutation');
// to validate new scalar type DateTime using graphql-iso-date package
const { GraphQLDateTime } = require('graphql-iso-date');

module.exports = {
  Query: Query,
  Mutation: Mutation,
  DateTime: GraphQLDateTime
};
