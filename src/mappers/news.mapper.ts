import { NewsResponseDto } from '~/dtos/news.dto';
import { MapNewsItemEntity } from '~/entities/map-news-item.entity';
import { toCategoryResponseDto } from './category.mapper';
import { toGeocodingLocationResponseDto } from './geocoding.mapper';

export const toNewsResponseDto = (entity: MapNewsItemEntity): NewsResponseDto => ({
    id: entity.mapNewsItemId,
    title: entity.title,
    description: entity.description,
    address: entity.address,
    geocodingLocation: entity.geocodingLocation ? toGeocodingLocationResponseDto(entity.geocodingLocation) : null,
    category: entity?.category ? toCategoryResponseDto(entity.category) : null,
});
