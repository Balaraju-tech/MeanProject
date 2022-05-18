import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { job } from 'src/app/interfaces/jobs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import {
  addJob,
  loadJobs,
  updateJobState,
} from 'src/app/state/jobs/jobs.action';
import { getJobsSelector } from 'src/app/state/jobs/jobs.selector';
import { jobState } from 'src/app/state/jobs/jobs.state';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class manageJobsComponent implements OnInit, OnDestroy {
  jobs = new BehaviorSubject<job[]>([]);
  jobsListSubscription: Subscription = new Subscription;

  constructor(
    private jobStore: Store<jobState>
  ) {}

  ngOnInit(): void {
    this.jobStore.dispatch(loadJobs());
    this.jobsListSubscription = this.jobStore.select(getJobsSelector).subscribe((jobListFromState)=>{
      this.jobs.next(jobListFromState);
    });
  }

  addJobToTheList(job: job) {
    const jobDetails = {
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      eligibility: job.eligibility,
      jobRole: job.jobRole,
      appliedBy: job.appliedBy,
    };
    this.jobStore.dispatch(addJob(jobDetails));
    this.jobsListSubscription = this.jobStore.select(getJobsSelector).subscribe(jobList=>{
      this.jobs.next(jobList);
    });
  }

  ngOnDestroy(): void {
    this.jobsListSubscription.unsubscribe();  
  }

}
