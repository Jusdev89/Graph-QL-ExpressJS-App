const express = require('express')
const router = express.Router()
const { graphql } = require(  'graphql' )

const schema = require( '../database/db' )

router.get('/hello-world/:hello', ( request, response, next ) =>
  graphql( schema, `{ ${ request.params.hello } }` ).then( result => response.json( { result } ) )
)

router.get('/hello-world/:bye', ( request, response, next ) =>
  graphql( schema, `{ ${ request.params.bye } }` ).then( result => response.json( { result } ) )
)

router.get('/hello-world/:bye/:hello', ( request, response, next ) =>
  graphql( schema, `{ ${ request.params.bye}, ${ request.params.hello  } }` ).then( result => response.json( { result } ) )
)

module.exports = router
