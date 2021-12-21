import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.css']
})
export class PersoncardComponent implements OnInit {
  @Input()
  persona: Persona = new Persona();

  constructor(private dialog: MatDialog, private service: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(id: number): void {
    this.service.deleteUser(id)
  }

  editUser(persona: Persona): void {
    this.openDialog(persona)
  }

  openDialog(persona: Persona): void {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      data: {persona: persona, type: 'Update'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.service.updateUser(result)
      }
    });
  }

}
