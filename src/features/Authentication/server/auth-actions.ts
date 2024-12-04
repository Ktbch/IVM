import 'server-only'

import { redirect } from "next/navigation"
import { UserRepository } from "./user-repository"
import { baseSchema, signUpZodSchema } from "./user-zod-schema"
import { sessionHandler } from "@/lib/auth/sessions"
import { passwordEncryptionHandler } from "@/lib/auth/passwordEncrypt"
import { NAVIGATION_LINKS } from '@/shared/constants'





const userRepository = new UserRepository()


// refactor this later
export const AuthActionHandler = {
    signInActions: async (state: AuthFormState | undefined, data: FormData): Promise<AuthFormState> => {
        'use server'
        const parsedData = baseSchema.safeParse(Object.fromEntries(data))

        if (!parsedData.success)
        {
            return {
                errors: parsedData.error.flatten().fieldErrors
            }
        }
        try
        {
            const userFound = await userRepository.loginUser(parsedData.data)
            // refactor this later
            if (!userFound[ 0 ] || !await passwordEncryptionHandler.comparePassword(parsedData.data.password, userFound[ 0 ].password))
            {
                return { errors: { email: [ 'invalid password or email address' ] } }
            }
            await sessionHandler.createSession(userFound[ 0 ].id.toString())
            redirect(NAVIGATION_LINKS.redirectLinks.dashbaord)
        } catch (error)
        {
            // todo catch database errors or server error
            throw error
        }
    },
    signUpActions: async (state: AuthFormState | undefined, data: FormData): Promise<AuthFormState> => {
        'use server'
        const parsedData = signUpZodSchema.safeParse(Object.fromEntries(data))

        if (!parsedData.success)
        {
            return {
                errors: parsedData.error.flatten().fieldErrors
            }
        }
        try
        {
            const hashPassword = await passwordEncryptionHandler.hashPassword(parsedData.data.password)
            const userId = await userRepository.RegisterUser({ ...parsedData.data, password: hashPassword })
            await sessionHandler.createSession(userId.toString())
            redirect(NAVIGATION_LINKS.redirectLinks.dashbaord)
        } catch (error)
        {
            throw error
        }
    }
}

