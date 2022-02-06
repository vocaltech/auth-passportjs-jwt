import { generateKeyPairSync } from 'crypto'
import { writeFileSync } from 'fs'

export const generateKeyPair = (): { privateKey: string, publicKey: string } => {

    const { privateKey, publicKey } = generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
          }
    })

    // save the keys
    const keysDir = __dirname + '/../../keys'
    writeFileSync(keysDir + '/id_rsa_pub.pem', publicKey)
    writeFileSync(keysDir + '/id_rsa_priv.pem', privateKey)

    return {
        privateKey,
        publicKey
    }
};
