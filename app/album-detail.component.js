System.register(['angular2/core', './album'], function(exports_1, context_1) {
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
    var core_1, album_1;
    var AlbumDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_1_1) {
                album_1 = album_1_1;
            }],
        execute: function() {
            AlbumDetailComponent = (function () {
                function AlbumDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', album_1.Album)
                ], AlbumDetailComponent.prototype, "album", void 0);
                AlbumDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-album-detail',
                        template: "\n    <div *ngIf=\"album\">\n      <h2>{{album.title}}</h2>\n      <img src=\"{{album.image}}\" />\n      <h3>Released on: {{album.releaseDate | date}}</h3>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumDetailComponent);
                return AlbumDetailComponent;
            }());
            exports_1("AlbumDetailComponent", AlbumDetailComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=album-detail.component.js.map