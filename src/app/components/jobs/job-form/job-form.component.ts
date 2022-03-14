import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobTitle: string = "";
  jobDescription: string = "";
  eligibility: number = 0;
  @Output() addedJobFromChild = new EventEmitter<job>();
  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
  }

  preventDefault(event: any){
      event.stopPropagation();
      event.preventDefault();
  }

  addJob(event: any, title: string, desc: string, exp: string){
    let experience = parseInt(exp);
    this.preventDefault(event);
    console.log("THE EVENT HAS BEEN CALLED");
    this.jobService.addJobs({jobTitle: title, jobDescription: desc, eligibility: experience}).subscribe((data)=>{
      if(data.acknowledged ===true ){
        this.addedJobFromChild.emit({jobTitle: title, jobDescription: desc, eligibility: experience});
      }
    });
  }



}
