import { Router } from 'express';
import categoryController from '~/controllers/news-category.controller';
const router = Router();

router.get('/', categoryController.getAll);
export default router;
