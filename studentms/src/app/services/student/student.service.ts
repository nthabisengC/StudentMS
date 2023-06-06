import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // TODO: change the url to the correct one used by api
  private url = "http://localhost:8080/students";

  constructor(private http:HttpClient) { }
  
  getStudentById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  getAllStudent(){
    return this.http.get<Student[]>(`${this.url}`);
  }

  createStudent(employee:Student){
    return this.http.post(`${this.url}`, Student);
  }

  editStudent(id:number, employee:Student){
    return this.http.put(`${this.url}/${id}`, Student);
  }

  deleteStudent(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

}

