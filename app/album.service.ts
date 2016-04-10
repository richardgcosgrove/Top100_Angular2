import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


import {Album} from './album';

@Injectable()
export class AlbumService {
  data: Object;
  albums : Album[];
  loading: boolean;

  constructor(public http: Http) {
  }


  makeRequest(): Observable<any[]> {
    this.loading = true;
    return this.http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .map(res => {return res.json(); });
  }

  seedAlbum() {
    this.makeRequest()
    .subscribe(res => {
      this.data = res;
      this.albums = res['feed'].entry.map((item) => {
        return new Album({
          name : item['im:name'].label,
          title : item.title.label,
          rights : item.rights.label,
          image : item['im:image'][2].label,
          link : item.link.label,
          artist : item['im:artist'].label,
          releaseDate : new Date(item['im:releaseDate'].label),
        });
      });
    });
  }

  getAlbums() {
    return Promise.resolve(this.albums);
  }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
