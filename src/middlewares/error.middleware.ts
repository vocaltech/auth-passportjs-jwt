import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException'

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = 'An error occured !' } = error;
    res.status(status).json({ status, message });
}