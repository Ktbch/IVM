import { defineConfig } from 'drizzle-kit'


export default defineConfig({
    dialect: 'postgresql',
    out: './drizzle',
    schema: './src/lib/db/schemas.ts',
    dbCredentials: {
        url: 'postgres://postgres:Password@localhost:5432/inventory-app-remake'
    }
})