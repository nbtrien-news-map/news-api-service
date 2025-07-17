import { Repository } from 'typeorm';
import AppDataSource from '~/config/database';
import { NewsCategoryEntity } from '~/entities/news-category.entity';

export class NewsCategoryRepository {
    private repository: Repository<NewsCategoryEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(NewsCategoryEntity);
    }

    async findAll(): Promise<NewsCategoryEntity[]> {
        return await this.repository.find();
    }
}
