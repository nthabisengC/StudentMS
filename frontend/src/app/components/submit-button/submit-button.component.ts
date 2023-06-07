// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-submit-button',
//   templateUrl: './submit-button.component.html',
//   styleUrls: ['./submit-button.component.css']
// })
// export class SubmitButtonComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }




import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interface/student';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {

  student: Student = new Student();
  constructor(private router:Router, private navigation:NavigationService ){}

  submit(){
    console.log(this.student)
    this.navigation.back();
  }
}