import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  userSubscription: Subscription;

  ngOnInit(): void {
    this.userSubscription = this.auth.logedUser.subscribe( user => {
      this.router.navigate(['private-area/page-one']);
    })
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    
    this.auth.signIn(form.value.mail, form.value.password)
    form.reset;
  }

}
