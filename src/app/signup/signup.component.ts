import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from "@angular/forms"
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public signupForm !:FormGroup;
  

  constructor(private formBuilder:FormBuilder,private auth:AuthService, private router:Router ){ }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:[''],
      password:[''],
      mobile:['']
    })  
  }
  signUp(){
    const data =this.signupForm.value;
    delete data ['confirm']
    this.auth.signup(data)
    .subscribe({
      next:(res)=>{
      console.log(res);
      alert("signup succesful")
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    error:()=>{

      alert("err")

    }
  })

  

  }

}
