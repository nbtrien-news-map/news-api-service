import { Repository } from 'typeorm';
import AppDataSource from '~/config/database';
import { NewsTrackedAreaEntity } from '~/entities/news-tracked-area.entity';

export class NewsTrackedAreaRepository {
    private repository: Repository<NewsTrackedAreaEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(NewsTrackedAreaEntity);
    }

    async findAll(): Promise<NewsTrackedAreaEntity[]> {
        return await this.repository.find();
    }

    async findFirstArea(): Promise<NewsTrackedAreaEntity | null> {
        return await this.repository
            .createQueryBuilder('area')
            .orderBy('area.newsTrackedAreaId', 'ASC')
            .limit(1)
            .getOne();
    }

    async findAreaByLatitudeAnLongitude(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .where('latitude = :latitude AND longitude = :longitude', { latitude, longitude })
            .getOne();
    }

    async findAreasContainingLocation(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity[]> {
        return this.repository
            .createQueryBuilder('area')
            .where(
                `CAST(bounding_box->>0 AS double precision) <= :latitude AND
                CAST(bounding_box->>2 AS double precision) >= :latitude AND
                CAST(bounding_box->>1 AS double precision) <= :longitude AND
                CAST(bounding_box->>3 AS double precision) >= :longitude`,
                { latitude, longitude }
            )
            .getMany();
    }

    async findAreaContainingLocation(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .where(
                `CAST(bounding_box->>0 AS double precision) <= :latitude AND
                CAST(bounding_box->>2 AS double precision) >= :latitude AND
                CAST(bounding_box->>1 AS double precision) <= :longitude AND
                CAST(bounding_box->>3 AS double precision) >= :longitude`,
                { latitude, longitude }
            )
            .getOne();
    }

    async findNearestAreaByLocation(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .addSelect(
                `6371 * 2 * ASIN(
                    SQRT(
                    POWER(SIN(RADIANS(latitude - :latitude) / 2), 2) +
                    COS(RADIANS(:latitude)) * COS(RADIANS(latitude)) *
                    POWER(SIN(RADIANS(longitude - :longitude) / 2), 2)
                    )
                )`,
                'distance'
            )
            .setParameters({ latitude, longitude })
            .orderBy('distance', 'ASC')
            .limit(1)
            .getOne();
    }
}
