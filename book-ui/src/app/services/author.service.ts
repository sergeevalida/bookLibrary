import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

   getAuthors(): Observable<any[]>{
    return this.http.get<any[]>('/server/api/v1/authors');
  }

  getAuthor(authorId:number){
    return this.http.get('/server/api/v1/authors/' + authorId);
  }

  createAuthorRegistration(author){
    let body = JSON.stringify(author);
    return this.http.post('/server/api/v1/authors', body, httpOptions);
  }
}

