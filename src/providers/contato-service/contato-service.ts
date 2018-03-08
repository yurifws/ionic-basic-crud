import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Contato } from '../../models/contato';

/*
  Generated class for the ContatoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatoService {
  private path = '/contatos/';
  contatos: AngularFireList<Contato[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {

    this.contatos = this.angularFireDatabase.list(this.path);
  }

  consultarTodos(){
    return this.contatos
    .snapshotChanges()
    .map( changes => { 
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
      }))
    });

  }

  consultar(key: string){
    return this.angularFireDatabase.object(this.path+key )
    .snapshotChanges()
    .map(c => { 
      return { key: c.key, ...c.payload.val()};
      })
  }

  salvar(contato){
    return this.contatos.push(contato);

  }

  alterar(contato, key: string){
    return this.contatos.update(key, contato);
  }

  remover(key: string){
    return this.contatos.remove(key);
  }

}
