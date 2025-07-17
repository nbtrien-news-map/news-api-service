import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { GeocodingLocationEntity } from './geocoding-location.entity';
import { NewsCategoryEntity } from './news-category.entity';
import { NewsTrackedAreaEntity } from './news-tracked-area.entity';

@Entity({ name: 'map_news_item' })
export class MapNewsItemEntity extends CommonEntity {
    @PrimaryGeneratedColumn({ name: 'map_news_item_id' })
    mapNewsItemId: number;

    @Column({ name: 'provider', length: 100 })
    provider: string;

    @Column({ name: 'title', length: 255, nullable: true })
    title: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @Column({ name: 'address', type: 'text', nullable: true })
    address: string;

    @Column({ name: 'source_url', length: 500 })
    sourceUrl: string;

    @Column({ name: 'sync_status' })
    syncStatus: number;

    @Column({ name: 'published_at', type: 'timestamp', nullable: true })
    publishedAt: Date;

    @ManyToOne(() => GeocodingLocationEntity)
    @JoinColumn({ name: 'geocoding_location_id', referencedColumnName: 'geocodingLocationId' })
    geocodingLocation: GeocodingLocationEntity;

    @ManyToOne(() => NewsCategoryEntity)
    @JoinColumn({ name: 'category_id', referencedColumnName: 'newsCategoryId' })
    category: NewsCategoryEntity;

    @ManyToMany(() => NewsTrackedAreaEntity)
    @JoinTable({
        name: 'map_news_item_tracked_area',
        joinColumn: { name: 'map_news_item_id', referencedColumnName: 'mapNewsItemId' },
        inverseJoinColumn: { name: 'news_tracked_area_id', referencedColumnName: 'newsTrackedAreaId' },
    })
    trackedAreas: NewsTrackedAreaEntity[];
}
