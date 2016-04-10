export class Album {
  name: string;
  image : string;
  rights : string;
  title : string;
  link : string;
  artist : string;
  releaseDate : Date;

  constructor(obj?: any) {
    this.name            = obj && obj.name           || null;
    this.image           = obj && obj.image          || null;
    this.rights          = obj && obj.rights         || null;
    this.title           = obj && obj.title          || null;
    this.link            = obj && obj.link           || null;
    this.artist          = obj && obj.artist         || null;
    this.releaseDate     = obj && obj.releaseDate    || null;
  }
}
