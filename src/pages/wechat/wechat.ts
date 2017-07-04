import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wechat',
  templateUrl: 'wechat.html'
})
export class WechatPage {
  chatList = [{
    id: 0,
    thumbnail: 'assets/img/avatar-samwise.jpg',
    name: '大前端部',
    detail: '[6条]邓钢: [链接]',
    timestamp: '晚上 8:43',
    isMute: true
  }, {
    id: 1,
    thumbnail: 'assets/img/avatar-ts-hamm.png',
    name: '真的篮球群',
    detail: '[13条]梅库子川: [链接]',
    timestamp: '晚上 9:43',
    isMute: false
  }, {
    id: 2,
    thumbnail: 'assets/img/avatar-ts-buzz.png',
    name: '龙叔狼人杀',
    detail: '[106条]龙叔: [链接]',
    timestamp: '晚上 10:43',
    isMute: true
  }];
  constructor(public navCtrl: NavController) {

  }

}
