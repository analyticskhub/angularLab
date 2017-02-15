export interface urlType {
  type: string;
  url: string;
}

export interface locationObj {
  href: string;
  protocol: string;
  hostname: string;
  pathname: string;
  search: string;
  hash: string;
}

export interface datalayer {
  siteBrand?: string;
  siteName?: string;
  siteEnv?: string;
  siteSection?: string;
  dLayerVer?: string;
  siteDomain?: string;
  siteVersion?: string;
  siteSubSection?: string;
  siteSubSubSection?: string;
  siteExperience?: string;
  formIsSTP?: string;
  formVariant?: string;
  newFormName?: string;
  journeyType?: string;
  accountType?: string;
  businessType?: string;
  trackOnce?: string;
  pageType?: string;
  deviceOs?: string;
  fldActivityId?: string;
  fldActvityConfigId?: string;
  pageName?: string;
  prodDescription?: string;
  pageStep?: string;
  eventKey?: string;
  formStatus?: string;
  ordinalID?: string;
  userSuburb?: string;
  userState?: string;
  userPostCode?: string;
  promoCode?: string;
  conversionValue?: string;
  productCount?: string;
  retrievedApp?: string;
  resourceKind?: string;
  productID?: Object[];
  applicationStatus?: Object[];
  appReference?: Object[];
}

export interface contLoc {
  location: Object;
}

export interface prodArray {
  id?: string,
  family?: string,
  category?: string,
  subcategory?: string,
  name?: string,
  url?: string
}