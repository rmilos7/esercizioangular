import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PersonaResponse } from './persone.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response$: PersonaResponse = new PersonaResponse();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.response$ = data)
  }

  public deleteUser = (id: number) => {
    this.dataService.delUser(id)
    .subscribe()
  }

}
