import { Repository } from 'typeorm';
import { AppDataSource } from '~/config/database';
import { MapNewsItemEntity } from '~/entities/map-news-item.entity';
import { NewsSyncStatusEnum } from '~/enums/news-sync-status.enum';

export class NewsRepository {
    private repository: Repository<MapNewsItemEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(MapNewsItemEntity);
    }

    async findAll(): Promise<MapNewsItemEntity[]> {
        return await this.repository.find({ relations: ['geocodingLocation'] });
    }

    async findAllByAreaId(areaId: number): Promise<MapNewsItemEntity[]> {
        return await this.repository
            .createQueryBuilder('news')
            .innerJoinAndSelect('news.trackedAreas', 'area')
            .leftJoinAndSelect('news.geocodingLocation', 'geocodingLocation')
            .leftJoinAndSelect('news.category', 'category')
            .where('news.syncStatus = :syncStatus', { syncStatus: NewsSyncStatusEnum.SYNCED_GEOCODING_LOCATION })
            .andWhere('area.newsTrackedAreaId = :areaId', { areaId })
            .orderBy('news.publishedAt', 'DESC')
            .getMany();
    }

    async findAllByAreaIdAndCategoryIds(areaId: number, categoryIds: number[]): Promise<MapNewsItemEntity[]> {
        return await this.repository
            .createQueryBuilder('news')
            .innerJoinAndSelect('news.trackedAreas', 'area')
            .leftJoinAndSelect('news.geocodingLocation', 'geocodingLocation')
            .leftJoinAndSelect('news.category', 'category')
            .where('news.syncStatus = :syncStatus', { syncStatus: NewsSyncStatusEnum.SYNCED_GEOCODING_LOCATION })
            .andWhere('area.newsTrackedAreaId = :areaId', { areaId })
            .andWhere('category.newsCategoryId IN (:...categoryIds)', { categoryIds })
            .orderBy('news.publishedAt', 'DESC')
            .getMany();
    }
}
