import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interface/student';

const url = "http://localhost:3000/users";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // TODO: change the url to the correct one used by api
  
  constructor(private http:HttpClient) { }
  
  getStudentById(id:number){
    return this.http.get(url + id);
  }

  // getAllStudent(){
  //   return this.http.get<Student[]>(`${this.url}`);
  // }

  getAllStudent(): Observable<any>{
    return this.http.get(url, {responseType: 'json'})
  }

  // createStudent(student:Student){
  //   return this.http.post(`${this.url}`, student);
  // }

  editStudent(id:number, student:Student){
    return this.http.put(url + id, Student);
  }

  deleteStudent(id:number){
    return this.http.delete(url + id);
  }

}

