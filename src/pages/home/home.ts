import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageDetailPage } from '../image-detail/image-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  openImageDetail(imageId){
    this.navCtrl.push(ImageDetailPage, {"imageid": imageId});
  }


}
