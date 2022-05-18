import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscriber, Subscription } from 'rxjs';
import { job } from 'src/app/interfaces/jobs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { loadJobs } from 'src/app/state/jobs/jobs.action';
import { getJobsSelector } from 'src/app/state/jobs/jobs.selector';
import { jobState } from 'src/app/state/jobs/jobs.state';
import { JobsService } from '../../../services/jobs.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})
export class ApplyJobComponent implements OnInit, OnDestroy {
  constructor(
    private jobService: JobsService,
    private route: ActivatedRoute,
    private jobStore: Store<jobState>

  ) {}
  jobs: job[] = [];
  jobsListSubscription: Subscription = new Subscription;
  appliedJobs: string = 'false';
  userEmail: string = '';

  ngOnInit(): void {

    // this.jobService.getJobs().subscribe((res) => {
    //   for (const job of res) {
    //     this.jobs.push(job);
    //   }
    // });
    this.jobStore.dispatch(loadJobs());
    this.jobsListSubscription = this.jobStore.select(getJobsSelector).subscribe((jobListFromState)=>{
      this.jobs = jobListFromState;
    });
    this.route.queryParams.subscribe((params) => {
      this.appliedJobs = params['appliedJobs'];
    });
  }
  ngOnDestroy(): void {
    this.jobsListSubscription.unsubscribe();
  }
}
