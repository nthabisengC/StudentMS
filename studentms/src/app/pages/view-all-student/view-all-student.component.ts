// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-student',
//   templateUrl: './view-all-student.component.html',
//   styleUrls: ['./view-all-student.component.css']
// })
// export class ViewAllStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { Student } from 'src/app/interface/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css'],
})
export class ViewAllStudentComponent implements OnInit {
  getStudent: any;
  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  student: Student[] = [];
  public searchString! : String

  ngOnInit(): void {
    this.getStudent();
  }


  // private getStudent(){
  //   this.studentService.getAllStudent().subscribe((student: any) => {
  //     console.table(student);
  //     this.employees = student;


  //   });
  // }

  deleteStudent(id: any){
 
    this.router.navigate(['./delete-student', id]);   
  }

  viewStudent(id: any)
  {
    this.router.navigate(['./view-single-student', id]);
  
  }
  
editStudent(id: any)
{
  this.router.navigate(['./edit-student', id]);
}

}

