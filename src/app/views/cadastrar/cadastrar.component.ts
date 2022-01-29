import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  
  ngOnInit(): void {
  }

  usuarioModel = new Users();

  mensagem =""

onRegistrar(){
  console.log(this.usuarioModel)
  this.loginService.register(this.usuarioModel).subscribe((response)=>{
    console.log(response)
    
  },(respostaErro)=>{
    console.log(respostaErro)
    this.mensagem = respostaErro.error
  }

  )
}
}
