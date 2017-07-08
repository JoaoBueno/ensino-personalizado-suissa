const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const port = '3000'

const server = module.exports = express()

server.listen( port )

server.use( bodyParser.urlencoded( { extended: true } ) )
server.use( bodyParser.json() )

server.use( function ( req, res, next ) {
  res.setHeader( 'Access-Control-Allow-Origin', '*' )
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE' )
  res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization' )
  next()
} )
