import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class EquipoServiceService {

  url: string = 'https://localhost:44337/api/EquiposGet';

  constructor(private _http: HttpClient) { }

  getEquipo(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
}
