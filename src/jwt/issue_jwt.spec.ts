import path from 'path'
import { issue_jwt, issue_jwt_expires } from './issue_jwt'
import { readFileSync } from 'fs'

describe('issue_jwt tests', () => {
    it(' issue_jwt() without expires', () => {
        const JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ'
    
        const payload = {
            'sub': '1234567890',
            'name': 'John Doe',
            'admin': true,
            'iat': 1516239022
        }

        const pathToKey = path.join(__dirname, '../../keys', 'id_rsa_priv.pem')
        const privateKey = readFileSync(pathToKey, 'utf-8')
        const jwtToken = issue_jwt(payload, privateKey)

        expect(jwtToken).toBe(JWT)
    });

    it(' issue_jwt_expires() - should return the jwt token', () => {
        const JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.ggI8U60CyaxvuGBcR8MNlhqqMiWF0-1JZPKtD_SurY9ONV-5dTBlH_zOalwXqpq9qyEMpDp1sSfmutE69DpLi53MSPEYrhfmHQlJKZPhaLeaHggUNaOiHvKbM_YEbCVk-Fwvb1sxD_HlZZPxJaEgkA3AMLl4zyqDUnRwsAT_0aR4k-35gZaHefYUlJDwvNEzLA64RTeYPMYRKxeigktYVbLFCfbq70r2rvCmB2gCIorpCb0zVppOYREcPka9UHBjm-tD5fT6lQ5bBylgin3eh7lg6gMFsJixeLmyaQ98fsjRxsF5rYFs29VbTKM2Ixiq8Aozg76aJ8Tl1uXNcM2wBg'
    
        const payload = {
            'sub': '1234567890',
            'name': 'John Doe',
            'admin': true,
            'iat': 1516239022
        }

        const pathToKey = path.join(__dirname, '../../keys', 'id_rsa_priv.pem')
        const privateKey = readFileSync(pathToKey, 'utf-8')
        const jwtToken = issue_jwt_expires(payload, privateKey, '1d')

        expect(jwtToken).toBe(JWT)
    });
});
