import {Component, OnInit} from 'angular2/core';
import {Album} from './album';
import {AlbumDetailComponent} from './album-detail.component';
import {AlbumService} from './album.service';

@Component({
  selector: 'my-app',
  template:`
    <div class="container-fluid">
      <h1 class="text-center">{{title}}</h1>
      <div class="info col-xs-4 col-sm-6">
        <my-album-detail [album]="selectedAlbum"></my-album-detail>
      </div>
      <div class="albums pull-right col-xs-8 col-sm-6">
        <div class="btn btn-default col-xs-12" *ngFor="#album of _albumService.albums"
          [class.selected]="album === selectedAlbum"
          (click)="onSelect(album)">
          <span class="badge pull-left">{{album.artist}}</span>
          <span class="pull-right">{{album.name}}</span>
          <span class="clear-fix"></span>
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
      top:250px;
      left:5px;
    }
    .albums {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
    }
    .albums div {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      border-radius: 4px;
    }
    .albums div.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .albums div:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .albums .text {
      position: relative;
      top: -3px;
    }
    .albums .badge {
      display: inline-block;
      font-size: small;
      color: white;
      background-color: #607D8B;
      overflow: auto;
      position: relative;
      left: -1px;
      top: -4px;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
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

  getAlbums() {
    this._albumService.getAlbums().then(albums => this.albums = albums);
  }

  ngOnInit() {
    this._albumService.seedAlbum();
    this.getAlbums();
  }

  onSelect(album: Album) { this.selectedAlbum = album; }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
