import { Repository } from 'typeorm';
import { AppDataSource } from '~/config/database';
import { MapNewsItemEntity } from '~/entities/map-news-item.entity';

export class NewsRepository {
    private repository: Repository<MapNewsItemEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(MapNewsItemEntity);
    }

    async findAll(): Promise<MapNewsItemEntity[]> {
        const repo = AppDataSource.getRepository(MapNewsItemEntity);
        return await repo.find({ relations: ['geocodingLocation'] });
    }
}
