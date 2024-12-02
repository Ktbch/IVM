import { boolean, integer, pgTable, PgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const userSchema = pgTable('user-table', {
    id: integer('id').primaryKey().notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    is_admin: boolean('is_admin').notNull(),
    profession: text('profession').notNull(),
    bussines_details: text('bussiness_details'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
})

export const baseSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'password must be at least charcters' }),
})

export const signinZodSchema = baseSchema.extend({
    confirmPassword: z.string().min(8, { message: 'password must be at least charcters' })
}).refine((data) => data.password === data.confirmPassword, {
    message: 'passowrd does not match',
    path: [ 'confirmPassword' ]
})
