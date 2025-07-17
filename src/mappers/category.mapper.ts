import { CategoryResponseDto } from '~/dtos/category.dto';
import { NewsCategoryEntity } from '~/entities/news-category.entity';

export const toCategoryResponseDto = (entity: NewsCategoryEntity): CategoryResponseDto => ({
    id: entity.newsCategoryId,
    name: entity.name,
    description: entity.description,
    nameEn: entity.nameEn,
});
