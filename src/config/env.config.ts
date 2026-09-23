import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const envToken = { 
  baseUrl: process.env.BASE_URL || 'http:localhost:3000',
  token: process.env.TOKEN || 'default-token'
};

export const envPGConfig = {
  user: process.env.POSTGRES_USER || '',
  password: process.env.POSTGRES_PASSWORD || '',
  host: process.env.POSTGRES_HOST || '',
  port: process.env.POSTGRES_PORT || 5432,
  schema: process.env.POSTGRES_SCHEMA || 'public'
};

