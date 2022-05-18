import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appliedJobs',
  pure: false
})
export class AppliedJobsPipe implements PipeTransform {

  transform(jobs: any[], appliedJobs: string, userEmail: string): any[] {
    if(appliedJobs === 'true'){
      let applied = false;
      jobs = jobs.filter(job=>{ 
                    for(const appliedBy of job.appliedBy){
                      if(appliedBy === userEmail){
                        applied = true;
                        break;
                      }else{
                        applied = false;
                      }
                    }
                    return applied;
      });
    }
    return jobs;
    
  }

}
