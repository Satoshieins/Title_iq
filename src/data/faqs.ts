import { site } from "./site";

export interface FAQ { question: string; answer: string; }

export const faqs: FAQ[] = [
  { question: "Are fees inclusive of GST?", answer: "No. All fees shown are exclusive of GST. GST is added to the final invoice at the prevailing rate." },
  { question: "What are disbursements?", answer: "Disbursements are third-party costs paid on your behalf as part of your matter — for example LINZ search and registration fees, or a PPSR search. They are charged in addition to the professional fee and are itemised on your invoice." },
  { question: "When will I receive a final fee?", answer: "An indicative fee is confirmed once the matter has been reviewed and the scope is understood, normally at the point of engagement. The final invoice reflects that scope plus any disbursements and GST." },
  { question: "Are subdivision fees fixed?", answer: "Subdivision and development work is quoted individually. Wherever possible a tailored fee proposal is provided in advance, based on the number of titles, structure, staging and coordination required." },
  { question: "Can additional work affect the quoted fee?", answer: "Yes. If the scope changes materially — for example an unexpected title issue, additional documentation or extra parties — we will discuss the effect on the fee with you before that work is undertaken." },
  { question: "Who provides the conveyancing services?", answer: `${site.nestNotice} TitleIQ & Consultancy provides property development, subdivision and consultancy services.` }
];
