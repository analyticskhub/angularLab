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

export interface siteVars {
  site_brand?: string;
  site_name?: string;
  site_env?: string;
  site_section?: string;
  dLayerVer?: string;
  site_domain?: string;
  site_version?: string;
  site_family?: string;
  site_subsection?: string;
  site_subsubsection?: string;

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