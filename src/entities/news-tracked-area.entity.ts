import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GeocodingLocationEntity } from './geocoding-location.entity';

@Entity({ name: 'news_tracked_area' })
export class NewsTrackedAreaEntity {
    @PrimaryGeneratedColumn({ name: 'news_tracked_area_id' })
    newsTrackedAreaId: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'display_name' })
    displayName: string;

    @Column({ name: 'name_en' })
    nameEn: string;

    @Column({ name: 'short_name' })
    shortName: string;

    @Column({ name: 'short_code' })
    shortCode: string;

    @ManyToOne(() => GeocodingLocationEntity)
    @JoinColumn({ name: 'geocoding_location_id', referencedColumnName: 'geocodingLocationId' })
    geocodingLocation: GeocodingLocationEntity;
}
