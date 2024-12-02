'use server'

import { redirect } from "next/navigation"
import { UserRepository } from "./user-repository"
import { baseSchema, signUpZodSchema } from "./user-schema"



const userRepository = new UserRepository()
export const SignInActions = async (state: any, data: FormData) => {
    console.log(data)
    const parsedData = baseSchema.safeParse(Object.fromEntries(data))

    if (!parsedData.success)
    {
        return {
            error: parsedData.error.flatten()
        }
    }
    try
    {
        const userFound = await userRepository.loginUser(parsedData.data)

        if (!userFound[ 0 ] || userFound[ 0 ].password !== parsedData.data.password)
        {
            return { error: 'invalid password or email address' }
        }

        redirect('/')
    } catch (error)
    {
        // todo catch database errors or server error
        console.log(error)
    }
}

export const signUpActions = async (state: any, data: Partial<FormData>) => {
    console.log(data)
    // const parsedData = signUpZodSchema.safeParse(Object.fromEntries(data))

    // if (!parsedData.success)
    // {
    //     return {
    //         error: parsedData.error.flatten()
    //     }
    // }
    // try
    // {
    //     await userRepository.RegisterUser(parsedData.data)
    //     redirect('/')
    // } catch (error)
    // {
    //     throw error
    // }
}