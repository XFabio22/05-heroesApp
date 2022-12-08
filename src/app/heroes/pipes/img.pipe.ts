import { Pipe, PipeTransform } from "@angular/core";
import { Heroes } from "../Interfaces/heroes.interface";




@Pipe({
    name: 'imagen'
})

export class ImgPipe implements PipeTransform{
    transform(item: Heroes | any):string {

        if(!item.id && !item.alt_img){
            return 'assets/no-image.png'
        }else if (item.alt_img){
            return item.alt_img
        }else{
            return `assets/heroes/${item.id}.jpg`
        }
        
    }
}