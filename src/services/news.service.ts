import { NewsResponseDto } from '~/dtos/news.dto';
import { toNewsResponseDto } from '~/mappers/news.mapper';
import { NewsRepository } from '~/repositories/news.repository';

export class NewsService {
    private newsRepository: NewsRepository;

    constructor() {
        this.newsRepository = new NewsRepository();
    }

    async getAllNews(): Promise<NewsResponseDto[]> {
        const entities = await this.newsRepository.findAll();
        return entities.map(toNewsResponseDto);
    }

    async getAllByAreaId(areaId: number): Promise<NewsResponseDto[]> {
        const entities = await this.newsRepository.findAllByAreaId(areaId);
        return entities.map(toNewsResponseDto);
    }

    async getAllByAreaIdAndCategoryIds(areaId: number, categoryIds: number[]): Promise<NewsResponseDto[]> {
        const entities = await this.newsRepository.findAllByAreaIdAndCategoryIds(areaId, categoryIds);
        return entities.map(toNewsResponseDto);
    }
}
