import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @ViewChild('commentBox')
  commentBox!: ElementRef;

  textValue: string = ""
  userSearchText: string = ""
  selectedUser: User | undefined;

  searchBoxStyle = {
    left: "0px"
  }

  updateTextValue(value: string) {
    this.textValue = value

    const userSearchRegex = this.textValue.match(/(@\w{1,})/gm)

    if (userSearchRegex && !this.textValue.match(/(@\w{1,}\s)/gm)) {
      this.userSearchText = userSearchRegex[0]
    } else {
      this.userSearchText = ""
    }
  }

  addComment() {
    this.newCommentEvent.emit({ userID: 5, userName: "Sully", text: this.textValue })
    this.textValue = ""
    this.userSearchText = ""

    if (this.selectedUser) {
      window.alert(`User number: ${this.selectedUser.userID}, name: ${this.selectedUser.name} has been tagged in a comment!`)
      this.selectedUser = undefined
    }
  }

  userSelectedEvent(event: User) {
    this.selectedUser = event
    this.userSearchText = ""
    this.textValue = this.textValue.replace(/(@\w{1,})/g, event.name)
    this.commentBox.nativeElement.focus()
  }

  handleInput(event: any) {
    let letterOffset = (event.target as HTMLInputElement).selectionStart as number
    this.searchBoxStyle.left = letterOffset * 10 + "px"
  }
}
