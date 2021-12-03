import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-bilou',
  templateUrl: './bilou.component.html',
  styleUrls: ['./bilou.component.css'],
})
export class BilouComponent implements OnInit {
  userName: string = '';
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.userName = this.keycloakService.getUsername();
  }
}
