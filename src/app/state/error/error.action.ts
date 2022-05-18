import { createAction, props } from "@ngrx/store";
import { errorMsg } from "./error.state";

export const showErrorAction = createAction('showErrorAction', props<errorMsg>());