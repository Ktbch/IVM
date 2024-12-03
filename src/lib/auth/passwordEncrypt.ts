import { compare, hash } from 'bcrypt-ts'

export const passwordEncryptionHandler = {
    async encryptPassword (password: string, salt = 10) {
        return await hash(password, salt)
    },
    async comparePassword (password: string, hashedPassword: string,) {
        return await compare(password, hashedPassword)
    },
}