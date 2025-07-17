export class GeocodingLocationResponseDto {
    placeId: string;
    latitude: number;
    longitude: number;
    placeRank: number;
    importance: number;
    addressType: string;
    name: string;
    displayName: string;
    boundingBox: number[];
}
