import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  find(id: any){
    return this.http.get<Post>(this.url + '/' + id);
  }
}
