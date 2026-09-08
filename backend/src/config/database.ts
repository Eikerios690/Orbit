import { Pool } from 'pg';

export const db = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  user: process.env.DB_USER || 'orbit',
  password: process.env.DB_PASSWORD || 'orbit_dev',
  database: process.env.DB_NAME || 'orbit',
});