import base64url from 'base64url'

export const decode_jwt_node = (jwtToken: string): { decodedHeader: string, decodedPayload: string } => {
    const [header, payload] = jwtToken.split('.')

    const decodedHeader = base64url.decode(header)
    const decodedPayload = base64url.decode(payload)

    return { 
        decodedHeader, 
        decodedPayload 
    }
}


