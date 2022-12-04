import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../intafaces/Auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_Url: string = environment.baseUrl
  constructor(private http: HttpClient) { }
  private _auth:Auth |undefined;
  get auth():Auth{
    return {...this._auth!}
  }

  Login(){
    return this.http.get<Auth>(`${this.base_Url}/usuarios/1`)

    .pipe(
      tap(resp=> this._auth = resp )
      );
  }

  
  logout(){
    this._auth = undefined;
  }
}
