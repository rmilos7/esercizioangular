import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Persona } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription()
  public response$: Array<Persona> = new Array()

  constructor(private service: UserService) {
    this._subscription = service.responseList.subscribe(value => this.response$ = value)
  }

  ngOnInit(): void {
    this.service.getUsers()
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe()
  }
}
