import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  msgList : any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private clipboard: Clipboard) {
    this.msgList.push("सारा जहां है जिसकी शरण में, नमन है उस माँ के चरण में, हम है उस माँ के चरणों की धूल, आओ मिलकर माँ को चढ़ाएं श्रद्धा के फूल। शुभ नवरात्रि।");
    this.msgList.push("माँ दुर्गा के आशीर्वाद से आपका जीवन सुखमय हो। इस पावन नवरात्रि पे हमारी शुभकामनाएं आपके साथ है। …शुभ नवरात्रि");
    this.msgList.push("माँ दुर्गा आपको अपनी 9 भुजाओं से :बल , बुद्धि , ऐश्वर्या , सुख , स्वास्थ्य , शान्ति , यश , निरभीखता , सम्पन्नता , प्रदान करें। हैप्पी नवरात्रि।");
    this.msgList.push("नमो नमो दुर्गे सुख करनी. नमो नमो अम्बे दुःख हरनी.! जय माता दी। …शुभ नवरात्रि");
    this.msgList.push("नव दीप जलें , नव फूल खिलें , रोज़ माँ का आशिर्वाद मिले , इस नवरात्री आपको वो सब मिले जो आपका दिल चाहता है…शुभ नवरात्रि");
    this.msgList.push("मैंने तेरा नाम लेकर ही सारे काम किये है माँ, और लोग समझते है कि, बंदा बहुत किस्मत वाला है। …शुभ नवरात्रि");
    this.msgList.push("दशहरे की आपको, पूरे परिवार को बहुत-बहुत शुभकामनाएं एवं बधाई। दशहरा असत्य पर सत्य की विजय है। आप भी हर पथ पर विजयी हों, यही भगवान से हमारी मंगल कामना है।");
    this.msgList.push("असत्य पर सत्य की जीत के त्यौहार विजयदशमी की आपको और आपके परिवार को हार्दिक हार्दिक शुभकामनाएं… ईश्वर आपको नई ऊंचाइयां दे।");
    this.msgList.push("आप सभी को दशहरा के पावन पर्व की हार्दिक शुभकामनाएँ! मैं ईश्वर से प्रार्थना करता हूँ कि आप व आपका परिवार सदैव सुख समृद्ध खुशहाल रहे!");
    this.msgList.push("सुख, शान्ति एवम समृध्दि की मंगलमयी कामनाओं के साथ महानवमी और विजयदशमी की हार्दिक शुभकामनाएं !!");
  }

  ShareOnWhatsApp(item){
    this.socialSharing.shareViaWhatsApp( item, null, null)
      .then(()=> {
        console.log("WhatsApp message sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  SocialSharingLink(item){
    this.socialSharing.share(item, null, null, null)
      .then(()=> {
        console.log("social share sent");
      }).catch((error)=> {
        console.log(error);
      });
  }

  CopyMessage(item){
    try{
      this.clipboard.copy(item);
    }
    catch(e){

    }
  }

}
