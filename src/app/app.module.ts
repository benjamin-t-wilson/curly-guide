import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserSearchComponent } from './components/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentInputComponent,
    CommentComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
