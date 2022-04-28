import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { job } from 'src/app/interfaces/jobs';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class manageJobs implements OnInit {

  jobs: job[] = [];

  constructor(private JobsService: JobsService, private router:Router, private authService: AuthserviceService) { }

  ngOnInit(): void {
    this.JobsService.getJobs().subscribe(
      (res)=>{
        for (const job of res) {
            this.jobs.push(job);
        }
      });
  }

  addJobToTheList(job: job){
    this.jobs.push(job);
  }

}
