import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageDetailPage } from '../image-detail/image-detail';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
    this.showBanner();
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


}
