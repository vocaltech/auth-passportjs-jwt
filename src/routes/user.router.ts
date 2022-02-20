import { Request, Response, NextFunction } from 'express';

import { User } from '../users/user.interface'
import { UserModel } from '../users/user.model'

import { genPassword, validPassword } from '../utils/passwordUtils'
import { generateJwtToken } from '../utils/jwtUtils'

export const login = async(req: Request, res: Response, next: NextFunction) => {
    const username: string = req.body.username
    const plaintextPassword: string = req.body.password
    const expiresIn: string | undefined = req.body.expiresIn

    UserModel.findOne({ username }, (err: any, user: User) => {
        if (err) {
            console.log(err)
            next(err)
        }

        if (!user) {
            return res.status(401).json({ success: false, msg: "could not find user" });
        }
        
        const isValid = validPassword(plaintextPassword, user.hash, user.salt);
        
        if (isValid) {
            const tokenObject = generateJwtToken(user, expiresIn);

            res.status(200).json({ 
                success: true, 
                token: tokenObject.token, 
                expiresIn: tokenObject.expires 
            });

        } else {
            res.status(401).json({ success: false, msg: "you entered the wrong password" });
        }
    })
}

export const protected_route = async(req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'You are allowed to watch the protected route !' })
}

export const register = async(req: Request, res: Response, next: NextFunction) => {
    const username: string = req.body.username
    const password: string = req.body.password

    const { salt, hash } = genPassword(password);

    const user = new UserModel({
        username, 
        hash, 
        salt
    })

    await user.save()

    res.status(200).json({ 'isRegistered': true });
}