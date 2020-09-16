import { Music } from './music';
import { MusicState } from '../store/reducers/music.reducer';
import { UserState } from '../store/reducers/user.reducer';

export interface AppState {
    readonly music: MusicState;
}

export interface AppUserState {
    readonly user: UserState;
}