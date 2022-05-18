import { createFeatureSelector, createSelector } from "@ngrx/store";
import { jobState } from "./jobs.state";

const getJobState = createFeatureSelector<jobState>('jobReducer');
export const getJobsSelector = createSelector(getJobState, (state)=>{
    return state.jobs;
});












































// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { jobState } from "./jobs.state";


// const getJobState = createFeatureSelector<jobState>('jobs');

// export const getJobs = createSelector(getJobState, (state)=>{
//     return state.jobs;
// });



