import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopComponent } from './views/top/top.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    LoginComponent,
    UsuariosComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
