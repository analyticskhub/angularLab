import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import {contLoc} from '../model/oneclick.interface'
import {siteVars} from '../model/oneclick.interface'
import {locationObj} from '../model/oneclick.interface'

@Injectable()
export class OneclickService {


  constructor() { }
  step:string;
  dataLayer: Object = {
    'mockUpVersion': '0.1'
  };
  contextUrl: string;
  commonVars: any;


  setCommonVars(url: string) {
    let el: HTMLAnchorElement,
      isWestpac: boolean,
      isProd: boolean,
      sectionArray: string[],
      contextLoc: contLoc,
      siteVars: siteVars = {
        'dLayerVer': '1.0'
      },
      pseudoLoc: locationObj;

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

    // update window variable for s_code
    //window.testTracking = contextLoc;
    // update the s_code test object to use contextURl
    //window.s.w_wtT = contextLoc;
    // set prod, host and domain info
    isWestpac = /westpac/i.test(pseudoLoc.hostname);
    isProd = /www.westpac.com.au/i.test(pseudoLoc.hostname);
    if (isWestpac) {
      siteVars.site_brand = 'wbc';
      siteVars.site_name = 'wbc:www';
    }
    if (isProd) {
      siteVars.site_env = 'prod';
    } else {
      siteVars.site_env = 'dev';
    }

    sectionArray = pseudoLoc.pathname.split('/');
    // set details from path
    siteVars.site_domain = pseudoLoc.hostname;
    siteVars.site_version = 'aem.1.332.2';
    siteVars.site_family = sectionArray[1];
    if (sectionArray[2]) {
      siteVars.site_section = sectionArray[2];
    }
    return siteVars;

  }
    //createDataLayer called in component 
  createDataLayer(step:string, url:string) {
    this.step = step;
    this.contextUrl = url;

    switch (this.step) {

      case 'welcome':

        console.info(this.step)
        this.dataLayer = this.setCommonVars(this.contextUrl);
        //TODO
        break;
    }
    return this.dataLayer;
  }

}
