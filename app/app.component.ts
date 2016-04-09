import {Component, OnInit} from 'angular2/core';
import {AlbumService} from './album.service';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <pre>{{_albumService.data | json }}</pre>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
  `],
  providers: [AlbumService]
})
export class AppComponent implements OnInit {
  title = 'Top 100 Albums';

  constructor(private _albumService: AlbumService) { }

  getAlbums() {
    this._albumService.makeRequest();
  }

  ngOnInit() {
    this.getAlbums();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
