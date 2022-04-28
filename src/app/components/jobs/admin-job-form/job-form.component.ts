import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { JobsService } from '../jobs.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {

  @Output() addedJobFromChild = new EventEmitter<job>();
  constructor(private jobService: JobsService, private fb: FormBuilder) {}

  jobForm = this.fb.group({ 
        jobTitle: ['', Validators.required],
        jobDescription: ['', Validators.required],
        eligibility: ['', Validators.required],
        jobRole: ['', Validators.required]
  })

  ngOnInit(): void {}

  onSubmit(){
    console.log("THE VALUES OF JOB FORM ARE ");
    console.log(this.jobForm.value);
    const title = this.jobForm.value.jobTitle;
    const desc = this.jobForm.value.jobDescription;
    const experience = this.jobForm.value.eligibility;
    const jobRole = this.jobForm.value.jobRole;
    this.jobService
      .addJobs({
        jobTitle: title,
        jobDescription: desc,
        eligibility: experience,
        jobRole: jobRole,
        appliedBy:[]
      })
      .subscribe((data) => {
        if (data.acknowledged === true) {
          this.addedJobFromChild.emit({
            jobTitle: title,
            jobDescription: desc,
            eligibility: experience,
            jobRole: jobRole,
            appliedBy:[]
          });
        }
      });
  }

  preventDefault(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  addJob(
    event: any,
    title: string,
    desc: string,
    exp: string,
    jobRole: string
  ) {
    let experience = parseInt(exp);
    this.preventDefault(event);
    this.jobService
      .addJobs({
        jobTitle: title,
        jobDescription: desc,
        eligibility: experience,
        jobRole: jobRole,
        appliedBy:[]
      })
      .subscribe((data) => {
        if (data.acknowledged === true) {
          this.addedJobFromChild.emit({
            jobTitle: title,
            jobDescription: desc,
            eligibility: experience,
            jobRole: jobRole,
            appliedBy:[]
          });
        }
      });
  }
}
