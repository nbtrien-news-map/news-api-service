import { CategoryResponseDto } from './category.dto';
import { GeocodingLocationResponseDto } from './geocoding.dto';

export class NewsResponseDto {
    id: number;
    title: string;
    description: string;
    address: string;
    provider: string;
    sourceUrl: string;
    publishedAt: Date;
    geocodingLocation: GeocodingLocationResponseDto | null;
    category: CategoryResponseDto | null;
}
