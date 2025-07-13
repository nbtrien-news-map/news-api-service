import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';
import { GeocodingLocationEntity } from './geocoding-location.entity';

@Entity({ name: 'map_news_item' })
export class MapNewsItemEntity extends CommonEntity {
    @PrimaryGeneratedColumn({ name: 'map_news_item_id' })
    mapNewsItemId: number;

    @Column({ length: 100 })
    provider: string;

    @Column({ length: 255, nullable: true })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ name: 'source_url', length: 500 })
    sourceUrl: string;

    @Column({ name: 'published_at', type: 'timestamp', nullable: true })
    publishedAt: Date;

    @ManyToOne(() => GeocodingLocationEntity)
    @JoinColumn({ name: 'geocoding_location_id', referencedColumnName: 'geocodingLocationId' })
    geocodingLocation: GeocodingLocationEntity;
}
