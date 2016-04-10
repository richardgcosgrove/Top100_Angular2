import {Component, Input} from 'angular2/core';
import {Album} from './album';

@Component({
  selector: 'my-album-detail',
  template: `
    <div *ngIf="album">
      <h2>{{album.title}}</h2>
      <img src="{{album.image}}" />
      <h3>Released on: {{album.releaseDate | date}}</h3>
    </div>
  `
})
export class AlbumDetailComponent {
  @Input() album: Album;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
