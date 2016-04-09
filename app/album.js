System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(obj) {
                    this.name = obj && obj.name || null;
                    this.image = obj && obj.image || null;
                    this.rights = obj && obj.rights || null;
                    this.title = obj && obj.title || null;
                    this.link = obj && obj.link || null;
                    this.artist = obj && obj.artist || null;
                    this.releaseDate = obj && obj.releaseDate || null;
                }
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.js.map