import base64url from 'base64url'
import { createVerify } from 'crypto'

export const verify_jwt_node = (jwtToken: string, publickey: string): boolean => {
    const [base64UrlHeader, base64UrlPayload, base64UrlSignature] = jwtToken.split('.')

    const jwtVerify = createVerify('RSA-SHA256')
    jwtVerify.write(base64UrlHeader + '.' + base64UrlPayload)
    jwtVerify.end()

    const jwtSignatureBase64 = base64url.toBase64(base64UrlSignature)

    return jwtVerify.verify(publickey, jwtSignatureBase64, 'base64')
}
