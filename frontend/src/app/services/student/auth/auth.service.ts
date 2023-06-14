// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// // import { environment } from '@environments/environment';
// // import { User } from '@app/_models';
// import { Mentor } from 'src/app/interface/mentor';
// import { environment } from 'src/environments/environment';

// @Injectable({ providedIn: 'root' })
// export class AccountService {
//     private userSubject: BehaviorSubject<Mentor>;
//     public user: Observable<Mentor>;
//   mentorValue: any;
//   mentorSubject: any;

//     constructor(
//         private router: Router,
//         private http: HttpClient
//     ) {
//         this.userSubject = new BehaviorSubject<Mentor>(JSON.parse(localStorage.getItem('mentor')));
//         this.user = this.userSubject.asObservable();
//     }

//     public get userValue(): Mentor {
//         return this.userSubject.value;
//     }

//     login(username: any, password: any) {
//         return this.http.post<Mentor>(`${environment.apiUrl}/users/authenticate`, { username, password })
//             .pipe(map(user => {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('user', JSON.stringify(user));
//                 this.userSubject.next(user);
//                 return user;
//             }));
//     }

//     logout() {
//         // remove user from local storage and set current user to null
//         localStorage.removeItem('mentor');
//         this.userSubject.next(null);
//         this.router.navigate(['/account/login']);
//     }

//     register(user: Mentor) {
//         return this.http.post(`${environment.apiUrl}/mentor/register`, user);
//     }

//     getAll() {
//         return this.http.get<Mentor[]>(`${environment.apiUrl}/mentor`);
//     }

//     getById(id: string) {
//         return this.http.get<Mentor>(`${environment.apiUrl}/mentor/${id}`);
//     }

//     update(id: any, params: any) {
//         return this.http.put(`${environment.apiUrl}/mentor/${id}`, params)
//             .pipe(map(x => {
//                 // update stored user if the logged in user updated their own record
//                 if (id == this.mentorValue.id) {
//                     // update local storage
//                     const mentor = { ...this.mentorValue, ...params };
//                     localStorage.setItem('mentor', JSON.stringify(mentor));

//                     // publish updated user to subscribers
//                     this.mentorSubject.next(mentor);
//                 }
//                 return x;
//             }));
//     }

//     delete(id: string) {
//         return this.http.delete(`${environment.apiUrl}/mentors/${id}`)
//             .pipe(map(x => {
//                 // auto logout if the logged in user deleted their own record
//                 if (id == this.mentorValue.id) {
//                     this.logout();
//                 }
//                 return x;
//             }));
//     }
// }
