import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '~/errors/NotFoundError';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (err instanceof NotFoundError) {
        return res.status(err.status).json({
            error: err.message,
        });
    }

    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        error: message,
    });
};
