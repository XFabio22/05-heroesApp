import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../Interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../Components/confirmar/confirmar.component';


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
    private Router:Router,
    private __snackBar: MatSnackBar,
    private dialog: MatDialog
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
      this.HeroesService.actualizarHeroe(this.heroe).subscribe(heroe =>{
        this.mostrarSnakbar('Registro actualizado')
      });
    }else{
      this.HeroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.mostrarSnakbar('Heroe añadido')
        this.Router.navigate(['/heroes/editar', heroe.id])
        
      })
    }
  }

  borrarHeroe(){

    const dialog = this.dialog.open( ConfirmarComponent,{
      width: '250px',
      data: {...this.heroe}

    });

    //cambiar a switmap porque son dos subscribe 
    dialog.afterClosed().subscribe(
      (result) =>  {
        if(result){
          this.HeroesService.borrarHeroe( this.heroe )
          .subscribe(resp =>{
            this.Router.navigate(['/heroes']);
          })
        }
      console.log(result);
    })
      
    

  }

  mostrarSnakbar(mensaje:string){
    this.__snackBar.open(mensaje, 'ok',{
      duration:2500
    })
}

}