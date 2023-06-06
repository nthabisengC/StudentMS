// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete-student',
//   templateUrl: './delete-student.component.html',
//   styleUrls: ['./delete-student.component.css']
// })
// export class DeleteStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interface/student';
import { StudentService } from 'src/app/services/student/student.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  id: any;

  student: Student = new Student();
  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) {}

  back(): void {
    this.navigation.back();
  }
  ngOnInit(): void {
    this.getStudent((this.id = this.route.snapshot.params['id']));
  }
  getStudent(arg0: any) {
    throw new Error('Method not implemented.');
  }

  // private getStudent(id: any) {
  //   this.studentService.getStudentById(this.id).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.student = data;
  //     },
  //     (error) => console.log(error)
  //   );
  // }

  confirmDelete(id: any) {
    this.studentService.deleteStudent(id).subscribe((data) => {
      console.log(data);
      //this.student.deleted = true;
      this.getStudent((this.id = this.route.snapshot.params['id']));

      Swal.fire({
        icon: 'warning',
        title: 'Successfully Removed Student',
        confirmButtonColor: '#d33',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        customClass: {
          confirmButton: 'btn btn-success',
        },
        confirmButtonText: '<i class="fa fa-trash"></i> OK',
      });
      this.router.navigate(['./view-all-student']);
    });
  }
}


