import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/model';
const httpOptions =
{
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  post: User[];
  postsUrl: string =  'http://project.dnmdigital.com/Jagrithi/public/api/login';
  constructor(private http: HttpClient)
  { }
  getPosts() : Observable<User[]>
    {
      return this.http.get<User[]>(this.postsUrl);
    }
    savePost(post: User): Observable<User>
    {
      return this.http.post<User>(this.postsUrl, post, httpOptions);
    }

}
