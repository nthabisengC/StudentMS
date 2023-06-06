// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-student',
//   templateUrl: './create-student.component.html',
//   styleUrls: ['./create-student.component.css']
// })
// export class CreateStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-student',
//   templateUrl: './create-student.component.html',
//   styleUrls: ['./create-student.component.css']
// })
// export class CreateStudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from 'src/app/employee';
// import { StudentService } from 'src/app/services/student/student.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/interface/student';
import Swal from 'sweetalert2';

import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateEmpComponent implements OnInit {
  name = 'Angular';
  student: Student = new Student();
  navigation: any;
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

  constructor(
    private studentService: StudentService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  get createFormControl() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      this.studentService.createStudent(this.student).subscribe(
        (data) => {
          console.log(data);
          console.table(this.createForm.value);
          this.router.navigate(['./view-all-student']);

          Swal.fire({
            icon: 'success',
            title: 'Successfully Created Student',
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

  submit() {
    console.log(this.studentService);
    this.saveStudent();
    this.navigation.back();
  }
  saveStudent() {
    throw new Error('Method not implemented.');
  }

  saveEmp() {
    this.studentService.createStudent(this.student).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Thank you...', 'You submitted successfully!', 'success');
        this.router.navigate(['./view-all-emp']);
      },
      (error) => console.log(error)
    );
  }
}


