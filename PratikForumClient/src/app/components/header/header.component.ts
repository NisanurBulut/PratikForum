import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // dışarıya bilgi vermeli
  @Output() toggleSideBarForMenu: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    // dinlemeli
    this.toggleSideBarForMenu.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
