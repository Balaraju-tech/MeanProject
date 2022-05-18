import { createAction, props } from "@ngrx/store";
import { job } from "src/app/interfaces/jobs";
import { jobState } from "./jobs.state";

export const updateJobState = createAction('updateJobs', props<job>());

export const loadJobs = createAction('loadJobs');

export const loadJobSuccess = createAction('loadJobSuccess', props<jobState>());

export const addJob = createAction('addJob', props<job>());