import { ContatoService } from './../../providers/contato-service/contato-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contato } from '../../models/contato';

/**
 * Generated class for the AdicionaContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-contato',
  templateUrl: 'adiciona-contato.html',
})
export class AdicionaContatoPage {
  contato: Contato;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contadoService: ContatoService) {
    this.contato = {} as Contato;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaContatoPage');
  }

  salvar(){
    this.contadoService.salvar(this.contato);
    this.navCtrl.pop();
  }

}
