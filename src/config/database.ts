import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../db/schema';

const sqlite = new Database('./sqlite/database.db');
export const db = drizzle(sqlite, { schema });
