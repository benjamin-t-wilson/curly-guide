import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  textValue: string = ""
  userSearchText: string = ""

  updateTextValue(value: string) {
    this.textValue = value
    
    const userSearchRegex = this.textValue.match(/(@\w{1,})/g)
    if (userSearchRegex) {
      this.userSearchText = userSearchRegex[0]
    }
  }

}
