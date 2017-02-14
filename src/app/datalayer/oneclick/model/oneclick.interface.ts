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

export interface sVars {
  siteBrand?: string;
  siteName?: string;
  siteEnv?: string;
  siteSection?: string;
  dLayerVer?: string;
  siteDomain?: string;
  siteVersion?: string;
  siteSubSection?: string;
  siteSubSubSection?: string;
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