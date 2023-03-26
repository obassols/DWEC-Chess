import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './Project/Components/create-team/create-team.component';
import { PlaygroundComponent } from './Project/Components/playground/playground.component';

const routes: Routes = [
  { path: 'create-team', component: CreateTeamComponent },
  { path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
