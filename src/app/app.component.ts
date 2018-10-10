import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Status', component: HomePage },
      { title: 'Message', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.registerBackButtonAction(()=> {      
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
        alert(activeView);
        alert(activeView.name);
        if(activeView != null){
          if(nav.canGoBack())
            nav.pop();
          else if (typeof activeView.instance.backButtonAction === 'function')
            activeView.instance.backButtonAction();
          else
            nav.parent.select(0); // goes to the first tab
        }
      });    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



}
