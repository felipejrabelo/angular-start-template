import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthResponseData } from '../interfaces/auth-response-date.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  test: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) { 
    console.log('Ativou Global Service')
  }

  loadUserFromLocalStorage(){
    
    let user:any = localStorage.getItem('user');
    if(user){
        let finalUser:AuthResponseData = JSON.parse(user);
        if(finalUser){            
            return finalUser;
        }
    }
    return undefined;
  }

}
