import { user } from "src/app/interfaces/user";

export interface usersState {
    users: user[];
}

export const userInitialState: usersState= {
    users: []
}