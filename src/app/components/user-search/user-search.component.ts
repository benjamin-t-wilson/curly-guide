import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
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

  @Output()
  selectedTargetEvent = new EventEmitter<User>()

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['searchValue']?.currentValue;
    this.handleTargets(value)
  }

  handleTargets(value: string) {
    if (value) {
      this.possibleTargets = this.users.filter(u => u.name.toLowerCase().startsWith(value.slice(1).toLowerCase()))
    } else {
      this.possibleTargets = []
    }
  }

  setSelected(event: Event) {
    const name = (event.target as HTMLElement).innerText
    this.selectedTargetEvent.emit(this.possibleTargets.filter(u => u.name === name)[0])
  }
}
