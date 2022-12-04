import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from './../../services/heroes.service';
import { Heroes } from './../../Interfaces/heroes.interface';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private HeroesService:HeroesService) { }
  termino:string = '';
  heroes:Heroes[]=[]
  heroesSeleccionado:Heroes | undefined

  buscar(){
    this.HeroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {

  }
  opcionSelecionada(event: MatAutocompleteSelectedEvent ){
    if(event.option.value == '' ){
      this.heroesSeleccionado = undefined
      return
    }else{
      const heroe: Heroes = event.option.value;
      console.log(heroe);
      this.termino = heroe.superhero;
      this.HeroesService.getHeroePorId(heroe.id!).subscribe(heroe => this.heroesSeleccionado = heroe);
    }
    
}


}
