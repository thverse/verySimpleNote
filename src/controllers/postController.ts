import { Request, Response } from 'express';
import { connect } from '../database';
import { Post } from '../interface/post'

export const getPosts = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");

    return res.json(posts[0]);
}

export const getPost = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const postId: string = req.params.postId 
    const result = await conn.query(`SELECT * FROM posts WHERE id = ?`, [postId]);

    return res.json(result[0]);
}

export const deletePost = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const postId: string = req.params.postId 
    const result = await conn.query(`SELECT * FROM posts WHERE id = ?`, [postId]);

    return res.json(result[0]);
}

export const createPost = async (req: Request, res: Response): Promise<Response> => {
    const newPost: Post = req.body;
    const conn = await connect();

    let message = null;

    try {
        const result = await conn.query(`
        INSERT INTO posts SET ?`, [newPost]);
        message = result;

    } catch (error) {
        
        console.log('Error : ', error);
        message = error;
    }



    return res.json({
        message : message
    });
}
