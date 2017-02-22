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
    'mockUpVersion': 'demo_0.1'
  };
  purgeDataLayer = function () {
    this.dataLayer = {};
  };
  contextUrl: string;
  commonVars: any;
  primaryProduct:any;
  crossSellProduct:any;

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
    "mockUpVersion": "demo_0.1",
    "analyticsTrackType" : "page",
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
    "eventKey": config.eventKey,
    "pageType": config.pageType,
    "pageStep": config.pageStep,
    "pageName": config.pageName,
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
      var mktg_vars: any,
        product_vars: any;

      mktg_vars = {
        "partnerTags": {
          "doubleclick": [{
            "activityId": "4472919"
          }
          ],
          "rocketFuel": [{
            "rfId": "989899"
          }
          ]
        }
      }

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageStep": "start",
        "pageType": "application",
        "pageName": "customer-details",
        "userSuburb": "newtown",
        "userState": "nsw",
        "userPostCode": "2201"
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
      this.primaryProduct = product_vars.productID[0];
      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars, mktg_vars, product_vars)
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
        "pageName": "id-verification"
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
        "pageName": "review"
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
        "pageName": "progress"
      }

      common_vars = this.setCommonVars(context_url, config);
      this.dataLayer = Object.assign(this.dataLayer, common_vars)
      //TODO
      break;
    case 'Thankyou':
      this.purgeDataLayer();
      //console.info(this.step)
      var mktg_vars: any,
        product_vars: any,
        form_vars: Object;


      mktg_vars = {
        "partnerTags": {
          "doubleclick": [{
            "activityId": "4472919,4472114"
          }
          ],
          "rocketFuel": [{
            "rfId": "989899"
          }
          ]
        }
      }

      config = {
        "formVariant": "activate",
        "journeyType": "pub",
        "eventKey": "wbc:application_oneclick_cons:cc_" + current_step,
        "pageStep": "complete",
        "pageType": "application",
        "pageName": "thank-you"
      }

      product_vars = {
        "productID": [
          {
            "prod": "13d46777ec304eadb673f30ed0487f99",
            "family": "personal",
            "category": "bank-accounts",
            "subcategory": "transaction",
            "name": "choice",
            "qty": "1",
            "merch" : "options=eStatements"
          },
          {
            "prod": "6ae599b53f774c779adf7686b95e9672",
            "family": "personal",
            "category": "bank-accounts",
            "subcategory": "savings-accounts",
            "name": "esaver",
            "qty": "1",
            "crossSell" : "true"
          }
        ]
      }

      form_vars = {
        "formStatus": "approved",
        "productCount": "1",
        "retrievedApp": "true",
        "appReference": [{
          "prod": "13d46777ec304eadb673f30ed0487f99",
          "Id": "ebabasdfsdfasdfasdf34343"
        },
        {
          "prod": "6ae599b53f774c779adf7686b95e9672",
          "Id": "yyzdfdsfs8788999wwesfd"
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
      this.dataLayer = Object.assign(this.dataLayer, common_vars, form_vars, mktg_vars, product_vars)
      //TODO
      break;
  }
  return this.dataLayer;
}

/*
Step1: Remove analytics tagss
Step1b: Remove/comment the wa function to trigger tracking.
Instead create a window json object and update it throughout. 

BankWowServices.factory("Analytics", ["config", "DeviceDetection", "$rootScope", "CookieFactory", "SessionManager", function (a, b, c, d, e) {
			var f;
			return {
				trackPageView : function (b, d, e, f, g) {
					var h;
					h = {
						trackDedupe : "true",
						formName : f ? "migrant banking" : "savings transaction",
						formType : e ? "stpbanker" : "stp",
						pageType : "application"
					},
					h = "55-retired" === c.primaryAccountType && d.formStatus ? this.makeThankYouPageRequest(d, h) : angular.extend({}, h, d),
					"wa" in window && a.ANALYTICS_ENABLED ? window.wa("page", h) : a.DEBUG && console && console.info
          
          // instead of checking wa function and triggering the wa function with object created (h), pass it to window scope object (window.pageDetails)
          //"pageDetails" in window && a.ANALYTICS_ENABLED ? window.pageDetails = h : a.DEBUG && console && console.info
          

				},
				getReferredTransactionId : function (a) {
					if (a.transactionID)
						f = a.transactionID;
					else {
						var b = d.read("WestpacID"),
						c = new Date,
						e = 1 === c.getDate().toString().length ? "0" + c.getDate() : c.getDate(),
						g = 1 === (c.getMonth() + 1).toString().length ? "0" + (c.getMonth() + 1) : c.getMonth() + 1,
						h = c.getFullYear(),
						i = c.getHours(),
						j = c.getMinutes(),
						k = h + "" + g + e + " " + i + ":" + j;
						f = void 0 === b ? "[CID:" + k + "]" : "[CID:" + b + "-" + k + "]"
					}
					return f
				},
				makeThankYouPageRequest : function (a, b) {
					return a.exceptionCode || (a.exceptionCode = 1001),
					"DEEMING" === a.accountType && angular.extend(b, {
						pageName : a.pageName,
						pageStep : a.pageStep,
						productID : [a.productID],
						transactionID : this.getReferredTransactionId(a),
						formStatus : a.formStatus,
						formCompleteStatus : [{
								accountStatus : this.getAccountStatus(a.referred, a.exceptionType),
								profileStatus : this.getProfileStatus(a.referred, a.exceptionType),
								verificationStatus : a.verificationStatus,
								exceptionCode : a.exceptionType
							}
						]
					}),
					b
				},
				getAccountStatus : function (a, b) {
					return void 0 === a || null == a ? "opened" : "not_opened"
				},
				getProfileStatus : function (a, b) {
					return void 0 === a || null === a ? "created" : "not_created"
				}
			}
		}
    */

    /*
    Step2: Remove Marketing Tags in oneclick
    Comment/remove the below service 
    
BankWowServices.factory("PostClickTracking", ["$cookieStore", "config", "DeviceDetection", "ipCookie", "$filter", function (a, b, c, d, e) {
			return {
				trackPageView : function (a, f, g, h, i) {
					void 0 === i && (i = ""),
					void 0 === g && (g = !1);
					var j = "",
					k = "",
					l = g ? "WBG_Bank_Accounts_Choice/WBG_Bank_Accounts_Esaver" : "WBG_Bank_Accounts_Choice";
					if ("choice" === f)
						g === !1 ? (k = h ? "M717726958591" : "717726958591",
							l = "WBG_Bank_Accounts_Choice") : (k = h ? "M551176195931" : "551176195931",
							l = "WBG_Bank_Accounts_Choice_eSaver");
					else if ("rewardsaver" === f)
						g === !1 ? (k = "455506231748",
							l = "WBG_Bank_Accounts_Reward_Saver") : (k = "115246601297",
							l = "WBG_Bank_Accounts_Choice_Reward_Saver_Choice");
					else {
						if ("esaver" !== f)
							return;
						k = "966942816244",
						l = "WBG_Bank_Accounts_Choice_eSaver"
					}
					var m,
					n;
					if (c.isMobile())
						if ("Welcome" === a)
							m = b.TrackingId_WelcomePage_Mobile;
						else {
							if ("Thankyou" !== a)
								return;
							m = b.TrackingId_ThankyouPage_Mobile
						}
					else if ("Welcome" === a)
						m = b.TrackingId_WelcomePage_Desktop;
					else {
						if ("Thankyou" !== a)
							return;
						m = b.TrackingId_ThankyouPage_Desktop
					}
					n = d("WestpacID");
					var o = "";
					if (o = n ? n + e("date")(new Date, "yyyyMMddHHmmss") : e("date")(new Date, "yyyyMMddHHmmss"),
						b.POSTCLICK_TRACKING_ENABLED && m) {
						var p = b.POSTCLICK_TRACKING_URL.replace(/{trackingId}/gi, m).replace(/{promoCode}/gi, j).replace(/{applicationId}/gi, o).replace(/{productId}/gi, k).replace(/{productDescription}/gi, l).replace(/{decision}/gi, i),
						q = '<img class="postClickPixel" height="0" width="0" src="' + p + '"/>';
						$(q).appendTo("body")
					}
				}
			}
		}
	])

    */
}
