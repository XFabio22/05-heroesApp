import { Pipe, PipeTransform } from "@angular/core";
import { Heroes } from "../Interfaces/heroes.interface";




@Pipe({
    name: 'imagen'
})

export class ImgPipe implements PipeTransform{
    transform(item: Heroes | any):string {
        return `assets/heroes/${item.id}.jpg`
    }
}