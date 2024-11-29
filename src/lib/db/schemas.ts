import { boolean, integer, pgTable, PgTable, text, timestamp } from "drizzle-orm/pg-core";

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