import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  loginModel = new Users();

  mensagem=""

  

  onLogin(){
    console.log(this.loginModel)
    this.loginService.login(this.loginModel).subscribe((response)=>{
      console.log(response)
    },(respostaErro)=>{
    this.mensagem=respostaErro.error
    console.log(this.mensagem)
    })
  }
}
