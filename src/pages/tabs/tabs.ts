import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { WechatPage } from '../wechat/wechat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WechatPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
