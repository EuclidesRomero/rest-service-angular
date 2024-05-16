import { Component, OnInit } from '@angular/core';
import {ServiceAlbumService} from '../service-album.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  results: Observable<any> | undefined;

  constructor(private as: ServiceAlbumService ) { 
    this.results = this.as.getAlbums();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
