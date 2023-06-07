// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-student',
//   templateUrl: './edit-student.component.html',
//   styleUrls: ['./edit-student.component.css']
// })
// export class EditStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-edit-student',
//   templateUrl: './edit-student.component.html',
//   styleUrls: ['./edit-student.component.css']
// })
// export class EditStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interface/student';
import { StudentService } from 'src/app/services/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.paramMap.subscribe((paraMap) => {
      console.log(paraMap.get('id'));
    });
  }
  id: any;
  student: Student = new Student();
  submitted: boolean = false;
  createForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
  });

  ngOnInit(): void {
    // this.getStudent((this.id = this.route.snapshot.params['id']));
    // //this.getEmployee(this.id=44)
    // this.createForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   contactNo: [
    //     '',
    //     [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    //   ],
    // });
  }
  getStudent(arg0: any) {
    throw new Error('Method not implemented.');
  }

  get createFormControl() {
    return this.createForm.controls;
  }
  private getEmployee(id: any) {
    //this.id=44;

    this.studentService.getStudentById(this.id).subscribe(
      (data) => {
        this.student = data;
        console.log(data);
      },
      (error) => console.log(error)
    );

  }

  update() {
    this.submitted=true;
    if(this.createForm.valid){

    this.studentService.editStudent(this.id, this.student).subscribe(
      (data) => {
        this.goToStudentList();
        Swal.fire({
          icon: 'success',
          title: 'Successfully Updated Employee',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          customClass: {
            confirmButton: 'btn btn-success',
          },
          confirmButtonText: '<i class="fas fa-check-circle"></i> OK',
        });
      },
      (error) => console.log(error)
    );
  }
}

  goToStudentList() {
    this.router.navigate(['./view-all-student']);
  }
}
