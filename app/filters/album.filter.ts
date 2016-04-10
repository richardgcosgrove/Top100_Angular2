import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {

    transform(value: any, args: string[]): any {
       let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(album=> album.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
