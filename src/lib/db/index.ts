// Make sure to install the 'postgres' package
'server-only'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres('postgres://postgres:Password@localhost:5432/inventory-app-remake');

export const db = drizzle(queryClient);

