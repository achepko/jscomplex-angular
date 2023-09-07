import { ResolveFn } from '@angular/router';
import {IUser} from "../../interfaces";
import {UserService} from "../user.service";
import {inject} from "@angular/core";

export const userDetailsResolver: ResolveFn<IUser> = (route, state) => {
  let {id} = route.params;
  let userService = inject(UserService);
  return userService.getById(id);
};
