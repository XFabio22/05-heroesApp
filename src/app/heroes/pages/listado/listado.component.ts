import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../Interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent implements OnInit {
  

  constructor(private HeroesService:HeroesService) { }


  heroe:Heroes[] = [];
  ngOnInit(): void {
    this.HeroesService.getHeroes().subscribe(rep =>{
      this.heroe = rep
    } );
  }

}
