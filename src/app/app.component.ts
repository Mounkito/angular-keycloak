import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-keycloak';

  constructor(private keycloakService : KeycloakService){}

  logout() : void{
    this.keycloakService.logout();
  }
}
