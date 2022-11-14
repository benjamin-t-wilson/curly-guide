import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/types/User';
import UserComment from 'src/app/types/UserComment';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  // this is only being passed through to the search component
  // in the real world, this would be housed in ngrx or something
  // and would be fetched directly by the search component as needed
  @Input()
  users: User[] = [];

  @Output()
  newCommentEvent = new EventEmitter<UserComment>();

  textValue: string = ""
  userSearchText: string = ""

  updateTextValue(value: string) {
    this.textValue = value

    const userSearchRegex = this.textValue.match(/(@\w{1,})/g)
    if (userSearchRegex) {
      this.userSearchText = userSearchRegex[0]
    } else {
      this.userSearchText = ""
    }
  }

  addComment(comment: UserComment) {
    this.newCommentEvent.emit({ userID: 5, userName: "Sully", text: this.textValue })
    this.textValue = ""
    this.userSearchText = ""
  }

}
