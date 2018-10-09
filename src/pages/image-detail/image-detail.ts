import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Base64 } from '@ionic-native/base64';

@Component({
  selector: 'page-image-detail',
  templateUrl: 'image-detail.html',
})
export class ImageDetailPage {

  imageid: any;
  file: string = null;
  link: string = null;
  imageBase64: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private base64: Base64) {
    this.imageid = this.navParams.get('imageid');
    this.file = "assets/imgs/" + this.imageid + ".jpg";
    this.ConvertToBase64Image();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageDetailPage');
  }
  
  ConvertToBase64Image(){
    this.base64.encodeFile(this.file).then((base64File: string) => {
      this.imageBase64 = 'data:image/jpeg;base64,' + base64File;
      alert(this.file);
      alert(base64File);
      alert(this.imageBase64);
    }, (err) => {
      alert(err);
    });
  }


  ShareOnWhatsApp(){
    this.socialSharing.shareViaWhatsApp("|| शुभ नवरात्रि ||", null, this.imageBase64)
      .then(()=> {
        console.log("WhatsApp message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  ShareOnInstagram(){
    this.socialSharing.shareViaInstagram("|| शुभ नवरात्रि ||", this.imageBase64)
      .then(()=> {
        console.log("instagram message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  ShareOnFacebook(){    
    this.socialSharing.shareViaFacebook("|| शुभ नवरात्रि ||", null, this.imageBase64)
      .then(()=> {
        console.log("facebook message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

}
