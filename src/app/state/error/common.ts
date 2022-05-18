import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { showErrorAction } from "./error.action";

export const showErrorMessage = (errorResp: HttpErrorResponse)=>{
    const errorMessage = errorResp.message;
    return of(showErrorAction({errorMessage: errorMessage}))
}