import {connectDb} from './config/databases';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import PostResolver from './resolvers/PostResolver';
import * as dotenv from "dotenv";


async function main(){
  dotenv.config({ path: __dirname+'/.env' });

  const app = express();
  connectDb();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
    }),
    introspection: true,
    // context: ({req,res}) =>{console.log('req', req);
    // console.log('res',res)}
  })

  apolloServer.applyMiddleware({app,path:process.env.GRAPHQL_PATH, cors: false})

  app.listen(
    process.env.SERVER_PORT, ()=>{console.log('http://localhost:4000')}
  )
}

main();