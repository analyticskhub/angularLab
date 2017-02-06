import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

    digitalData = {
    "siteBrand": "wbc",
    "siteName": "oneclick",
    "siteSection": "cao",
    "siteSubSection": "",
    "siteEnv": "prod",
    "siteDomain": "www.westpac.com.au",
    "siteExperience": "mob",
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
}
