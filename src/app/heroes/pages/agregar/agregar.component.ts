import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../Interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  publishers=[
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ]
  heroe: Heroes={
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  constructor(
    private HeroesService:HeroesService
    ,private ActivatedRoute:ActivatedRoute,
    private Router:Router
    ) { }

  ngOnInit(): void {
    if(!this.Router.url.includes('editar')){
      return;
    }

    this.ActivatedRoute.params
    .pipe(
      switchMap( ({id}) => this.HeroesService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe = heroe) 
  }

  guardar(){
    if(this.heroe.superhero.trim().length == 0){
      return;
    }


    if( this.heroe.id){
      //edit
      this.HeroesService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('actualizado',heroe)
      )
    }else{
      this.HeroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        
        this.Router.navigate(['/heroes/editar', heroe.id])
        
      })
    }
  }

  borrarHeroe(){
    this.HeroesService.borrarHeroe( this.heroe )
    .subscribe(resp =>{
      this.Router.navigate(['/heroes']);
    })
  }
}
