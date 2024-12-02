'server-only'
import { z } from 'zod'
import { baseSchema, userSchema } from './user-schema'
import { db } from '@/lib/db'
import { eq } from 'drizzle-orm'



export class UserRepository {

    // change the names
    async loginUser (userDetails: z.infer<typeof baseSchema>) {
        const userFound = await db.select().from(userSchema).where(eq(userSchema.email, userDetails.email))
        return userFound
    }
    // async RegisterUser (userDetails: z.infer<typeof baseSchema>) {
    //     const newUser = db.insert(userSchema).values({})
    //     return userFound
    // }
}