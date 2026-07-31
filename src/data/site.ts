export interface SiteDetails {
  name: string;
  short: string;
  phone: string;
  phoneHref: string;
  email: string;
  web: string;
  address: string[];
  nestNotice: string;
  feeNotice: string;
}

export const site: SiteDetails = {
  name: "TitleIQ & Consultancy",
  short: "TitleIQ",
  phone: "06 870 3299",
  phoneHref: "tel:+6468703299",
  email: "amy@titleiq.co.nz",
  web: "www.titleiq.nz",
  address: ["211 Market Street South", "Hastings", "New Zealand"],
  nestNotice: "Conveyancing services are provided through Nest Legal and Conveyancing Limited.",
  feeNotice: "All fees are stated in New Zealand dollars and are plus GST and applicable disbursements unless stated otherwise. Fees remain subject to confirmation following review of the matter and the applicable Terms of Engagement."
};
