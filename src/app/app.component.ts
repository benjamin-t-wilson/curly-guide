import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // for the sake of this app, we are going to use a static list of comments to start
  // in reality, this would likely be the result of an HTTP request
  // also in reality, the model probably wouldn't include the userID && name.
  // in this case, we are assuming the information was served to us by the API by way of a JOIN or something
  comments = [{ userID: 1, text: "Good morning, Roz, my succulent little garden snail. And who would we be scaring today?", userName: "Wazowski" },
  { userID: 2, text: "Wazowski! You didn't file your paperwork last night.", userName: "Roz" },
  { userID: 1, text: "Oh, that darn paperwork! Wouldn't it be easier if it all just blew away?", userName: "Wazowski" },
  { userID: 2, text: "Don't let it happen again.", userName: "Roz" },
  { userID: 1, text: "Yes, well, uh, I'll try to be less careless.", userName: "Wazowski" },
  { userID: 2, text: "I'm watching you, Wazowski. Always watching. Always.", userName: "Roz" },
  { userID: 1, text: "Ooh, she's nuts.", userName: "Wazowski" },
  { userID: 3, text: "All scare floors are now active. Assistants, please report to your stations.", userName: "Celia" },
  { userID: 4, text: "Okay, people, Eastern Seaboard coming online. We got scarers coming out!", userName: "Jerry" }]

  // also for the sake of the app, using a static list of users
  users = [
    { userID: 1, name: 'Wazowski' },
    { userID: 2, name: 'Roz' },
    { userID: 3, name: 'Celia' },
    { userID: 4, name: 'Jerry' },
  ]
}
