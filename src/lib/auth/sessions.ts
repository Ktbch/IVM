import 'server-only'

// create cookies

import { cookies } from "next/headers"
import { jwtTokenHandler } from "./jwt"

const COOKIE_KEY = 'accessToken' as const

export type TSession = {
    name: string;
    value: string;
} | undefined

export const sessionHandler = {
    async createSession (payload: string) {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        const encryptedPayloadByJwT = jwtTokenHandler.signJwtToken(payload)
        const cookie = await cookies()
        cookie.set(COOKIE_KEY, encryptedPayloadByJwT, { expires: expiresAt, httpOnly: true, secure: true, sameSite: 'lax', path: '/' })
    },
    async getSession () {
        const cookie = await cookies()
        const token: TSession = cookie.get(COOKIE_KEY)
        return token
    },
    async decryptToken () {
        const token = await this.getSession()
        return jwtTokenHandler.verifyJwtToken(token?.value)

    },
    async deleteSession () {
        (await cookies()).delete(COOKIE_KEY)
    }
}
