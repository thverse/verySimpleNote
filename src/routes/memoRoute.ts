import { Router } from 'express';
const router = Router();
import { getMemo, getMemoList, createMemo, deleteMemo, updateMemo } from '../controllers/memoController';

router.route('/')
    .get(getMemoList)
    .post(createMemo)
    .delete(deleteMemo)

router.route('/update')
    .post(updateMemo)

router.route('/:memoId')
    .get(getMemo)

export default router;
