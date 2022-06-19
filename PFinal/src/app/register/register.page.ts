/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  [x: string]: any;
  nombreVal = "";
  emailVal = "";
  apellidoVal = "";
  niVal = "";
  passVal = "";



  constructor(public menuCtroller: MenuController,private crud: CrudService) { this.crud.databaseConn(); }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menuCtroller.enable(false);
  }
  createUser(){
    this.crud.addItem(this.nombreVal, this.emailVal,this.apellidoVal,this.niVal,this.passVal);
  }

}
