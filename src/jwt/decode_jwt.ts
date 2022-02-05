import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken'

export const decode_jwt = (jwtToken: string): { header: JwtHeader | undefined, payload: string | JwtPayload | undefined } => {
    const decoded = jwt.decode(jwtToken, { complete: true })

    return {
        header: decoded?.header,
        payload: decoded?.payload
    }
};
