import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { Clipboard } from '@ionic-native/clipboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ImageDetailPage } from './../pages/image-detail/image-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ImageDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ImageDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,    
    AdMobFree,
    AppRate,
    Clipboard,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
