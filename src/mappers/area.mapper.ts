import { AreaResponseDto } from '~/dtos/area.dto';
import { NewsTrackedAreaEntity } from '~/entities/news-tracked-area.entity';

export const toAreaResponseDto = (entity: NewsTrackedAreaEntity): AreaResponseDto => ({
    id: entity.newsTrackedAreaId,
    displayName: entity.displayName,
    name: entity.name,
    nameEn: entity.nameEn,
    shortName: entity.shortName,
    shortCode: entity.shortCode,
    addressType: entity.addressType,
    boundingBox: entity.boundingBox,
    latitude: entity.latitude,
    longitude: entity.longitude,
    importance: entity.importance,
    placeRank: entity.placeRank,
    osmType: entity.osmType,
    osmId: entity.osmId,
    adminLevel: entity.adminLevel,
    osmClass: entity.osmClass,
    osmTypeName: entity.osmTypeName,
});
