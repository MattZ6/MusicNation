import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  @ViewChild('login', { static: false })
  loginDrawer: MatDrawer;

  imagemCarregou: boolean;

  constructor() {}

  ngOnInit() {}

  carregou() {
    this.imagemCarregou = true;
  }
}
