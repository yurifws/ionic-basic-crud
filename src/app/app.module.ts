import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoService} from '../providers/contato-service/contato-service';

import { AngularFireModule  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const config = {
  apiKey: "AIzaSyCnlgfrXKLqZCQhxsheYwxomYr_OuRtbug",
  authDomain: "projeto-my-app-firebase-crud.firebaseapp.com",
  databaseURL: "https://projeto-my-app-firebase-crud.firebaseio.com",
  projectId: "projeto-my-app-firebase-crud",
  storageBucket: "projeto-my-app-firebase-crud.appspot.com",
  messagingSenderId: "494156223885"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoService
  ]
})
export class AppModule {}
