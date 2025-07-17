import { Request, Response } from 'express';
import { AreaResponseDto } from '~/dtos/area.dto';
import { TrackedAreaService } from '~/services/tracked-area.service';
import { toNumber } from '~/utils/convert.utils';

class AreaController {
    private areaService: TrackedAreaService;
    constructor() {
        this.areaService = new TrackedAreaService();
    }

    getDefaultArea = async (req: Request, res: Response<AreaResponseDto>) => {
        const resullt = await this.areaService.getFirstArea();
        res.json(resullt);
    };

    getAllAreas = async (req: Request, res: Response<AreaResponseDto[]>) => {
        const resullt = await this.areaService.getAllAreas();
        res.json(resullt);
    };

    getNearestArea = async (req: Request, res: Response) => {
        const latitude = toNumber(req.query.latitude);
        const longitude = toNumber(req.query.longitude);

        if (latitude === null || longitude === null) {
            throw new Error('Invalid latitude or longitude');
        }

        const nearestArea = await this.areaService.getNearestAreaByLocation(latitude, longitude);
        res.json(nearestArea);
    };
}

export default new AreaController();
