import { Server } from 'http'
import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import chalk from 'chalk'

import { validatedEnv } from './utils/validatedEnv'
import { errorMiddleware } from './middlewares/error.middleware'
import { MongoDbHandler } from './utils/MongoDbHandler'

import baseRouter from './routes/index'

let app: Application;

const bootstrap = async () => {
    /**
     * -------------- GENERAL SETUP ----------------
     */
    require('dotenv-safe').config()
    validatedEnv()

    // debug setting
    const debug = require('debug') ('server')

    /**
     * -------------- TYPEDI SETUP ----------------
     */


    /**
     * -------------- MONGODB SETUP ----------------
     */
    await MongoDbHandler.connectDb()

    /**
     * -------------- APP SETUP ----------------
     */
    app = express();
    app.use(cors());
    app.use(express.json())
    app.use(morgan('dev'))
    
    /**
     * -------------- PASSPORTJS SETUP ----------------
     */
     require('./config/passport')

     // This will initialize the passport object on every request
     //app.use(passport.initialize())

    /**
     * -------------- ROUTES SETUP ----------------
     */
     app.use('/api', baseRouter);

    /**
     * -------------- ERROR MW SETUP ----------------
     */
    app.use(errorMiddleware);

    /**
     * -------------- SERVER SETUP ----------------
     */
    const SERVER_PORT = parseInt(process.env.SERVER_PORT as string);
    const SERVER_HOST = process.env.SERVER_HOST as string;
    // TODO: change to https.Server ???
    const server: Server = app.listen(SERVER_PORT, SERVER_HOST, async () => {
        let currentDate = new Date();  
        debug(chalk.greenBright(`[bootstrap/${currentDate.toISOString()}] HTTP Server listens for incoming requests at address ${SERVER_HOST}:${SERVER_PORT}`)); 
    })
}

bootstrap();


