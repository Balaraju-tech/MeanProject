import { createReducer, on } from '@ngrx/store';
import { addUserSuccess, loadUsersSuccess, removeUserSuccess } from './users.action';
import { userInitialState } from './users.state';

export const usersReducer = function (state: any, action: any) {
  return _userReducer(state, action);
};

const _userReducer = createReducer(
  userInitialState,
  on(loadUsersSuccess, (state, action) => {
      return {
          ...state,
          users: action.users
      }
  }),
  on(addUserSuccess, (state, action)=>{
    return {
        ...state,
        users: [...state.users, action]
    }
  }),
  on(removeUserSuccess, (state, action)=>{
      const newUserList = state.users.filter((user)=>{
        return user.userName !== action;
      })
    return{
        ...state,
        users: [...newUserList]
    }
  })
);
