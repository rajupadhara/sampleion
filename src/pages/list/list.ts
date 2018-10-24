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
    this.msgList.push("दीपक का प्रकाश हर पल आपके जीवन में नई रोशनी लाए, बस यही शुभकामना है आपके लिए इस दीपावली में। ... शुभ दीपावली ...");
    this.msgList.push("दीपावली में दीपों का दीदार हो, और खुशियों की बौछार हो। ... शुभ दीपावली! ...");
    this.msgList.push("झिलमिलाते दीपों की रोशनी से प्रकाशित ये दीपावली आपके घर में सुख समृद्धि और आशीर्वाद ले कर आए ... शुभ दीपावली ...");
    this.msgList.push("आपको आशीर्वाद मिले गणेश से विद्या मिले सरस्वती से दौलत मिले लक्ष्मी से प्यार मिले सब से दिवाली के अवसर पर यही दुआ है दिल से ... हैप्पी दिवाली ...");
    this.msgList.push("दीपावली है पर्व दीपों का, खुशियों और आनंद का, उजाला और उल्लास का दीपावली की हार्दिक शुभकामनाएं!");
    this.msgList.push("दिवाली में आपके यहां धनराशि की बरसात हो, माँ लक्ष्मी का वास हो, और संकटों का नाश हो। आप हर दिल पर राज करें और आप के घर में शांति का वास हो। ... हैप्पी दीपावली ...");
    this.msgList.push("कुमकुम भरे कदमों से लक्ष्मीजी आपके द्वार, सुख संपत्ति मिले आपको अपार दिवाली की शुभकामनाएं करें स्वीकार विश यू हैप्पी दिवाली!");
    this.msgList.push("चलो आज फिर एक दीप जलाया जाये रूठे हुए को फिर मनाया जाये पोंछ कर आँखों में छिपी उदासी को जख्मो पे मलहम लगाया जाये ... शुभ दीपावली ...");
    this.msgList.push("नया साल, नयी उम्मीदें, नए विचार और नयी शुरुवात भगवन करें आपकी हर दुआ हकीकत बन जाये!  ― नया साल आपको मुबारक हो!");
    this.msgList.push("हर बार जब भी नया साल आता हैं, हम दुआ करते हैं कि आपको इस साल भी वह सब मिले जो आपका दिल चाहता हैं. ― नया साल आपको मुबारक हो!");
    this.msgList.push("भगवान करे ये साल आपको रास आ जाये; जिसे आप चाहते हो, वो आपके पास आ जाये! आप नए साल में कुंवारे न रहे; आपका रिश्ता लेकर आपकी सास आ जाये! नव वर्ष की हार्दिक शुभकामनायें!");
    this.msgList.push("भूल जाओ बीते हुए कल कोदिल में बसा लो आने वाले कल को.मुस्कुराओ चाहे जो भी हो पलखुशियाँ लेकर आयेगा आने वाला कल । नए साल की शुभकामनाये ।");
    this.msgList.push("बीते साल को विदा इस कदर करते है, जो नही किया अब तक वो भी कर गुजरते है,  नया साल आने की खुशियाँ तो सब मनाते है, चलो हम इस बार बीते साल की यादों का जश्न मनाते है. ― नव वर्ष की हार्दिक शुभकामनायें!");
    this.msgList.push("हम आपके दिल में रहते हैं, सारे दर्द आपके सहते हैं, कोई हम से पहले विश न कर दे आपको, इस लिए सबसे पहले हैप्पी न्यू ईयर कहते हैं.");
    this.msgList.push("आपकी आँखों में सजे है जो भी सपने, और दिल में छुपी है जो भी अभिलाषाएं! यह नया वर्ष उन्हें सच कर जाए; आप के लिए यही है हमारी शुभकामनायें!");
    this.msgList.push("आपकी आँखों में सजे है जो भी सपने, और दिल में छुपी है जो भी अभिलाषाएं! यह नया वर्ष उन्हें सच कर जाए; आप के लिए यही है हमारी शुभकामनायें!");
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
