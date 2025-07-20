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

    @Column({ name: 'osm_type', type: 'varchar' })
    osmType: string;

    @Column({ name: 'osm_id' })
    osmId: number;

    @Column({ name: 'admin_level', type: 'varchar' })
    adminLevel: string;

    @Column({ name: 'osm_class' })
    osmClass: string;

    @Column({ name: 'osm_type_name' })
    osmTypeName: string;

    @Column({ name: 'latitude', type: 'double precision' })
    latitude: number;

    @Column({ name: 'longitude', type: 'double precision' })
    longitude: number;

    @Column({ name: 'place_rank', type: 'int' })
    placeRank: number;

    @Column({ name: 'importance', type: 'double precision' })
    importance: number;

    @Column({ name: 'address_type', type: 'varchar' })
    addressType: string;

    @Column({
        name: 'bounding_box',
        type: 'jsonb',
    })
    boundingBox: number[];

    // @ManyToOne(() => GeocodingLocationEntity)
    // @JoinColumn({ name: 'geocoding_location_id', referencedColumnName: 'geocodingLocationId' })
    // geocodingLocation: GeocodingLocationEntity;
}
