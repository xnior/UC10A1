import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Users } from "src/app/models/users";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  public usuario: Users[] = [];

  ngOnInit(): void {
this.loginservice.getListar()
.subscribe(
  retorno =>{
    this.usuario = retorno.map(item=>
      {
        return new Users(
          item.email,
          item.password,
          item.id
        )
      }
      )
  }
)

  }

}
