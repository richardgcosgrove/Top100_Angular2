System.register(['angular2/core', './album-detail.component', './album.service'], function(exports_1, context_1) {
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
    var core_1, album_detail_component_1, album_service_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_albumService) {
                    this._albumService = _albumService;
                    this.title = 'Top 100 Albums';
                }
                AppComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this._albumService.getAlbums().then(function (albums) { return _this.albums = albums; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this._albumService.seedAlbum();
                    this.getAlbums();
                };
                AppComponent.prototype.onSelect = function (album) { this.selectedAlbum = album; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container-fluid\">\n      <h1 class=\"text-center\">{{title}}</h1>\n      <div class=\"col-xs-4 col-sm-6\">\n        <my-album-detail [album]=\"selectedAlbum\"></my-album-detail>\n      </div>\n      <div class=\"col-xs-8 col-sm-6\">\n        <div class=\"btn btn-default col-xs-12\" *ngFor=\"#album of _albumService.albums\"\n          [class.selected]=\"album === selectedAlbum\"\n          (click)=\"onSelect(album)\">\n          <span class=\"badge pull-left\">{{album.artist}}</span>\n          <span class=\"pull-right\">{{album.name}}</span>\n          <span class=\"clear-fix\"></span>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .albums {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .albums li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .albums li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .albums li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .albums .text {\n      position: relative;\n      top: -3px;\n    }\n    .albums .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        directives: [album_detail_component_1.AlbumDetailComponent],
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