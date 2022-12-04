import { HeroesService } from './../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../Interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles:[`{  
    img{
      width : 100%;
      border-radius : 5px;
    }
  }
`]
})
export class HeroeComponent implements OnInit {

  constructor(
    private ActivatedRoute:ActivatedRoute 
    ,private HeroesService:HeroesService ,
    private router:Router) { }

  hero!:Heroes
  ngOnInit(): void {
    this.ActivatedRoute.params.pipe(
      switchMap(({id} ) =>
        this.HeroesService.getHeroePorId(id)),
        tap(console.log)
        
    ).subscribe(pj => this.hero = pj)
  }
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
