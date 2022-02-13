import { genPassword, validPassword } from './passwordUtils'

describe('passwordUtils tests', () => {
    let plainTextPassword: string;
    let genSalt: string;
    let genHash: string;

    it(' should generate a password', () => {
        plainTextPassword = 'vocaltech';

        const { salt, hash } = genPassword(plainTextPassword);
        genSalt = salt
        genHash = hash

        expect(genSalt.length).toBe(64)
        expect(hash.length).toBe(128)
    })
    
    it(' should verify a password', () => {
        plainTextPassword = "vocaltech"

        const isValid = validPassword(plainTextPassword, genHash, genSalt)
        expect(isValid).toBeTruthy()
    })
})


