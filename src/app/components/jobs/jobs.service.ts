import { Injectable } from '@angular/core';
import { job } from 'src/app/interfaces/jobs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  addJobs(jobDetails: job) {
    const body = jobDetails;
    console.log("Entered Jobservice");
    return this.http.post<any>('http://localhost:8000/jobs/createJob/', body);
  }

  getJobs() {
    return this.http.get<any>('http://localhost:8000/jobs/');
  }
}
