import { Request, Response } from 'express';

export const indexController = (req: Request, res: Response) => {
    return res.json("Welcome 1127 server");
}