import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { contLoc } from '../model/oneclick.interface'
import { datalayer } from '../model/oneclick.interface'
import { locationObj } from '../model/oneclick.interface'

@Injectable()
export class OneclickService {


  constructor() { }
  step: string;
  form_options: any;
  dataLayer: Object = {
    'mockUpVersion': '0.1'
  };
  purgeDataLayer = function () {
    this.dataLayer = {};
  };
  contextUrl: string;
  commonVars: any;

  /*
  Utility functions
  */
  _window = function(): any {
  // return the native window obj
  return window;
}


setCommonVars(url: string, config: datalayer) {
  //declare all local variables here
  let el: HTMLAnchorElement,
    isWestpac: boolean,
    isProd: boolean,
    sectionArray: string[],
    contextLoc: contLoc,
    commonVars: datalayer = {
      'dLayerVer': '1.0'
    },
    otherVars: Object,
    deviceOS: string,
    pseudoLoc: locationObj,
    windowObj:any;


  //use the URL to create pseudo location vars
  el = document.createElement('a');
  el.href = url;
  console.info('el.href', el.href);
  pseudoLoc = {
    href: el.href,
    protocol: el.protocol,
    hostname: el.hostname,
    pathname: el.pathname,
    search: el.search,
    hash: el.hash
  };

  contextLoc = {
    location: pseudoLoc
  }
  console.info('contextloc', contextLoc)

  windowObj = this._window();

  // update window variable for s_code
  windowObj.testTracking = pseudoLoc;
  // update the s_code test object to use contextURl
  windowObj.w_wtT = pseudoLoc;
  windowObj.util.w_wtT = contextLoc;
  // set prod, host and domain info
  isWestpac = /westpac/i.test(pseudoLoc.hostname);
  isProd = /www.westpac.com.au/i.test(pseudoLoc.hostname);
  if (isWestpac) {
    commonVars.siteBrand = 'wbc';
    commonVars.siteName = 'oneclick';
  }
  if (isProd) {
    commonVars.siteEnv = 'prod';
  } else {
    commonVars.siteEnv = 'dev';
  }

  sectionArray = pseudoLoc.pathname.split('/');
  // set details from path
  commonVars.siteDomain = pseudoLoc.hostname;
  commonVars.siteVersion = 'oneclick.1.332.2';
  commonVars.siteSection = sectionArray[1];
  if (sectionArray[2]) {
    commonVars.siteSubSection = sectionArray[2];
  }

  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
    deviceOS = "Windows 7"
  }
  otherVars = {
    "siteExperience": "desktop",
    "formIsSTP": "true",
    "formVariant": config.formVariant,
    "newFormName": "cons:st", //newformName dict
    "journeyType": config.journeyType,
    "accountType": "single",
    //"businessType": "sole-trader",
    "XtrackOnce": "true",
    "userSuburb": config.userSuburb,
    "userState": config.userState,
    "userPostCode": config.userPostCode,
    "deviceOs": deviceOS,
    "fldActivityId": config.fldActivityId,
    "fldActvityConfigId": config.fldActvityConfigId,
    "eventKey": config.eventKey,
    "pageType": config.pageType,
    "pageStep": config.pageStep,
    "pageName": config.pageName,
    "prodDescription": config.prodDescription
  }
  commonVars = Object.assign(commonVars, otherVars)
  return commonVars;

}
//createDataLayer called in component 
createDataLayer(step: string, url: string) {
  let current_step = step,
    context_url = url;
    let _windowObj = this._window();

  switch (current_step) {

    case 'welcome':
      this.purgeDataLayer();
      let common_vars: Object,
        config: Object;
      //console.info(this.step)
      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageStep": "welcome",
        "pageType": "application",
        "pageName": "welcome"
      }

      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars)
      //TODO
      break;
    case 'CustomerDetails':
      this.purgeDataLayer();
      //console.info(this.step)
      var user_vars: any,
        product_vars: any;

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "fldActivityId": "9832111",
        "fldActvityConfigId": "abcxyz999",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageStep": "start",
        "pageType": "application",
        "pageName": "customer-details",
        "userSuburb": "newtown",
        "userState": "nsw",
        "userPostCode": "2201",
      }

      product_vars = {
        prodDescription: "choice",
        "productID": [
          {
            "prod": "13d46777ec304eadb673f30ed0487f99",
            "family": "personal",
            "category": "bank-accounts",
            "subcategory": "transaction",
            "name": "choice",
            "qty": "1"
          }
        ]
      }
      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars, product_vars)
      //TODO
      break;
    case 'IdentificationRequired':
      this.purgeDataLayer();
      //console.info(this.step)
      var user_vars: any;

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageType": "application",
        "pageName": "id-verification",
        prodDescription: "choice",
      }

      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars)
      break;
    case 'Review':
      this.purgeDataLayer();
      //console.info(this.step)
      var user_vars: any;

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageType": "application",
        "pageName": "review",
        prodDescription: "choice",
      }

      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars)
      //TODO
      break;
    case 'Progress':
      this.purgeDataLayer();
      //console.info(this.step)
      var user_vars: any;

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageType": "application",
        "pageName": "progress",
        prodDescription: "choice",
      }

      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars)
      //TODO
      break;
    case 'Thankyou':
      this.purgeDataLayer();
      //console.info(this.step)
      var user_vars: any,
        product_vars: any,
        form_vars: Object;

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "fldActivityId": "9833344",
        "fldActvityConfigId": "abcxyz999",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageStep": "complete",
        "pageType": "application",
        "pageName": "thank-you",
      }

      product_vars = {
        "prodDescription": "choice",
        "productID": [
          {
            "prod": "13d46777ec304eadb673f30ed0487f99",
            "family": "personal",
            "category": "bank-accounts",
            "subcategory": "transaction",
            "name": "choice",
            "qty": "1",
          }
        ]
      }

      form_vars = {
        "formStatus": "approved",
        "promoCode": "323232323ass",
        "conversionValue": "1500",
        "productCount": "1",
        "retrievedApp": "true",
        "resourceKind": "value",
        "appReference": [{
          "prod": "13d46777ec304eadb673f30ed0487f99",
          "Id": "ebabasdfsdfasdfasdf34343"
        }
        ],
        "applicationStatus": [{ // on complete && only if STP form
          "accountStatus": "opened",
          "profileStatus": "created",
          "verificationStatus": "idv",
          "exceptionCode": "0001"
        }
        ],

      }
      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars, form_vars, product_vars)
      //TODO
      break;
  }
  return this.dataLayer;
}

}
