import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private app: App, private appRate: AppRate, private admobFree: AdMobFree) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'दशहरा Status', component: HomePage },
      { title: 'दशहरा Message', component: ListPage },
      { title: 'Rate us', component: null},
      { title: 'Exit', component: null}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showBanner();
      this.launchInterstitial();
    });

    this.platform.registerBackButtonAction(()=> {
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
        if(activeView != null){
          if(nav.canGoBack()){
            nav.pop();
          }
          else if (typeof activeView.instance.backButtonAction === 'function'){
            activeView.instance.backButtonAction();
          }
          else{
            nav.parent.select(0); // goes to the first tab
          }
        }
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Exit'){
      this.platform.exitApp();
    }else if(page.title == 'Rate us') {
      this.appRate.preferences.storeAppURL = {        
        android: 'market://details?id=hutah.com.dasarastatus'        
      };      
      this.appRate.promptForRating(true);
    }else{
      this.nav.setRoot(page.component);
    }
  }


  showBanner() {    
    let bannerConfig : AdMobFreeBannerConfig = {
      id: 'ca-app-pub-1223618044962952/7423243692',
      isTesting: false,
      autoShow: false
    };

    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare()
      .then(()=> {        
        this.admobFree.banner.show();        
      })
      .catch(e => console.log(e));
  }

  launchInterstitial() { 
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-1223618044962952/3310400998',
      isTesting: false, // Remove in production
      autoShow: false        
    };

    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {        
        this.admobFree.banner.show();
    });
  }


}
