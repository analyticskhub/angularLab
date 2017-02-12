import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PlaygroundHomeComponent implements OnInit {

  constructor() { }

      pageTracked = false;

  nextStep = function(){
    this.pageTracked = true;
  }
    digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
    "defaultEnd": "-----------------------------",
    "formName": "Cons CC",
    "formType": "checkurl",
    "formIsSTP": "true",
    "formVariant": "na",
    "newFormName": "cc",
    "journeyType": "pub",
    "accountType": "na",
    "trackOnce": "true",
    "pageName": "your-details",
    "eventKey": "mob:wbc_oregon_app_cc_your-details",
    "pageStep": "start",
    "pageType": "application",
    "productID": [{
      "prod": "WBC03PL005",
      "qty": "1",
      "primaryProd": "true"
    }
    ]
  }
  dataLayer = JSON.stringify(this.digitalData, null, 4);

  ngOnInit() {
  }

}
