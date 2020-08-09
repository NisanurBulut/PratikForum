import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // dışarıya bilgi vermeli
  @Output() toggeSideBarForMenu: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    // dinlemeli
    this.toggeSideBarForMenu.emit();
  }
}
