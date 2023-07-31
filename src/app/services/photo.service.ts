import { Injectable } from '@angular/core';
import { IPhoto } from '../entities/photo';
import { PHOTOS } from '../photos/mock-photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: IPhoto[] = PHOTOS;

  constructor() { }

  getPhotos() {
    return this.photos;
  }
}
