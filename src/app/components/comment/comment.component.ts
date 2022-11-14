import { Component, OnInit, Input } from '@angular/core';
import UserComment from 'src/app/types/UserComment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment!: UserComment;

  constructor() { }

  ngOnInit(): void {
  }

}
