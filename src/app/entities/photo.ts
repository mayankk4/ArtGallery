import { ILocation } from "./location";

export enum PhotoType {
    // A regular photo.
    DEFAULT = 0,
    // A photo which can be used with the Overlay component.
    OVERLAY = 1,
}

export enum PhotoTag {
    // No tag specified.
    DEFAULT = 0,
    SUNSET = 1,
    BEACH = 2,
    WINTER = 3,
}

// Interface representing a single photo.
export interface IPhoto {
    id: number;
    title: string;

    // URL to the original high-resolution photo.
    url_original: string;
    // URL to the pre-processed thumbnail for the photo.
    url_thumbnail: string;

    // A short summary of the image.
    description: string;
    information: string;

    // The type of the photo, used to filter photos which are compatible with
    // some special kinds of components.
    type: PhotoType
    // Where the photo was taken.
    location: ILocation;
    // Tags associated with the photo.
    tags: Array<PhotoTag>;

    // The UNIX timestamp (seconds) when the photo was uploaded to the DB.
    commit_timestamp_s: number;
    // The UNIX timestamp (seconds) when the photo was taken.
    creation_timestamp_s: number;
}
