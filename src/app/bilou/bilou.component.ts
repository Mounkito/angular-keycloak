import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'app-bilou',
  templateUrl: './bilou.component.html',
  styleUrls: ['./bilou.component.css'],
})
export class BilouComponent implements OnInit, OnDestroy {
  userName: string = '';
  constructor(private keycloakService: KeycloakService) {}

  ngOnDestroy(): void {
    this.keycloakService.logout();
  }

  ngOnInit(): void {
    this.userName = this.keycloakService.getUsername();
  }
}
