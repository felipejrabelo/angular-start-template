import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-date.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  testUser: AuthResponseData = {
    nome: 'Felipe',
    email: 'felipe@gmail.com',
    rule: 'ADMIN',
    token: '3224jdehudsusdiwe43iu4hhfjdndncndkcnj44k34j43fknkfjnkfjfnkj34nkj34nk4j3n'
  }

  logedUser: Subject<AuthResponseData> = new Subject<AuthResponseData>();

  constructor(private http:HttpClient, private router:Router) { }

  signIn(mail: string, password: string){
    localStorage.setItem('user', JSON.stringify(this.testUser));
    this.logedUser.next(this.testUser);
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/main']);
  }

}
