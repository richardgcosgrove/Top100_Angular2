import {Component,EventEmitter, Input, Output} from 'angular2/core';
import {Album} from '../models/album';

@Component({
  selector: 'my-album-detail',
  templateUrl: `/app/components/album-detail.component.html`,
  styleUrls:[`../app/scss/album-detail.css`]
})
export class AlbumDetailComponent {
  @Input() album: Album;
  @Output() albumChange : EventEmitter<Album> = new EventEmitter<Album>();

  onSelect(album: Album) : void  {
    this.album = null;
    this.albumChange.emit(this.album);
   }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
