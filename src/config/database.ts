import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { GeocodingLocationEntity } from '~/entities/geocoding-location.entity';
import { MapNewsItemEntity } from '~/entities/map-news-item.entity';
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [MapNewsItemEntity, GeocodingLocationEntity],
    synchronize: false,
    logging: false,
});

export const connectDB = async () => {
    try {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            console.log('DB initialized');
        }
    } catch (error) {
        console.error('PostgreSQL connection error:', error);
        throw error;
    }
};

export default AppDataSource;
