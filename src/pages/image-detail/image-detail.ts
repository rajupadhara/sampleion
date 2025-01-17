import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-image-detail',
  templateUrl: 'image-detail.html',
})
export class ImageDetailPage {

  imageid: any;
  file: string = null;
  link: string = null;
  imageBase64: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private viewCtrl : ViewController) {
    this.imageid = this.navParams.get('imageid');
    this.file = "www/assets/imgs/" + this.imageid + ".jpg";
  }

  ionViewDidLoad() {

  }


  ShareOnWhatsApp(){
    this.socialSharing.shareViaWhatsApp("|| शुभ दीपावली ||", this.file, null)
      .then(()=> {

      }).catch((error)=> {

      });
  }

  ShareOnInstagram(){
    this.socialSharing.shareViaInstagram("|| शुभ दीपावली ||", this.file)
      .then(()=> {

      }).catch((error)=> {

      });
  }

  ShareOnFacebook(){
    this.socialSharing.shareViaFacebook("|| शुभ दीपावली ||", this.file, null)
      .then(()=> {

      }).catch((error)=> {

      });
  }

  ShareAll(){
    this.socialSharing.share("|| शुभ दीपावली ||", null, this.file)
    .then(()=> {

    }).catch((error)=> {

    });
  }

  backButtonAction() {
    this.viewCtrl.dismiss();
  }

}
