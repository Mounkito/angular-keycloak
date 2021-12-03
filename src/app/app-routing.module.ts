import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BilouComponent } from './bilou/bilou.component';
import { AuthGuard } from './keycloak/app.guard';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'bilou', component: BilouComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
