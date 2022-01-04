import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../models/Response';
import { map } from 'rxjs/operators';
import { Usuarios } from '../models/usuarios';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  url: string = "https://localhost:44337/api/user/login";

  private usuarioSubject: BehaviorSubject<Usuarios>;

  public get usuarioData():Usuarios{
    return this.usuarioSubject.value;
  }

  constructor(private _http: HttpClient) {
    this.usuarioSubject = 
    new BehaviorSubject<Usuarios>(JSON.parse(localStorage.getItem('user') || '{}'));
   }

  login(Usuario: string, Password: string): Observable<Response>{
    return this._http.post<Response>(this.url, {Usuario, Password}, httpOption).pipe(
      map(res => {
        if(res.exito === 1){
          const users: Usuarios = res.data;
          localStorage.setItem('user', JSON.stringify(users));
          this.usuarioSubject.next(users);
        }
        return res;
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.usuarioSubject.next(null!);
  }

}


