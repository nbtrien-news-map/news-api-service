import { CategoryResponseDto } from '~/dtos/category.dto';
import { toCategoryResponseDto } from '~/mappers/category.mapper';
import { NewsCategoryRepository } from '~/repositories/news-category.repository';

export class NewsCategoryService {
    private newsCategoryRepository: NewsCategoryRepository;

    constructor() {
        this.newsCategoryRepository = new NewsCategoryRepository();
    }

    async getAll(): Promise<CategoryResponseDto[]> {
        const entities = await this.newsCategoryRepository.findAll();
        return entities.map(toCategoryResponseDto);
    }
}
