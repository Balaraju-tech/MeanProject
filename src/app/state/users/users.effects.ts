import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { addUser, addUserSuccess, loadUsers, loadUsersSuccess, removeUser, removeUserSuccess } from './users.action';

@Injectable()
export class usersEffect {
  constructor(private action$: Actions, private userService: UsersService) {}
  _loadUsers = createEffect(() => {
    return this.action$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return this.userService.getUsersList().pipe(map((data)=>{
            return loadUsersSuccess({users: data});
        }));
      })
    );
  });

  _addUser = createEffect(()=>{
      return this.action$.pipe(ofType(addUser), mergeMap((action)=>{
          return this.userService.addUser(action).pipe(map((data)=>{
            return addUserSuccess(action);
          }))
      }))
  });

  _removeUser = createEffect(()=>{
    return this.action$.pipe(ofType(removeUser), mergeMap((action)=>{
        return this.userService.deleteUser(action).pipe(map((data)=>{
          return removeUserSuccess(action);
        }))
    }))
  });
}
