import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  btnClick= function (param: string){
    this._router.navigateByUrl(param);
  }

}
