import { AreaResponseDto } from '~/dtos/area.dto';
import { NewsTrackedAreaEntity } from '~/entities/news-tracked-area.entity';
import { toGeocodingLocationResponseDto } from './geocoding.mapper';

export const toAreaResponseDto = (entity: NewsTrackedAreaEntity): AreaResponseDto => ({
    id: entity.newsTrackedAreaId,
    displayName: entity.displayName,
    name: entity.name,
    nameEn: entity.nameEn,
    shortName: entity.shortName,
    shortCode: entity.shortCode,
    geocodingLocation: toGeocodingLocationResponseDto(entity.geocodingLocation),
});
