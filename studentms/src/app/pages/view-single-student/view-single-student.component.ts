// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-single-student',
//   templateUrl: './view-single-student.component.html',
//   styleUrls: ['./view-single-student.component.css']
// })
// export class ViewSingleStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interface/student'; 
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-student.component.html',
  styleUrls: ['./view-single-student.component.css']
})
export class ViewSingleStudentComponent implements OnInit {

  id: any;
  employee: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit():void{
    this.getStudent(this.id = this.route.snapshot.params['id']);
    ;

  }
  getStudent(arg0: any) {
    throw new Error('Method not implemented.');
  }


  private getEmployee(id:any){
  
    this.studentService.getStudentById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    }, error => console.log(error));

  }

  deleteStudent(id: any){
 
    this.router.navigate(['./delete-student', id]);   
  }

  editStudent(id: any)
{
  this.router.navigate(['./edit-student', id]);
}

}


