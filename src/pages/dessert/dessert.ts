import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {Component} from '@angular/compiler'


@Component({
  selector: 'dessert', //para abir otras paginas
  templateUrl: 'dessert.html'
})
export class Dessert {
  constructor (public navCtrl: NavController){  }
  goBack():void{
    this.navCtrl.pop(); //navctrl sirve para ir a otras paginas y pop quita esta pagina actual para ir a la anterior
  }
  onPageWillEnter(){
    console.log('Enter on page');
  }
}
