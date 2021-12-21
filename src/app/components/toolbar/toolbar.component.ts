import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: UserService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      data: {persona: new Persona(), type: 'Create'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.service.createUser(result)
      }
    });
  }

}
