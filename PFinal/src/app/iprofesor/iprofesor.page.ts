import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iprofesor',
  templateUrl: './iprofesor.page.html',
  styleUrls: ['./iprofesor.page.scss'],
})
export class IProfesorPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
 /* enableAuthenticatedMenu() {
    this.menuCtrl.enable(false, 'menu-admin');
    this.menuCtrl.enable(true, 'menu-content');
  }*/
  

}
