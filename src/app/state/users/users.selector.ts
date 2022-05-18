import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersState } from "./users.state";

const getUserState = createFeatureSelector<usersState>('usersReducer');
export const getUsersSelector = createSelector(getUserState, (state)=>{
    return state.users;
});