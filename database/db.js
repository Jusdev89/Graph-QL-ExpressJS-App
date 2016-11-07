const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require(  'graphql' )

const pgPromise = require( 'pg-promise' )
const pgp = pgPromise()
const db = pgp( 'greetings' )


const getHello = 'select hello from greets';
const getbye = 'select bye from greets';

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return db.oneOrNone( getHello ).then( data => data.hello )
        }
      },
      bye: {
        type: GraphQLString,
        resolve() {
          return db.oneOrNone( getbye ).then( data => data.bye )
        }
      }
    }
  })
})
