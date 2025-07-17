import { CategoryResponseDto } from './category.dto';
import { GeocodingLocationResponseDto } from './geocoding.dto';

export class NewsResponseDto {
    id: number;
    title: string;
    description: string;
    address: string;
    geocodingLocation: GeocodingLocationResponseDto | null;
    category: CategoryResponseDto | null;
}
