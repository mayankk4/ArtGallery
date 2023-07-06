export interface ICollection {
    id: number;
    title: string;
    // A list of ids of photos in this collection.
    photos: Array<number>;
    description: string;    
}
