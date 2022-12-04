import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../Interfaces/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }
  
  private url_Heroe:string = environment.baseUrl;

  getHeroes():Observable<Heroes[]>{
    return  this.http.get<Heroes[]>(`${this.url_Heroe}/heroes`);
  }
  getHeroePorId(id:string):Observable<Heroes>{
    const resp = `${this.url_Heroe}/heroes/${id}` ;
    return this.http.get<Heroes>(resp);
  }

  getSugerencias(termino:string):Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.url_Heroe}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe:Heroes):Observable<Heroes>{
    return this.http.post<Heroes>(`${this.url_Heroe}/heroes`,heroe)
  }
}
