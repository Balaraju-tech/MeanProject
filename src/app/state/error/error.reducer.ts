import { createReducer, on } from "@ngrx/store";
import { showErrorAction } from "./error.action";
import { errorState } from "./error.state";

export const showError = function(state: any, action: any){
    return _showError(state, action);
}

const _showError = createReducer(errorState, on(showErrorAction,(state: any, action)=>{
    return {
        ...state,
        errorMessage: action.errorMessage
    }
}))