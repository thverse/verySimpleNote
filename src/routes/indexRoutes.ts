import { Router } from 'express';
import { indexController } from '../controllers/indexController'

const router = Router();

router.route('/')
    .get(indexController);


export default router;

