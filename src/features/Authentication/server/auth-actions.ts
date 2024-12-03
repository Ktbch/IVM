'use server'

import { redirect } from "next/navigation"
import { UserRepository } from "./user-repository"
import { baseSchema, signUpZodSchema } from "./user-schema"
import { sessionHandler } from "@/lib/auth/sessions"
import { passwordEncryptionHandler } from "@/lib/auth/passwordEncrypt"



const userRepository = new UserRepository()
export const SignInActions = async (state: AuthFormState, data: FormData) => {
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

        if (!userFound[ 0 ] || userFound[ 0 ].password !== parsedData.data.password)
        {
            return { errors: { email: 'invalid password or email address' } }
        }

        redirect('/')
    } catch (error)
    {
        // todo catch database errors or server error
        console.log(error)
    }
}

export const signUpActions = async (state: AuthFormState, data: FormData) => {
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
        redirect('/')
    } catch (error)
    {
        throw error
    }
}