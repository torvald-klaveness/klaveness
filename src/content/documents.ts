/** Documents hosted by Klaveness on HubSpot (same files as on the current site). */
const HUB = "https://4605420.fs1.hubspotusercontent-na1.net/hubfs/4605420";

export type DocumentLink = {
  title: string;
  href: string;
  /** Shown next to the link, e.g. "3.3 MB". */
  size: string;
};

export const annualReports: (DocumentLink & { year: number })[] = [
  {
    year: 2025,
    title: "Torvald Klaveness Annual Report 2025",
    size: "3.3 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Torvald%20Klaveness%20Annual%20Report%202025.pdf`,
  },
  {
    year: 2024,
    title: "Torvald Klaveness Annual Report 2024",
    size: "41.1 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Torvald%20Klaveness%20Annual%20Report%20-%202024.pdf`,
  },
  {
    year: 2023,
    title: "Torvald Klaveness Annual Report 2023",
    size: "3.5 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Torvald%20Klaveness%20Annual%20Report%202023.pdf`,
  },
  {
    year: 2022,
    title: "Torvald Klaveness Annual Report 2022",
    size: "1.8 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Torvald%20Klaveness%20Annual%20Report%202022.pdf`,
  },
  {
    year: 2021,
    title: "Torvald Klaveness Annual Report 2021",
    size: "6.9 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Torvald%20Klaveness%20Annual%20Report%202021.pdf`,
  },
  {
    year: 2020,
    title: "Torvald Klaveness Annual Report 2020",
    size: "0.7 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Klaveness%20Annual%20Report%202020.pdf`,
  },
  {
    year: 2019,
    title: "Torvald Klaveness Annual Report 2019",
    size: "3.4 MB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Annual%20Report%202019.pdf`,
  },
];

export const complianceDocuments = {
  codeOfConduct: {
    title: "Code of Conduct",
    size: "3.0 MB",
    href: `${HUB}/Torvald%20Klaveness%20Code%20of%20Conduct%202022.pdf`,
  },
  counterpartyCode: {
    title: "Counterparty Code of Conduct",
    size: "99 KB",
    href: `${HUB}/Klaveness%20reports%20and%20presentations/Klaveness%20Counterparty%20Code%20of%20Conduct%20(CCoC).pdf`,
  },
  transparencyAct: {
    title: "Transparency Act 2025",
    size: "388 KB",
    href: `${HUB}/Transparency%20act/Transparency%20Act%202025.pdf`,
  },
} satisfies Record<string, DocumentLink>;

/** External whistleblowing portal (Mitt Varsel), as on the current site. */
export const whistleblowingPortal =
  "https://portal.mittvarsel.no/skjema/torvald-klaveness--whistleblowing/bolZARVP9vFtsSnN.918?lang=en";
