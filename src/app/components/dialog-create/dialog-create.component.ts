import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/models/user.model';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.css']
})
export class DialogCreateComponent implements OnInit {
  public persona: Persona
  public type: String

  constructor(
    private dialogRef: MatDialogRef<DialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data: {
      persona: Persona,
      type: String
    }
  ) {
    this.persona = data.persona
    this.type = data.type
  }

  ngOnInit(): void {
  }

  onDismiss() {
    this.dialogRef.close()
  }
}
