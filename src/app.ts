import express, { Application } from 'express';
import { errorHandler } from './middlewares/error.middleware';
import newsRoutes from './routes/news.routes';

export const createApp = (): Application => {
    const app = express();

    app.use(express.json());
    app.use('/api/news', newsRoutes);
    app.use(errorHandler);

    return app;
};
