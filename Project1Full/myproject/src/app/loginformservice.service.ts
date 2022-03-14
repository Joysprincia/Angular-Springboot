import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Package1 } from './package';
import { Observable } from 'rxjs';
import { Guide } from './Guide';
import { Users } from './Users';
import { Images } from './images';
import { Booking } from './Booking';
import { AssignGuide } from './AssignGuide';

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

  addUser(users:Users): Observable<Object>{
    return this.http.post("http://localhost:8080/addtraveller",users);
  
  }

  getImagesDetails(): Observable<Images[]>{
    return this.http.get<Images[]>("http://localhost:8080/images");
  }

  addBooking(books:Booking): Observable<Object>{
    return this.http.post("http://localhost:8080/addbooking",books);
  
  }

  getBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>("http://localhost:8080/getbooking");
  }

  getBookingbyid(book_id:number):Observable<Booking>{
    return this.http.get<Booking>(`http://localhost:8080/booking/${book_id}`);
  }

  updateBooking(book_id:number ,books:Booking):Observable<Object>{
    return this.http.put(`http://localhost:8080/booking/${book_id}`,books);
  }

  deleteBooking(book_id: number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/booking/${book_id}`);
  }

  addAssignGuide(assignguides:AssignGuide): Observable<Object>{
    return this.http.post("http://localhost:8080/guideassign",assignguides);
  
  }
  

  updateGuideStatus(g_id:string,guides:Guide):Observable<Object>{
    return this.http.put(`http://localhost:8080/updateguidestatus/${g_id}`,guides);
  }

  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>("http://localhost:8080/getallbooking");
  }

  getAllAssigned(): Observable<AssignGuide[]>{
    return this.http.get<AssignGuide[]>("http://localhost:8080/assignguide");
  }

  getAssignedbyid(ag_id:number):Observable<AssignGuide>{
    return this.http.get<AssignGuide>(`http://localhost:8080/assignguide/${ag_id}`);
  }

  updateAssignGuide(ag_id:number ,assignguides:AssignGuide):Observable<Object>{
    return this.http.put(`http://localhost:8080/assignguide/${ag_id}`,assignguides);
  }

  deleteAssignedGuide(ag_id: number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/assignguide/${ag_id}`);
  }

  id!:number;
  setId(data: number){
    this.id=data;
  }
  getId(){
    return this.id
  }
}
