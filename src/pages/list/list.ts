import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  msgList : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private clipboard: Clipboard, private viewCtrl : ViewController) {
    this.msgList.push("सविजयदशमी का त्यौहार आपके और आपके परिवार के जीवन में खुशियाँ, सुख, शाँती भर दे॥ …शुभ दशहरा");
    this.msgList.push("इस दशहरे इक छोटा-सा काम करें, मन में जो रावण बैठा है उसका सर्वनाश करें. दशहरा की शुभ कामनाएँ");
    this.msgList.push("बुराई का होता है विनाश, दशहरा लता है उम्मीद की आस, रावण की तरह आपके दुखों का हो नाश, विजयदशमी की शुभकामनायें.");
    this.msgList.push("रावन जलाओ.. बुराई को आग लगाओ… अच्छाई को अपनाओ… खुशियाँ मनाओ..खूब पिओ… खूब खाओ.. दशहरा का त्यौहार मनाओ॥ …शुभ दशहरा");
    this.msgList.push("खुशियों का त्यौहार..प्यार की बौछार…मिठाईयों की बहार…इस दशहरे के शुभ दिन आपको मिले खुशियाँ हज़ार बार। विजयदशमी की हार्दीक शुभकामनायेँ।");
    this.msgList.push("फूल खिले.. खुशी आपके कदम चूमे..कभी ना हो दुखों का सामना..धन ही धन आये आपके अंगनां…यही है दशहरे के अवसर पर हमारी मनोकामना॥ …शुभ दशहरा");
    this.msgList.push("दशहरे की आपको, पूरे परिवार को बहुत-बहुत शुभकामनाएं एवं बधाई। दशहरा असत्य पर सत्य की विजय है। आप भी हर पथ पर विजयी हों, यही भगवान से हमारी मंगल कामना है।");
    this.msgList.push("असत्य पर सत्य की जीत के त्यौहार विजयदशमी की आपको और आपके परिवार को हार्दिक हार्दिक शुभकामनाएं… ईश्वर आपको नई ऊंचाइयां दे।");
    this.msgList.push("आप सभी को दशहरा के पावन पर्व की हार्दिक शुभकामनाएँ! मैं ईश्वर से प्रार्थना करता हूँ कि आप व आपका परिवार सदैव सुख समृद्ध खुशहाल रहे!");
    this.msgList.push("सुख, शान्ति एवम समृध्दि की मंगलमयी कामनाओं के साथ महानवमी और विजयदशमी की हार्दिक शुभकामनाएं !!");
    this.msgList.push("अधर्म पर धर्म की जीत, अन्याए पर न्याय की विजय, बुराई पर अच्छाई की जय जय कार, यही है दशहरे का त्यौहार ..दशहरे की शुभकामनायें.");
    this.msgList.push("हर पल हो सुनहरा…दुनिया में नाम हो रोशन तुम्हारा…दुनिया को दिखाओ तुम किनारा… यही सपना है हमारा. विजयदशमी की शुभकामनायें");
    this.msgList.push("ज्योत से ज्योत जगाते चलो..प्रेम की गंगा बहाते चलो..राह में जो आये दीन-दुखी..सबको गले से लगाते चलो..दिन आयेगा सबका सुनहरा..इसलिये मेरी और से दशहरे की शुभकामनायें.");
  }

  ShareOnWhatsApp(item){
    this.socialSharing.shareViaWhatsApp( item, null, null)
      .then(()=> {

      }).catch((error)=> {

      });
  }

  SocialSharingLink(item){
    this.socialSharing.share(item, null, null, null)
      .then(()=> {

      }).catch((error)=> {

      });
  }

  CopyMessage(item){
    try{
      this.clipboard.copy(item);
    }
    catch(e){

    }
  }

  backButtonAction() {
    this.viewCtrl.dismiss();
  }

}
