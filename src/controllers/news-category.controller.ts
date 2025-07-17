import { Request, Response } from 'express';
import { CategoryResponseDto } from '~/dtos/category.dto';
import { NewsCategoryService } from '~/services/news-category.service';

class NewsCategoryController {
    private newsCategoryService: NewsCategoryService;
    constructor() {
        this.newsCategoryService = new NewsCategoryService();
    }

    getAll = async (req: Request, res: Response<CategoryResponseDto[]>) => {
        const resullt = await this.newsCategoryService.getAll();
        res.json(resullt);
    };
}

export default new NewsCategoryController();
