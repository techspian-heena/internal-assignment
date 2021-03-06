import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Music } from '../model/music';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  endPoint = environment.apiEndPoint;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) { }

  getAllMusic() {
    return this.http.get(`${this.endPoint}/musicList`)
      .pipe(
        map((res: any) => {
          if (res != null) {
            return res;
          }
        })
      );
  }

  addMusic(music: Music) {
    return this.http.post(`${this.endPoint}/musicList`, music, this.httpOptions)
      .pipe(
        map(res => {
          if (res) {
            return res;
          }
        })
      );
  }

  updateMusic(music: Music): Observable<Music> {
    return this.http.put(`${this.endPoint}/musicList/${music.id}`, music)
      .pipe(
        map(res => {
          if (res) {
            return res;
          }
        })
      );
  }

  deleteMusic(id: number) {
    return this.http.delete(`${this.endPoint}/musicList/${id}`, this.httpOptions)
      .pipe(
        map(res => {
          if (res) {
            return res;
          }
        })
      );
  }

}
