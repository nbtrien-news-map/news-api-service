import { query } from 'express-validator';

export const latLngQueryValidator = [
    query('latitude').isFloat({ min: -90, max: 90 }).withMessage('Latitude is not valid'),
    query('longitude').isFloat({ min: -180, max: 180 }).withMessage('Longitude is not valid'),
];
