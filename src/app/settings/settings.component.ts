import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [UserService]
})
export class SettingsComponent implements OnInit {

  static appName: Iuser;

  constructor(private service : UserService) {}

  ngOnInit() {}

  private saveSettings(Name)
  {
    SettingsComponent.appName = Name;
    console.log(Name);
  }

}
