import jwt from 'jsonwebtoken'

export const verify_jwt = (jwtToken: string, publickey: string) => jwt.verify(jwtToken, publickey, { algorithms: ['RS256'] })

