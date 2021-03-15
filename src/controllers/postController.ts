import { Request, Response } from 'express';
import { connect } from '../database';

export const getPosts = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");

    return res.json(posts[0]);
}

export const createPosts = async (req: Request, res: Response): Promise<Response> => {
    console.log("여기까지", req.body);
    const conn = await connect();
    const result = await conn.query(`
        INSERT INTO posts SET ?`, [req.body])

    return res.json({
        message : "Insert posts!"
    });
}