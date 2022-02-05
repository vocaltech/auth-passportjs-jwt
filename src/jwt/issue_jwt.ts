import jwt from 'jsonwebtoken'

export const issue_jwt = (payload: object, privateKey: string) => jwt.sign(payload, privateKey, { algorithm: 'RS256' })