import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PratikForumAPP';
  sideBarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  toggleSideBarMenu(event: any) {
    console.log(this.sideBarOpen);
    this.sideBarOpen = !this.sideBarOpen;
    console.log(this.sideBarOpen);
  }
}
