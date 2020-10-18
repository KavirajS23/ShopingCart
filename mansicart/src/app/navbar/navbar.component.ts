import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  customerCare: string = "044 123 456 7890";  
  userName: string = "Mansi";
  cartItemCount: Number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
