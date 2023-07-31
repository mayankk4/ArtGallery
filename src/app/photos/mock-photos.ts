import * as Photo from '../entities/photo';
import { ILocation } from '../entities/location';

export const almadaLocation: ILocation = {
    country: 'Portugal',
    city: 'Almada',
    description: 'Caparica'
}
export const lisbonLocation: ILocation = {
    country: 'Portugal',
    city: 'Lisbon',
    description: ''
}

export const caparicaSunset: Photo.IPhoto = {
    id: 0,
    title: 'Portugal',
    url_original: '../../assets/sunsetLisbon1.JPG',
    url_thumbnail: '../../assets/sunsetLisbon1.JPG',
    description: 'Sunset in Caparica',
    information: '',
    type: Photo.PhotoType.DEFAULT,
    location: almadaLocation,
    tags: [Photo.PhotoTag.SUNSET, Photo.PhotoTag.BEACH],
    commit_timestamp_s: Date.now(),
    creation_timestamp_s: new Date('2023-04-02').getTime()
}

export const caparicaSunset2: Photo.IPhoto = {
    id: 1,
    title: 'Portugal',
    url_original: '../../assets/sunsetLisbon2.JPG',
    url_thumbnail: '../../assets/sunsetLisbon2.JPG',
    description: 'Sunset in Caparica',
    information: '',
    type: Photo.PhotoType.DEFAULT,
    location: almadaLocation,
    tags: [Photo.PhotoTag.SUNSET, Photo.PhotoTag.BEACH],
    commit_timestamp_s: Date.now(),
    creation_timestamp_s: new Date('2023-04-02').getTime()
}

export const moorishCastle: Photo.IPhoto = {
    id: 2,
    title: 'Portugal',
    url_original: '../../assets/moorishCastle.JPG',
    url_thumbnail: '../../assets/moorishCastle.JPG',
    description: 'View from Moorish castle',
    information: '',
    type: Photo.PhotoType.DEFAULT,
    location: lisbonLocation,
    tags: [Photo.PhotoTag.DEFAULT],
    commit_timestamp_s: Date.now(),
    creation_timestamp_s: new Date('2023-04-02').getTime()
}

export const PHOTOS: Photo.IPhoto[] = [
    caparicaSunset, caparicaSunset2, moorishCastle
];