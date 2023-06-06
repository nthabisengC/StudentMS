// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ComponentsComponent } from './components/components.component';

// @NgModule({
//   declarations: [	
//     AppComponent,
//       ComponentsComponent
//    ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllStudentComponent } from './pages/view-all-student/view-all-student.component';
import { ViewSingleStudentComponent } from './pages/view-single-student/view-single-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { DeleteStudentComponent } from './pages/delete-student/delete-student.component';
import { CreateEmpComponent } from './pages/create-student/create-student.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeFormComponent } from './components/student-form/student-form.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';

import { FilterPipe } from './services/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllStudentComponent,
    ViewSingleStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    CreateEmpComponent,
    HeaderComponent,
    EmployeeFormComponent,
    BackButtonComponent,
    DeleteButtonComponent,
    CancelButtonComponent,
    SubmitButtonComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


