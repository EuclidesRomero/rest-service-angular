import { Component, OnInit } from '@angular/core';
import {ServiceAlbumService} from '../service-album.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
   information:any;
  
  constructor(private ar: ActivatedRoute, private as:ServiceAlbumService) { }
  ngOnInit() {
      let id = this.ar.snapshot.paramMap.get('id') as string;
      this.as.getDetail(id).subscribe(result => {
      this.information = result;
      }
    );
}
}