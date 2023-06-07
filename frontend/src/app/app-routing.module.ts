import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteStudentComponent } from './pages/delete-student/delete-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllStudentComponent } from './pages/view-all-student/view-all-student.component';
import { ViewSingleStudentComponent } from './pages/view-single-student/view-single-student.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  { path:'view-all-student', component:ViewAllStudentComponent},
  {path: 'create', component: CreateStudentComponent},
  { path:'view-student', component:ViewSingleStudentComponent},
  {path: 'view-single-student/:id', component: ViewSingleStudentComponent},
  {path:'create-student', component:EditStudentComponent},
  {path:'edit-student/:id', component:EditStudentComponent},
  {path:'delete-student/:id', component:DeleteStudentComponent},
  {path:'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //default page used if page doesn't exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }