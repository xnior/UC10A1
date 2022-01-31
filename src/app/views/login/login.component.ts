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
    let erroPalavra:number=0     
    const blackList:string[] = ["--", ";--", ";", "/*", "*/", "@@", "char", "nchar", "varchar", "nvarchar", "alter", "begin", "cast", "create", "cursor", "declare", "delete","drop", "end", "exec", "execute", "fetch", "insert", "kill", "open", "select", "sys", "sysobjects", "syscolumns", "table", "update"]
    console.log(this.loginModel)
    
    blackList.forEach(palavra=>{
      // console.log("Palavra no texto: " + palavra)
      if (this.loginModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem="Palavra inválida: " + palavra
        erroPalavra=1
      }
    })
    
    if (erroPalavra == 0 ) {

      this.loginService.login(this.loginModel).subscribe((response)=>{
        console.log(response)
      },(respostaErro)=>{
      this.mensagem=respostaErro.error
      console.log(this.mensagem)
      })    
    }
    
  }
}
