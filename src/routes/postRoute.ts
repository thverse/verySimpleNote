import { Router } from 'express';
const router = Router();
import { getPost, getPosts, createPost } from '../controllers/postController';

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPost)

export default router;
