import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
 


  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
    private router: Router,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Success');
          this.loginForm.reset();
          this.router.navigate(['home']);
          console.log(res);
        } else {
          alert('user not found');
        }
      },
      error: () => {
        alert('err');
      },
    });
  }
}

//   const data = this.loginForm.value;
//   this.auth.signin(data).subscribe({
//     next:(res)=>{
//   if(res.Success){
//     alert(res.Success)
//   console.log(res);
//       alert("signin succesful")
//       this.loginForm.reset();
//       this.router.navigate(['home']);

//     }else{
//       alert(res.message)
//     },error:()=>{

//       alert("err")

//     }
    
//   }


// })

  

