import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Persona, PersonaResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  responseList: Subject<Array<Persona>> = new Subject()
  private currentList: Array<Persona> = new Array()
  private apiUrl = 'http://localhost:8080/persone'

  constructor(private http: HttpClient) {

  }

  getUsers() {
    this.http.get<PersonaResponse>(this.apiUrl).subscribe(
      res => {
        this.responseList.next(res.persone)
        this.currentList = res.persone
      }
    )
  }

  createUser(persona: Persona) {
    this.http.post(this.apiUrl, persona).subscribe()
    this.currentList.push(persona)
    this.responseList.next(this.currentList)
  }

  deleteUser(id: number) {
    this.http.delete(this.apiUrl + '/' + id).subscribe()

    var indexRem = 0
    this.currentList.forEach((persona, index) => {
      if (persona.id == id) {
        indexRem = index
      }
    })
    this.currentList.splice(indexRem, 1)
    this.responseList.next(this.currentList)
  }

  updateUser(persona: Persona) {
    this.http.put(this.apiUrl, persona).subscribe()
  }
}
