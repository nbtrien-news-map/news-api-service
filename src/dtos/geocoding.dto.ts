export class GeocodingLocationResponseDto {
    latitude: number;
    longitude: number;
    placeRank: number;
    importance: number;
    addressType: string;
    name: string;
    displayName: string;
    boundingBox: number[];
    osmType: string;
    osmId: number;
    adminLevel: string;
    osmClass: string;
    osmTypeName: string;
}
