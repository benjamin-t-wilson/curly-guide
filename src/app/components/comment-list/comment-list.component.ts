import { Component, OnInit, Input } from '@angular/core';
import UserComment from 'src/app/types/UserComment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  // I suppose an equally valid approach would be for this component to fetch
  // the comments itself. However, I think it is better to have it fetched higher up
  // because it would probably be handled via state somewhere
  @Input()
  comments: UserComment[] = [];

  ngOnInit(): void {
  }

}
