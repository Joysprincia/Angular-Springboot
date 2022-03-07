import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Package1 } from './package';
import { Observable } from 'rxjs';
import { Guide } from './Guide';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class LoginformserviceService {
  constructor(private http:HttpClient) { }

  getPackageDetails(): Observable<Package1[]>{
    return this.http.get<Package1[]>("http://localhost:8080/package");
  }

  addPackage(packages:Package1): Observable<Object>{
    return this.http.post("http://localhost:8080/addpackage",packages);
  
  }
  
  getPackagebyid(id:number):Observable<Package1>{
    return this.http.get<Package1>(`http://localhost:8080/package/${id}`);
  }

  updatePackage(id:number ,packages:Package1):Observable<Object>{
    return this.http.put(`http://localhost:8080/package/${id}`,packages);
  }

  deletePackage(id: number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/package/${id}`)
  }

  getGuideDetails(): Observable<Guide[]>{
    return this.http.get<Guide[]>("http://localhost:8080/guide");
  }

  addGuide(guides:Guide): Observable<Object>{
    return this.http.post("http://localhost:8080/addguide",guides);
  
  }

  getGuidebyid(id:number):Observable<Guide>{
    return this.http.get<Guide>(`http://localhost:8080/guide/${id}`);
  }

  updateGuide(id:number ,guides:Guide):Observable<Object>{
    return this.http.put(`http://localhost:8080/guide/${id}`,guides);
  }

  deleteGuide(id: number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/guide/${id}`);
  }

  getUsers(uname:string,pwd:string):Observable<Users>{
    return this.http.get<Users>(`http://localhost:8080/users/${uname}/${pwd}`);
  }
}
