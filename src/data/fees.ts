export interface FeeGroup {
  title: string;
  rows: [string, string][];
  extraLabel?: string;
  extra?: [string, string][];
}

export const fees: FeeGroup[] = [
  { title: "Purchase", rows: [["Purchase — no mortgage", "$1,400"], ["Purchase — trading bank mortgage", "$1,600"], ["Purchase — non-trading bank mortgage", "$1,800"]], extraLabel: "Additional requirements", extra: [["Unit title", "+$350"], ["Trust or company", "+$250"], ["KiwiSaver application", "+$175 per application"]] },
  { title: "Sale", rows: [["Sale — no mortgage", "$1,100"], ["Sale — one mortgage discharge", "$1,300"], ["Sale — two mortgage discharges", "$1,350"]], extraLabel: "Additional requirements", extra: [["Unit title", "+$250"], ["Trust or company", "+$250"]] },
  { title: "Refinance", rows: [["Refinance", "$750"], ["Unit title", "+$350"], ["Trust or company", "+$250"]] },
  { title: "LINZ charges", rows: [["Search fee, per title", "$8"], ["Registration, per instrument", "$122"], ["Guaranteed search", "$8"], ["Caveat", "$130"]] },
  { title: "Other charges", rows: [["Hourly rate", "$250 per hour"], ["Office charge", "$115"], ["PPSR search", "$6"]] }
];
