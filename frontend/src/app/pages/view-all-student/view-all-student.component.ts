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

  students: Student[] = [];
  public searchString! : String

  ngOnInit(): void {
    this.getStudent();
  }


// getStudents(){
//     this.studentService.getAllStudent().subscribe((student: any) => {
//       console.table(student);
//       this.students = student;


//     });
//   }

getStudents(){
  this.studentService.getAllStudent().subscribe({
    next: (data: any) => {
      this.students = data
    },
    error: (err:any) =>{

    }
  });
}

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

