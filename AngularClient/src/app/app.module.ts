import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './Project/Components/board/board.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTeamComponent } from './Project/Components/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
