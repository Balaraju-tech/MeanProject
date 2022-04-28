import { Component, Input, OnInit } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';


@Component({
  selector: '[app-job]',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job:any;
  constructor() { }

  ngOnInit(): void {
  }

}
