import { cleanEnv, str, host, port } from 'envalid';

export const validatedEnv = () => {
    cleanEnv(process.env, {
        SERVER_HOST: host(),
        SERVER_PORT: port(),
        MONGO_HOST: host(),
        MONGO_PORT: port(),
        MONGO_DB: str(),
        MONGO_USER: str(),
        MONGO_PASSWORD: str(),
        PUBLIC_KEY: str(),
        PRIVATE_KEY: str()
    })
}