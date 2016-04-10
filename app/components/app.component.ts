import {Component, OnInit, Pipe, PipeTransform} from 'angular2/core';
import {Album} from '../models/album';
import {AlbumDetailComponent} from './album-detail.component';
import {AlbumService} from '../services/album.service';
import {AlbumFilterPipe} from '../filters/album.filter';

@Component({
  selector: 'my-app',
  templateUrl:'/app/components/app.component.html',
  styleUrls:['../app/scss/app.css'], //bug in angular2, https://github.com/angular/angular/issues/4974
  directives: [AlbumDetailComponent],
  pipes: [AlbumFilterPipe],
  providers: [AlbumService]
})
export class AppComponent implements OnInit {
  title = 'Top 100 Albums';
  albums: Album[];
  filterAlbums : Album[];
  selectedAlbum: Album;

  constructor(private _albumService: AlbumService) { }

  ngOnInit() {
      this._albumService.seedAlbum();
      this._albumService.albums.subscribe(albums => {
        this.albums = albums
      });
  }

  onSelect(album: Album) {
    if (!this.selectedAlbum
      || this.selectedAlbum !== album) {
        this.selectedAlbum = album;
      }
      else {
        this.selectedAlbum = null;
      }
   }

   clearFilter(filter : HTMLInputElement){
     filter.value = null;
   }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
