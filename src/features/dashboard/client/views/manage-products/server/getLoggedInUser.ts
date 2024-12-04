'user server'

import { UserRepository } from "@/features/Authentication/server/user-repository"
import { sessionHandler } from "@/lib/auth/sessions"

const userRepository = new UserRepository()
// refactor this later

export const getLoggedInUser = async () => {
    const userId = await sessionHandler.decryptToken()
    if (typeof userId === 'string')
    {
        try
        {
            const userDetails = await userRepository.findUserById(parseInt(userId))
            return userDetails
        } catch (error)
        {
            throw error
        }
    }


} 