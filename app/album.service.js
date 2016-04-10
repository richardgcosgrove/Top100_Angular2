System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './album'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, album_1;
    var AlbumService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (album_1_1) {
                album_1 = album_1_1;
            }],
        execute: function() {
            AlbumService = (function () {
                function AlbumService(http) {
                    this.http = http;
                }
                AlbumService.prototype.makeRequest = function () {
                    this.loading = true;
                    return this.http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
                        .map(function (res) { return res.json(); });
                };
                AlbumService.prototype.seedAlbum = function () {
                    var _this = this;
                    this.makeRequest()
                        .subscribe(function (res) {
                        _this.data = res;
                        _this.albums = res['feed'].entry.map(function (item) {
                            return new album_1.Album({
                                name: item['im:name'].label,
                                title: item.title.label,
                                rights: item.rights.label,
                                image: item['im:image'][2].label,
                                link: item.link.label,
                                artist: item['im:artist'].label,
                                releaseDate: new Date(item['im:releaseDate'].label),
                            });
                        });
                    });
                };
                AlbumService.prototype.getAlbums = function () {
                    return Promise.resolve(this.albums);
                };
                AlbumService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AlbumService);
                return AlbumService;
            }());
            exports_1("AlbumService", AlbumService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=album.service.js.map