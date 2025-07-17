import { GeocodingLocationResponseDto } from './geocoding.dto';

export class AreaResponseDto {
    id: number;
    name: string;
    displayName: string;
    nameEn: string;
    shortName: string;
    shortCode: string;
    geocodingLocation: GeocodingLocationResponseDto;
}
