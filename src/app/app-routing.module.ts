import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BilouComponent } from './bilou/bilou.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './keycloak/app.guard';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'error',  component: ErrorComponent },
  { path: 'bilou', component: BilouComponent, canActivate: [AuthGuard],  data: { roles: ['bilou-team'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
