import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { JobsService } from '../../../services/jobs.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent {

  @Output() addJobFromChild = new EventEmitter<job>();
  constructor(private jobService: JobsService, private fb: FormBuilder) {}

  jobForm = this.fb.group({ 
        jobTitle: ['', Validators.required],
        jobDescription: ['', Validators.required],
        eligibility: ['', Validators.required],
        jobRole: ['', Validators.required]
  })

  onSubmit(){
    const title = this.jobForm.value.jobTitle;
    const desc = this.jobForm.value.jobDescription;
    const experience = this.jobForm.value.eligibility;
    const jobRole = this.jobForm.value.jobRole;
          this.addJobFromChild.emit({
            jobTitle: title,
            jobDescription: desc,
            eligibility: experience,
            jobRole: jobRole,
            appliedBy:[]
          });
  }
  
}
