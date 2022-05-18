// import { job } from "src/app/interfaces/jobs"

import { job } from "src/app/interfaces/jobs";

export interface jobState {
    jobs: job[]
}

export const jobInitialState: jobState = {
    jobs: []
}