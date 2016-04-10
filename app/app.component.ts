import {Component, OnInit} from 'angular2/core';
import {Album} from './album';
import {AlbumDetailComponent} from './album-detail.component';
import {AlbumService} from './album.service';

@Component({
  selector: 'my-app',
  template:`
    <div class="container-fluid">
      <h1 class="text-center">{{title}}</h1>
      <div class="info col-xs-12 col-sm-6">
        <my-album-detail [(album)]="selectedAlbum"></my-album-detail>
      </div>
      <div class="albums pull-right col-xs-12 col-sm-6">
        <div class="btn btn-default col-xs-12" *ngFor="#album of albums"
          [class.selected]="album === selectedAlbum"
          (click)="onSelect(album)">
          <span class="badge col-xs-12 col-sm-6">{{album.artist}}</span>
          <span class="name col-xs-12 col-sm-6">{{album.name}}</span>
        </div>
      </div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .info {
      position:fixed;
      top:80px;
      left:2px;
      z-index:10;
    }
    .albums {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
    }
    .albums .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .albums .btn {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      border-radius: 4px;
    }
    .albums .btn div.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .albums .btn div:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .albums .text {
      position: relative;
      top: -3px;
    }
    .albums .badge {
      font-size: small;
      color: white;
      background-color: #607D8B;
      position: relative;
      left: -1px;
      top: -4px;
      border-radius: 4px 0 0 4px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `],
  directives: [AlbumDetailComponent],
  providers: [AlbumService]
})
export class AppComponent implements OnInit {
  title = 'Top 100 Albums';
  albums: Album[];
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
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
