import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class ServiceAlbumService {

  constructor(private htpp:HttpClient) { }

 getAlbums():Observable<any>{
  return this.htpp.get('https://jsonplaceholder.typicode.com/albums');
 }

 getDetail(id:string):Observable<any>{
  return this.htpp.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
 }



}
