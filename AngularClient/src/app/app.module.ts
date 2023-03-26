import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './Project/Components/board/board.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTeamComponent } from './Project/Components/create-team/create-team.component';
import { PlaygroundComponent } from './Project/Components/playground/playground.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CreateTeamComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
