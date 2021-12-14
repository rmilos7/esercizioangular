import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaResponse } from './persone.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/persone';

  constructor(private _http: HttpClient) { }

  getUsers() {
    var array = this._http.get<PersonaResponse>(this.apiUrl);
    return array;
  }

  delUser(id: number) {
    var response = this._http.delete(this.apiUrl + '/' + id);
    return response;
  }
}
