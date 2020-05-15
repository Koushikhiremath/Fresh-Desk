import { MainComponent } from './ticket/main/main.component';
import { CreateticketComponent } from './ticket/createticket/createticket.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: "/login",
  //   pathMatch: 'full'
  // },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'createticket',component:CreateticketComponent},
  {path:'showtickets',component:MainComponent}
  // { path: '**', component: PagenotfoundComponent }

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routecomponets=[LoginComponent,SignupComponent,PagenotfoundComponent]



