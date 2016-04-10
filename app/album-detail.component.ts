import {Component,EventEmitter, Input, Output} from 'angular2/core';
import {Album} from './album';

@Component({
  selector: 'my-album-detail',
  template: `
    <div class="albumContainer text-center" *ngIf="album">
      <button class="close" type="button" aria-label="Close" (click)="onSelect(album)">
        <span class="fa fa-close"></span>
      </button>
      <h2>{{album.artist}}</h2>
      <img src="{{album.image}}" />
      <h2>{{album.name}}</h2>
      <h3>Released on: {{album.releaseDate | date}}</h3>
    </div>
  `,
  styles:[`
    img {
      margin: 0px auto;
    }
    .close {
      position: relative;
      top: 0px;
      right 0px;
      margin 2px;
      width: 40px;
      height: 40px;
    }
    .albumContainer {
      background-color:white;
      border-style: solid;
      border-width: medium;
      border-color: black;
    }
  `]
})
export class AlbumDetailComponent {
  @Input() album: Album;
  @Output() albumChange : EventEmitter<Album> = new EventEmitter<Album>();

  onSelect(album: Album) {
    this.album = null;
    this.albumChange.emit(this.album);
   }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
