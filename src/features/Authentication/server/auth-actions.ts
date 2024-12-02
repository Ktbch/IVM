'use server'

import { redirect } from "next/navigation"
import { UserRepository } from "./user-repository"
import { baseSchema, signUpZodSchema } from "./user-schema"
import { sessionHandler } from "@/lib/auth/sessions"



const userRepository = new UserRepository()
export const SignInActions = async (state: AuthFormState, data: FormData) => {
    console.log(data)
    const parsedData = baseSchema.safeParse(Object.fromEntries(data))

    if (!parsedData.success)
    {
        return {
            errors: parsedData.error.flatten()
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
        const userId = await userRepository.RegisterUser(parsedData.data)
        await sessionHandler.createSession(userId.toString())
        redirect('/')
    } catch (error)
    {
        throw error
    }
}