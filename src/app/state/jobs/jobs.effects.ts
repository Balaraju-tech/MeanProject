import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';
import { showErrorMessage } from '../error/common';
import { showErrorAction } from '../error/error.action';
import { addJob, loadJobs, loadJobSuccess, updateJobState } from './jobs.action';

@Injectable()
export class jobsEffect {
  constructor(private actions$: Actions, private jobService: JobsService) {}

  loadJobs = createEffect(() => {
    return this.actions$.pipe(ofType(loadJobs), mergeMap(() => {
      return this.jobService.getJobs().pipe(
        map((data) => {
          return loadJobSuccess({ jobs: data });
        })
      );
    })
    );
  });

  addJobsToTheList = createEffect(() => {
    return this.actions$.pipe(
      ofType(addJob),
      mergeMap((action) => {
        const jobDetails = {
          jobTitle: action.jobTitle,
          jobDescription: action.jobDescription,
          eligibility: action.eligibility,
          jobRole: action.jobRole,
          appliedBy: action.appliedBy,
        };
        return this.jobService.addJobs(jobDetails).pipe(
          map(() => {
            return updateJobState(jobDetails);
          })
        );
      })
    );
  });
}

