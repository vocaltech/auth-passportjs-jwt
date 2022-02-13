import path from 'path'
import fs from 'fs'

import { User } from '../users/user.interface'
import { issue_jwt, issue_jwt_expires } from '../jwt/issue_jwt'

export const generateJwtToken = (user: User, expiresIn?: string): { token: string, expires?: string } => {
    const _id = user._id.toString();
    const epochTimestamp = Math.round(Date.now() / 1000)
  
    const payload = {
      sub: _id,
      iat: epochTimestamp
    }

    const pathToKey = path.join(__dirname, '../../keys', process.env.PRIVATE_KEY!);
    const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');
    let signedToken: string
  
    if (expiresIn) {
        signedToken = issue_jwt_expires(payload, PRIV_KEY, expiresIn)
    } else {
        signedToken = issue_jwt(payload, PRIV_KEY)
    }
  
    return {
      token: "Bearer " + signedToken,
      expires: expiresIn
    }

}