import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaContatoPage } from './adiciona-contato';

@NgModule({
  declarations: [
    AdicionaContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaContatoPage),
  ],
})
export class AdicionaContatoPageModule {}
