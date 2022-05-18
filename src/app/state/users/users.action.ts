import { createAction, props } from "@ngrx/store";
import { user } from "src/app/interfaces/user";
import { usersState } from "./users.state";

export const loadUsers = createAction('loadUsers');
export const loadUsersSuccess = createAction('loadUsersSuccess', props<usersState>());

export const addUser = createAction('addUser', props<user>());
export const addUserSuccess = createAction('addUserSuccess', props<user>());

export const removeUser = createAction('removeUser', props<String>());
export const removeUserSuccess = createAction('removeUser', props<String>());