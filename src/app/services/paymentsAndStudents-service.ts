import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsAndStudentsService {

constructor(private http:HttpClient) {
}

  url: string="http://localhost:8022"
// url: string = environment.backendHost;

  getAllStudents():Observable<Array<Student>>{
    return this.http.get<Array<Student>>(this.url+"/students");
  }

  getAllPayments():Observable<Array<Payment>>{
    return this.http.get<Array<Payment>>(this.url+"/payments");
  }

  getStudentPayments(code: string):Observable<Array<Payment>>{
    return this.http.get<Array<Payment>>(this.url+"/students/"+code+"/payments");
  }

  savePayment(formData: any):Observable<Payment>{
    return this.http.post<Payment>(this.url+"/payments" , formData);
  }
}
