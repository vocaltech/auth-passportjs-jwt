import { readFileSync } from 'fs'
import { generateKeyPair } from './generateKeyPair'

describe('generate public and private keys', () => {
    it(' should generate key pair', () => {
        const { privateKey, publicKey } = generateKeyPair()

        const keysDir = __dirname + '/../../keys'

        const pubKey = readFileSync(keysDir + '/id_rsa_pub.pem', 'utf-8')
        expect(publicKey).toEqual(pubKey)

        const privKey = readFileSync(keysDir + '/id_rsa_priv.pem', 'utf-8')
        expect(privateKey).toEqual(privKey)
    });
});
