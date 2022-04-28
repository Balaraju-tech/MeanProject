import { Component, Input, OnInit } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  constructor() { }
  @Input() job: any;

  ngOnInit(): void {
  }

}
