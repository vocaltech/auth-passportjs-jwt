import jwt from 'jsonwebtoken'

export const issue_jwt = (payload: object, privateKey: string) => jwt.sign(payload, privateKey, { algorithm: 'RS256' })
export const issue_jwt_expires = (payload: object, privateKey: string, expiresIn: string) => jwt.sign(payload, privateKey, { expiresIn, algorithm: 'RS256' })