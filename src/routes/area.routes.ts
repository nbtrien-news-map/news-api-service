import { Router } from 'express';
import areaController from '~/controllers/area.controller';
import newsController from '~/controllers/news.controller';
import { handleValidationResult } from '~/middlewares/handleValidationResult';
import { asyncHandler } from '~/utils/asyncHandler';
import { latLngQueryValidator } from '~/validators/areaValidator';
const router = Router();

router.get('/nearest', latLngQueryValidator, handleValidationResult, asyncHandler(areaController.getNearestArea));
router.get('/', asyncHandler(areaController.getAllAreas));
router.get('/:areaId/news', asyncHandler(newsController.getAllByAreaId));
router.get('/default', asyncHandler(areaController.getDefaultArea));

router.get('/by-location', latLngQueryValidator, handleValidationResult, asyncHandler(areaController.getAreaByLatLong));

export default router;
