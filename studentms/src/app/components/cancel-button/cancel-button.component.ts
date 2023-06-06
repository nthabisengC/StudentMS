// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cancel-button',
//   templateUrl: './cancel-button.component.html',
//   styleUrls: ['./cancel-button.component.css']
// })
// export class CancelButtonComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent {

  constructor(private navigation:NavigationService){}

  back():void{
    this.navigation.back();
  }
}

