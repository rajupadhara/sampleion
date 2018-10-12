import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageDetailPage } from '../image-detail/image-detail';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
    
  }

  ionViewDidLoad() {
    this.showBanner();
    this.launchInterstitial();
  }

  openImageDetail(imageId){
    this.navCtrl.push(ImageDetailPage, {"imageid": imageId});
  }

  showBanner() {    
    let bannerConfig : AdMobFreeBannerConfig = {
      id: 'ca-app-pub-1223618044962952/7423243692',
      isTesting: false,
      autoShow: true
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
      autoShow: true        
    };

    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {        
        this.admobFree.banner.show();
    });
  }


}
