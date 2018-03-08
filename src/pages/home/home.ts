import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { ContatoService } from '../../providers/contato-service/contato-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos: Observable<any>

  constructor(public navCtrl: NavController, private contatoService: ContatoService) {
    this.contatos = this.contatoService.consultarTodos();

  }

  adicionarContato(){
    this.navCtrl.push('AdicionaContatoPage');

  }

  editarContato(contato){

    this.navCtrl.push('EditaContatoPage', {contato: contato});

  }

  removerContato(key: string){
    this.contatoService.remover(key);
  }

}
