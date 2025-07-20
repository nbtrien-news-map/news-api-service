import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './common.entity';

@Entity({ name: 'geocoding_location' })
export class GeocodingLocationEntity extends CommonEntity {
    @PrimaryGeneratedColumn({ name: 'geocoding_location_id' })
    geocodingLocationId: number;

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

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'display_name', type: 'varchar' })
    displayName: string;

    @Column({
        name: 'bounding_box',
        type: 'jsonb',
    })
    boundingBox: number[];
}
