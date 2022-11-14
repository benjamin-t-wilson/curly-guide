import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import User from 'src/app/types/User';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnChanges {
  @Input()
  searchValue: string = ""

  // in the real world, this would be housed in ngrx or something
  // and would be fetched directly by the search component as needed
  @Input()
  users: User[] = []

  possibleTargets: User[] = []

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['searchValue']?.currentValue;
    if (value) {
      this.possibleTargets = this.users.filter(u => u.name.toLowerCase().startsWith(value.slice(1).toLowerCase()))
    } else {
      this.possibleTargets = []
    }
  }
}
