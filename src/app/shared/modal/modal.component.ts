import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Message} from 'src/app/Message';

@Component({
  selector: 'app-dialogue-window',
  templateUrl: './dialogue-window.component.html',
  styleUrls: ['./dialogue-window.component.scss']
})
export class DialogueWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogueWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: Message) { }

  ngOnInit(): void {
  }

  onOk(): void {
    this.dialogRef.close('Ok!');
  }

  onCancel(): void {
    this.dialogRef.close('Cancel!');
  }

}