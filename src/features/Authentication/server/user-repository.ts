import 'server-only'
import { z } from 'zod'
import { baseSchema, signUpZodSchema } from './user-zod-schema'
import { db } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { userSchema } from '@/lib/db/schemas'



export class UserRepository {

    // change the names
    async loginUser (userDetails: z.infer<typeof baseSchema>) {
        const userFound = await db.select().from(userSchema).where(eq(userSchema.email, userDetails.email))
        return userFound
    }
    async RegisterUser (userDetails: Omit<z.infer<typeof signUpZodSchema>, "confirmPassword">) {
        const userFound = await db.insert(userSchema).values({ ...userDetails, is_admin: true }).returning()
        return userFound[ 0 ].id
    }
    async findUserById (id: number) {
        const userFound = await db.select({ id: userSchema.id, email: userSchema.email, is_admin: userSchema.is_admin }).from(userSchema).where(eq(userSchema.id, id))
        return userFound[ 0 ]
    }
}