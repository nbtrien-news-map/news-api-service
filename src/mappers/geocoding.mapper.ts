import { GeocodingLocationResponseDto } from '~/dtos/geocoding.dto';
import { GeocodingLocationEntity } from '~/entities/geocoding-location.entity';

export const toGeocodingLocationResponseDto = (entity: GeocodingLocationEntity): GeocodingLocationResponseDto => ({
    placeId: entity.placeId,
    addressType: entity.addressType,
    boundingBox: entity.boundingBox,
    latitude: entity.latitude,
    longitude: entity.longitude,
    displayName: entity.displayName,
    name: entity.name,
    importance: entity.importance,
    placeRank: entity.placeRank,
});
