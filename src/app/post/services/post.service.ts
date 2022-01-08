import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../interfaces/post'
@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl="http://localhost:3000"
  constructor(private httpClient: HttpClient ) { }

  getAll():Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + '/posts/')
  }

  create(post:Post):Observable<any>{
    return this.httpClient.post(this.apiUrl + '/posts',post)

  }
  find(id:number):Observable<Post>{
return this.httpClient.get<Post>(this.apiUrl + '/posts/'+ id)
  }
  update(id:number,post:Post){
    return this.httpClient.put(this.apiUrl+'/posts/'+ id,post)
  }
  delete(id:number){
    return this.httpClient.delete(this.apiUrl + '/posts/'+id)
  }
}
