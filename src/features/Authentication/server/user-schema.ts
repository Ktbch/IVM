import { boolean, integer, pgTable, PgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";


export const baseSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'password must be at least charcters' }),
})



export const signUpZodSchema = baseSchema.extend({
    confirmPassword: z.string().min(8, { message: 'password must be at least charcters' }),
    profession: z.string({ message: 'A value is Expected' }),
    bussines_details: z.string({ message: 'A value is expected' }).min(100, { message: 'it must be more than 100 charcters' }).max(150, { message: 'limit reached' })
}).refine((data) => data.password === data.confirmPassword, {
    message: 'passowrd does not match',
    path: [ 'confirmPassword' ]
})
