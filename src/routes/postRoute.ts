import { Router } from 'express';
const router = Router();
import { getPosts, createPosts } from '../controllers/postController';

router.route('/')
    .get(getPosts)
    .post(createPosts)



export default router;
