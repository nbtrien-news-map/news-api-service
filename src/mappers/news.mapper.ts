import { NewsResponseDto } from '~/dtos/news.dto';
import { MapNewsItemEntity } from '~/entities/map-news-item.entity';

export const toNewsResponseDto = (entity: MapNewsItemEntity): NewsResponseDto => ({
    id: entity.mapNewsItemId,
    title: entity.title,
    description: entity.description,
    lat: entity.geocodingLocation.latitude,
    long: entity.geocodingLocation.longitude,
});
