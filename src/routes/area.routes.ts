import { Router } from 'express';
import areaController from '~/controllers/area.controller';
import newsController from '~/controllers/news.controller';
import { asyncHandler } from '~/utils/asyncHandler';
const router = Router();

router.get('/nearest', asyncHandler(areaController.getNearestArea));
router.get('/', asyncHandler(areaController.getAllAreas));
router.get('/:areaId/news', asyncHandler(newsController.getAllByAreaId));
router.get('/default', asyncHandler(areaController.getDefaultArea));

export default router;
