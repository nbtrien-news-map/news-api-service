import { Request, Response } from 'express';
import { NewsResponseDto } from '~/dtos/news.dto';
import { NewsService } from '~/services/news.service';
import { toNumber } from '~/utils/convert.utils';

class NewsController {
    private newsService: NewsService;

    constructor() {
        this.newsService = new NewsService();
    }

    getAllNews = async (req: Request, res: Response<NewsResponseDto[]>) => {
        const resullt = await this.newsService.getAllNews();
        res.json(resullt);
    };

    getAllByAreaId = async (req: Request, res: Response<NewsResponseDto[]>) => {
        const areaId = toNumber(req.params.areaId);
        if (!areaId) {
            throw new Error('Invalid areaId');
        }
        const resullt = await this.newsService.getAllByAreaId(areaId);
        res.json(resullt);
    };

    getAllByAreaIdAndCategoryIds = async (req: Request, res: Response<NewsResponseDto[]>) => {
        const areaId = toNumber(req.query.areaId);
        const categoryIdsParam = req.query.categoryIds as string;

        if (!areaId) {
            throw new Error('Invalid areaId or categoryIds');
        }
        if (!categoryIdsParam) {
            const resullt = await this.newsService.getAllByAreaId(areaId);
            res.json(resullt);
            return;
        }
        const categoryIds = categoryIdsParam
            .split(',')
            .map((id) => parseInt(id.trim()))
            .filter((id) => !isNaN(id));
        const resullt = await this.newsService.getAllByAreaIdAndCategoryIds(areaId, categoryIds);
        res.json(resullt);
    };
}

export default new NewsController();
