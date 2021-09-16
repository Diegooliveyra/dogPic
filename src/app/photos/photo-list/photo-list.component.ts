import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private service: PhotoService) {}
  ngOnInit(): void {
    this.service.listFromUser('flavio').subscribe((photos) => {
      this.photos = photos;
    });
  }
}