import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userSchema = pgTable('user-table', {
    id: serial('id').primaryKey().notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    is_admin: boolean('is_admin').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
})

export const profileTable = pgTable('profile-table', {
    profession: text('profession').notNull(),
    bussines_details: text('bussiness_details'),
    userId: integer().references(() => userSchema.id),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
})