import { Component } from '@angular/core';
import * as Photo from '../entities/photo';
import { PhotoService } from '../services/photo.service';




@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers : [PhotoService]
})
export class PhotosComponent {
  constructor(private photoService : PhotoService){}
  photos: Photo.IPhoto[] = this.photoService.getPhotos();
}
