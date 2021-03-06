import { Contato } from './../../models/contato';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContatoService } from '../../providers/contato-service/contato-service';

/**
 * Generated class for the EditaContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-contato',
  templateUrl: 'edita-contato.html',
})
export class EditaContatoPage {

  contato: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contatoService: ContatoService) {
    
    this.contato = this.navParams.data.contato;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaContatoPage');
  }

  alterar(){
    let contato= {} as Contato;
    contato.nome = this.contato.nome
    contato.telefone = this.contato.telefone

    this.contatoService.alterar(contato, this.contato.key);
    this.navCtrl.pop();
  }

}
