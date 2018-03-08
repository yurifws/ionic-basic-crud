import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaContatoPage } from './edita-contato';

@NgModule({
  declarations: [
    EditaContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaContatoPage),
  ],
})
export class EditaContatoPageModule {}
