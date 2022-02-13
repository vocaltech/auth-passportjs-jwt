import { randomBytes, pbkdf2Sync } from 'crypto';

export const validPassword = (password: string, hash: string, salt: string): boolean => {
    const hashVerify = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return (hashVerify === hash)
}

export const genPassword = (password: string): { salt: string, hash: string } => {
    const salt = randomBytes(32).toString('hex');
    const hash = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt,
        hash
    }
}

