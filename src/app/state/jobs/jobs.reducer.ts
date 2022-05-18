import { createReducer, on } from '@ngrx/store';
import { job } from 'src/app/interfaces/jobs';
import { loadJobSuccess, updateJobState } from './jobs.action';
import { jobInitialState } from './jobs.state';

export const jobsReducer = function (state: any, action: any) {
  return _updateJobState(state, action);
};

const _updateJobState = createReducer(
  jobInitialState,
  on(loadJobSuccess, (state: any, action)=>{
    return {
      ...state,
      jobs: action.jobs
    }
  }),
  on(updateJobState, (state: any, action) => {
    const jobDetail: job = {
      jobTitle: action.jobTitle,
      jobDescription: action.jobDescription,
      eligibility: action.eligibility,
      jobRole: action.jobRole,
      appliedBy: action.appliedBy,
    };
    return {
      ...state,
      jobs: [...state.jobs, jobDetail],
    };
  })
);
