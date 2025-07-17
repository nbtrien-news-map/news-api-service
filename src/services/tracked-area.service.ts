import { AreaResponseDto } from '~/dtos/area.dto';
import { NotFoundError } from '~/errors/NotFoundError';
import { toAreaResponseDto } from '~/mappers/area.mapper';
import { NewsTrackedAreaRepository } from '~/repositories/news-tracked-area.repository';

export class TrackedAreaService {
    private newsTrackedAreaRepository: NewsTrackedAreaRepository;

    constructor() {
        this.newsTrackedAreaRepository = new NewsTrackedAreaRepository();
    }

    async getAllAreas(): Promise<AreaResponseDto[]> {
        const entities = await this.newsTrackedAreaRepository.findAll();
        return entities.map(toAreaResponseDto);
    }

    async getFirstArea(): Promise<AreaResponseDto> {
        const entity = await this.newsTrackedAreaRepository.findFirstArea();
        if (!entity) {
            throw new NotFoundError('No area found');
        }
        return toAreaResponseDto(entity);
    }

    async getNearestAreaByLocation(latitude: number, longitude: number): Promise<AreaResponseDto> {
        const exactMatchArea = await this.newsTrackedAreaRepository.findAreaByLatitudeAnLongitude(latitude, longitude);
        if (exactMatchArea) {
            return toAreaResponseDto(exactMatchArea);
        }

        const containingArea = await this.newsTrackedAreaRepository.findAreaContainingLocation(latitude, longitude);
        if (containingArea) {
            return toAreaResponseDto(containingArea);
        }

        const nearestArea = await this.newsTrackedAreaRepository.findNearestAreaByLocation(latitude, longitude);

        if (!nearestArea) {
            throw new NotFoundError('No area found for the given location');
        }
        return toAreaResponseDto(nearestArea);
    }
}
