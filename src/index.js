import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import baseConfig from './config/baseConfig';

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    
    server.applyMiddleware({ app });
    
    app.use((req, res) => {
        res.status(200);
        res.end();
    });

    console.log(`mongodb+srv://${baseConfig.dbUser}:${baseConfig.dbPassword}@${baseConfig.dbHost}/${baseConfig.dbName}?retryWrites=true&w=majority`)

    await mongoose.connect(`mongodb+srv://${baseConfig.dbUser}:${baseConfig.dbPassword}@${baseConfig.dbHost}/${baseConfig.dbName}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer();