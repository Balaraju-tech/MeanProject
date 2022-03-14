import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: job[] = [];

  constructor(private JobsService: JobsService) { }

  ngOnInit(): void {
    this.JobsService.getJobs().subscribe((data)=>{
        for (const job of data) {
            this.jobs.push(job);
        }
    });
  }

  addJobToTheList(job: job){
    this.jobs.push(job);
  }

}
