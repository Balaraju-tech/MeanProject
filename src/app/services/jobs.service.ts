import { Injectable } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  addJobs(jobDetails: job) {
    const body = jobDetails;
    return this.http.post<any>('http://localhost:8000/jobs/createJob/', body);
  }

  getJobs():Observable<job[]> {
    return this.http.get<any>('http://localhost:8000/jobs/').pipe(map((jobs)=>{
      const jobList: job[] = [];
        for(let key in jobs){
          jobList.push({...jobs[key]});
        }
        return jobList;
    }));
  }
}
