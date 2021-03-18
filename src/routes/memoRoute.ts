import { Router } from 'express';
const router = Router();
import { getMemo, getMemoList, createMemo, deleteMemo } from '../controllers/memoController';

router.route('/')
    .get(getMemoList)
    .post(createMemo)
    .delete(deleteMemo)

router.route('/:memoId')
    .get(getMemo)

export default router;
