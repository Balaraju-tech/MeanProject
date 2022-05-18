import { showError } from "./error/error.reducer";
import { jobsReducer } from "./jobs/jobs.reducer";
import { usersReducer } from "./users/users.reducer";

export const appReducer = {
    jobReducer: jobsReducer,
    errorReducer: showError,
    usersReducer : usersReducer
};