import base64url from 'base64url'
import { createSign } from 'crypto'

export const issue_jwt_node = (header: object, payload: object, privateKey: string): string => {
    const jwtHeader = base64url(JSON.stringify(header))
    const jwtPayload = base64url(JSON.stringify(payload))

    const jwtSign = createSign('RSA-SHA256')
    jwtSign.write(jwtHeader + '.' + jwtPayload)
    jwtSign.end()

    const signature = jwtSign.sign(privateKey, 'base64')

    return base64url.fromBase64(signature)
}