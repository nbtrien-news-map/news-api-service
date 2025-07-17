import { Repository } from 'typeorm';
import AppDataSource from '~/config/database';
import { NewsTrackedAreaEntity } from '~/entities/news-tracked-area.entity';

export class NewsTrackedAreaRepository {
    private repository: Repository<NewsTrackedAreaEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(NewsTrackedAreaEntity);
    }

    async findAll(): Promise<NewsTrackedAreaEntity[]> {
        return await this.repository.find({ relations: ['geocodingLocation'] });
    }

    async findFirstArea(): Promise<NewsTrackedAreaEntity | null> {
        return await this.repository
            .createQueryBuilder('area')
            .innerJoinAndSelect('area.geocodingLocation', 'geo')
            .orderBy('area.newsTrackedAreaId', 'ASC')
            .limit(1)
            .getOne();
    }

    async findAreaByLatitudeAnLongitude(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .innerJoinAndSelect('area.geocodingLocation', 'geo')
            .where('geo.latitude = :latitude AND geo.longitude = :longitude', { latitude, longitude })
            .getOne();
    }

    async findAreaContainingLocation(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .innerJoinAndSelect('area.geocodingLocation', 'geo')
            .where(
                `CAST(geo.bounding_box->>0 AS double precision) <= :latitude AND
                CAST(geo.bounding_box->>2 AS double precision) >= :latitude AND
                CAST(geo.bounding_box->>1 AS double precision) <= :longitude AND
                CAST(geo.bounding_box->>3 AS double precision) >= :longitude`,
                { latitude, longitude }
            )
            .getOne();
    }

    async findNearestAreaByLocation(latitude: number, longitude: number): Promise<NewsTrackedAreaEntity | null> {
        return this.repository
            .createQueryBuilder('area')
            .innerJoinAndSelect('area.geocodingLocation', 'geo')
            .addSelect(
                `6371 * 2 * ASIN(
                    SQRT(
                    POWER(SIN(RADIANS(geo.latitude - :latitude) / 2), 2) +
                    COS(RADIANS(:latitude)) * COS(RADIANS(geo.latitude)) *
                    POWER(SIN(RADIANS(geo.longitude - :longitude) / 2), 2)
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
