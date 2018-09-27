import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Dessert} from '../dessert/dessert';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
  //(click)="goToOtherPage()"
  //templateUrl: 'dessert.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['cafe', 'cafe', 'beer', 'cafe', 'cafe', 'cafe',
    'cafe', 'cafe', 'cafe', 'cafe'];

    this.items = [];
    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'MENU ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      //item: item
    });
  }

  goDessert():void {
    console.log('ir hacia pagina Dessert');
    this.navCtrl.push(Dessert); //push pone otra pagina y dentro del parentesis la clase de esa nueva pagina
  }
}
