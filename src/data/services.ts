import { site } from "./site";

export interface Service {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  nav: string;
  items: string[];
  cta: string;
  note?: string;
}

export const services: Service[] = [
  {
    slug: "/services/property-conveyancing/",
    title: "Property Conveyancing",
    short: "Conveyancing",
    blurb: "Experienced support for residential and commercial purchases, sales, refinancing and selected business transactions. You receive clear advice, proactive communication and fees agreed in advance.",
    nav: "Purchases, sales, refinancing and commercial transactions.",
    items: ["Residential purchases and sales", "Commercial property transactions", "Refinancing", "Trust and company ownership", "Selected business acquisitions"],
    cta: "View Conveyancing Services",
    note: site.nestNotice
  },
  {
    slug: "/services/property-development-subdivisions/",
    title: "Property Development & Subdivisions",
    short: "Development & Subdivisions",
    blurb: "Specialist legal support for subdivisions, boundary adjustments, freeholding projects, easements, covenants and staged developments.",
    nav: "Subdivisions, freeholding, easements and staged projects.",
    items: ["Urban and rural subdivisions", "Boundary adjustments", "Cross-lease and unit title freeholding", "Easements and covenants", "Owners' associations", "Multi-stage developments"],
    cta: "Explore Development Services"
  },
  {
    slug: "/services/remote-legal-support/",
    title: "Remote Legal Support",
    short: "Remote Support",
    blurb: "Flexible legal and operational assistance for law firms, property developers and finance companies, available for one-off assignments or ongoing support.",
    nav: "Additional capacity for firms, developers and lenders.",
    items: ["Leasing documentation", "Document drafting", "Policies and procedures", "Finance and securities support", "Project-based legal assistance"],
    cta: "View Remote Support"
  }
];
