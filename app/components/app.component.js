System.register(['angular2/core', './album-detail.component', '../services/album.service', '../filters/album.filter'], function(exports_1, context_1) {
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
    var core_1, album_detail_component_1, album_service_1, album_filter_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_detail_component_1_1) {
                album_detail_component_1 = album_detail_component_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (album_filter_1_1) {
                album_filter_1 = album_filter_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_albumService) {
                    this._albumService = _albumService;
                    this.title = 'Top 100 Albums';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._albumService.seedAlbum();
                    this._albumService.albums.subscribe(function (albums) {
                        _this.albums = albums;
                    });
                };
                AppComponent.prototype.onSelect = function (album) {
                    if (!this.selectedAlbum
                        || this.selectedAlbum !== album) {
                        this.selectedAlbum = album;
                    }
                    else {
                        this.selectedAlbum = null;
                    }
                };
                AppComponent.prototype.clearFilter = function (filter) {
                    filter.value = null;
                };
                AppComponent.prototype.selectRandom = function () {
                    this.selectedAlbum = this.albums[Math.floor(Math.random() * this.albums.length) + 1];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/components/app.component.html',
                        styleUrls: ['../app/scss/app.css'],
                        directives: [album_detail_component_1.AlbumDetailComponent],
                        pipes: [album_filter_1.AlbumFilterPipe],
                        providers: [album_service_1.AlbumService]
                    }), 
                    __metadata('design:paramtypes', [album_service_1.AlbumService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.component.js.map