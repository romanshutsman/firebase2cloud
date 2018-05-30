import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from "./../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    const first = form.value.first;
    const last = form.value.last;
    this.auth.signUp(email, password);
    form.reset();
    this.route.navigateByUrl('/upload')
  }

}
