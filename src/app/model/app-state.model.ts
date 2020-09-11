import { Music } from './music';
import { MusicState } from '../store/music.reducer';

export interface AppState {
    readonly music: MusicState
}