import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  panelOpenState=false;
  ngOnInit(): void {
  }  
  constructor(private _router: Router) { }

  btnClick= function (param:string) {  
    this._router.navigateByUrl(param);
  };
}
