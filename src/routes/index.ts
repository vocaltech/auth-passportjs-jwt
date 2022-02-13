import { Router } from 'express';
import passport from 'passport';

import { login, register, protected_route } from './user.router'

//
// userRouter
//
const userRouter = Router();

/*
 * Uncomment the line below for production
 */
userRouter.get('/protected', passport.authenticate('jwt', { session: false }), protected_route)

/*
 * Debug passport MW
 * ----> Comment for production <----
 */
/*
userRouter.get('/protected', 
    (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (error, user, info) => {
            // this will execute in any case, even if a passport strategy will find an error
            // log everything to console
            console.log(`[passport.authenticate() MW] error: ${error}`);
            console.log(`[passport.authenticate() MW] user: ${user}`);
            console.log(`[passport.authenticate() MW] info: ${info}`);
      
            if (error) {
              res.status(401).send(error);
            } else if (!user) {
              res.status(401).send(info);
            } else {
              next();
            }
      
            res.status(401).send(info);
          })(req, res);
    }, 
    protected_route)
*/

userRouter.post('/login', login)
userRouter.post('/register', register)

//
// baseRouter
//
const baseRouter = Router();
baseRouter.use('/users', userRouter);

/*

//
// middleware
//
const logger = (req, res, next) => {
    console.log('\n');
    console.log(new Date(), req.url);
    next();
}
router.use(logger);

*/

// Export the base-router
export default baseRouter;
