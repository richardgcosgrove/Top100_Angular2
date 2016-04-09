import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Album} from './album';

@Injectable()
export class AlbumService {
  data: Object;
  albums : Album[];
  loading: boolean;

  constructor(public http: Http) {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
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
