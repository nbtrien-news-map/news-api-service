import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'news_category' })
export class NewsCategoryEntity {
    @PrimaryGeneratedColumn({ name: 'news_category_id' })
    newsCategoryId: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'name_en' })
    nameEn: string;

    @Column({ name: 'description' })
    description: string;
}
