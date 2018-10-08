import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-image-detail',
  templateUrl: 'image-detail.html',
})
export class ImageDetailPage {

  imageid: any;
  file: string = null;
  link: string = null;


  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.imageid = this.navParams.get('imageid');
    this.file = "assets/imgs/" + this.imageid + ".jpg";
    console.log(this.file);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageDetailPage');
  }

  ShareOnWhatsApp(){
    this.socialSharing.shareViaWhatsApp("|| शुभ नवरात्रि ||", this.file, null)
      .then(()=> {
        console.log("WhatsApp message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  ShareOnInstagram(){
    this.socialSharing.shareViaInstagram("|| शुभ नवरात्रि ||", this.file)
      .then(()=> {
        console.log("instagram message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  ShareOnFacebook(){
    console.log(this.file);
    this.socialSharing.shareViaFacebook("|| शुभ नवरात्रि ||", this.file, null)
      .then(()=> {
        console.log("facebook message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

}
