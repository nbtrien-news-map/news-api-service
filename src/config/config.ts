import dotenv from 'dotenv';
dotenv.config();

export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS || '';
