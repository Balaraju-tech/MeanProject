import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { job } from 'src/app/interfaces/jobs';
import { AuthserviceService } from 'src/app/otherServices/authservice.service';
import { JobsService } from '../../jobs/jobs.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  constructor(private jobService : JobsService, private route: ActivatedRoute, private authService: AuthserviceService) { }
  jobs: job[] = [];
  appliedJobs: string = 'false';
  userEmail: string = '';

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((res)=>{
        for(const job of res){
          this.jobs.push(job);
        }
    });
    this.route.queryParams.subscribe(params=>{
        this.appliedJobs = params['appliedJobs'];
    });
  }
}
