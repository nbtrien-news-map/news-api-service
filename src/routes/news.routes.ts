import { Router } from 'express';
import newsController from '~/controllers/news.controller';
import { asyncHandler } from '~/utils/asyncHandler';

const router = Router();

router.get('/', asyncHandler(newsController.getAllNews));
router.get('/filter', asyncHandler(newsController.getAllByAreaIdAndCategoryIds));

export default router;
