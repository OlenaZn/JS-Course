import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Feedback';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  @Input()
  feedbacksId: string;
  @Input()
  feedbacksTitle: string;
  @Input()
  feedbacks: Feedback[];

  constructor() { }

  ngOnInit(): void {
  }

}
