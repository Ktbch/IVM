import { boolean, integer, pgTable, PgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";


export const baseSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'password must be at least charcters' }),
})



export const signUpZodSchema = baseSchema.extend({
    confirmPassword: z.string().min(8, { message: 'password must be at least charcters' }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'passowrd does not match',
    path: [ 'confirmPassword' ]
})
