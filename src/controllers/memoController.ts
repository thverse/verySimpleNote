import { Request, Response } from 'express';
import { connect } from '../database';
import { Memo } from '../interface/memo'

export const getMemoList = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const result = await conn.query("SELECT * FROM memo_list");

    return res.json(result[0]);
}

export const getMemo = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const postId: string = req.params.postId 
    const result = await conn.query(`SELECT * FROM memo_list WHERE id = ?`, [postId]);

    return res.json(result[0]);
}

export const deleteMemo = async (req: Request, res: Response): Promise<Response> => {

    const conn = await connect();
    const memoId: string = req.body.memoId;
    const result = await conn.query(`UPDATE memo_list SET deleted='Y' WHERE id=?`, [memoId]);

    return res.json(result[0]);
}

export const createMemo = async (req: Request, res: Response): Promise<Response> => {
    const newMemo: Memo = req.body;
    const conn = await connect();

    let message = null;

    try {
        const result = await conn.query(`
        INSERT INTO posts SET ?`, [newMemo]);
        message = "SUCCESS CREATE MEMO!";

    } catch (error) {
        
        console.log('Error : ', error);
        message = error;
    }



    return res.json({
        message : message
    });
}
