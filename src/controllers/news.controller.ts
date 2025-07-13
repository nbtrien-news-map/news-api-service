import { Request, Response } from 'express';
import { NewsService } from '~/services/news.service';

class NewsController {
    private newsService: NewsService;

    constructor() {
        this.newsService = new NewsService();
    }

    getAllNews = async (req: Request, res: Response<any[]>) => {
        const resullt = await this.newsService.getAllNews();
        res.json(resullt);
    };
}

export default new NewsController();
