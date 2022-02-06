import { connect, connection } from 'mongoose'
import chalk from 'chalk'

export class MongoDbHandler {
    static connectDb = async () => {
        const { MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_USER, MONGO_PASSWORD } = process.env;
        
        const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

        /*
        // worked with mongoose-5.13.3
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }; 
        */

        const options = {
            autoIndex: false,
        }

        try {
            await connect(uri, options);
            console.log(chalk.greenBright('[MongoDbHandler.connect()] Connected successfully to MongoDb !'));
        } catch(err) {
            console.log(chalk.red.bold('[MongoDbHandler.connect()] An error occured with Mongodb connection !'));  
            throw(err);
        }
    }

    static disconnectDb = async () => {
        await connection.close();
    }
}

