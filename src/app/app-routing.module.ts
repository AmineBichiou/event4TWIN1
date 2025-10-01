import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'list', component:ListEventComponent,
  //   children:[
  // {path:'test',component:HomeComponent}
  // ]
},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
