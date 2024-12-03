import jwt from "jsonwebtoken";

const JWT_SECRET = 'IVMNEN'


// this encrypts the user id with JSONWEBTOKEN



export const jwtTokenHandler = {
    signJwtToken (payload: string) {
        return jwt.sign(payload, JWT_SECRET)
    },
    verifyJwtToken (token: string) {
        return jwt.verify(token, JWT_SECRET)
    }
}
