import express, { Application } from 'express';
import { ALLOWED_ORIGINS } from './config/config';
import { errorHandler } from './middlewares/error.middleware';
import { areaRoutes, categoryRoutes, newsRoutes } from './routes';
const cors = require('cors');

const allowedOrigins = ALLOWED_ORIGINS.split(',').map((origin) => origin.trim());

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

export const createApp = (): Application => {
    const app = express();
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use('/api/news', newsRoutes);
    app.use('/api/areas', areaRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use(errorHandler);

    return app;
};
