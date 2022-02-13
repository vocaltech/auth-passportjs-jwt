import path from 'path'
import fs from 'fs'

import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

import { UserModel } from '../users/user.model'
import { JwtPayload } from '../jwt/jwt_payload.interface'


declare global {
    namespace Express {
        interface User {
            username: string;
            id?: number | undefined;
        }
    }
}

const pathToKey = path.join(__dirname, '../../keys', process.env.PUBLIC_KEY!)
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

const verifyCallback = (jwtPayload: JwtPayload, done: any) => {
    UserModel.findOne({_id: jwtPayload.sub}, (err: any, user: any) => {
        if (err) {
            return done(err, false);
        }

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });    
};

const strategy = new JwtStrategy(options, verifyCallback)
passport.use(strategy)