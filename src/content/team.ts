/*
 * Team directory from the current klaveness.com/team page (parsed from its
 * content). Edit here to add, move or remove people.
 */

export type TeamPerson = {
  name: string;
  role: string;
  office: string | null;
  email: string | null;
};

export type TeamGroup = {
  /** Sub-team heading inside a department, e.g. "Port Operations". */
  title: string | null;
  emails: string[];
  people: TeamPerson[];
};

export type TeamDepartment = { title: string; groups: TeamGroup[] };

export type TeamSection = { id: string; title: string; departments: TeamDepartment[] };

export const teamSections: TeamSection[] = [
  {
    id: "executive-committee",
    title: "Executive Committee",
    departments: [
      {
        title: "",
        groups: [
          {
            title: null,
            emails: [],
            people: [
              {
                name: "Ernst Meyer",
                office: "Oslo",
                role: "Chief Executive Officer",
                email: null,
              },
              {
                name: "Trine Hellum",
                office: "Oslo",
                role: "Chief HR Officer",
                email: null,
              },
              {
                name: "Fabian Flaaten",
                office: "Oslo",
                role: "Chief Financial Officer",
                email: null,
              },
              {
                name: "Michael Jørgensen",
                office: "Singapore",
                role: "Executive Vice President, Head of Dry Bulk",
                email: null,
              },
              {
                name: "Ingrid Kylstad",
                office: "Oslo",
                role: "Managing Director, Klaveness Digital",
                email: null,
              },
              {
                name: "Engebret Dahm",
                office: "Oslo",
                role: "Chief Executive Officer, Klaveness Combination Carriers ASA",
                email: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "holding-management-team",
    title: "Holding Management Team",
    departments: [
      {
        title: "",
        groups: [
          {
            title: null,
            emails: [],
            people: [
              {
                name: "Ernst Meyer",
                office: "Oslo",
                role: "Chief Executive Officer",
                email: null,
              },
              {
                name: "Nadia Næss",
                office: "Oslo",
                role: "Chief Financial Investment Officer",
                email: null,
              },
              {
                name: "Fabian Flaaten",
                office: "Oslo",
                role: "Chief Financial Officer",
                email: null,
              },
              {
                name: "Henrik Semb Rønningen",
                office: "Oslo",
                role: "Chief Legal and Compliance Officer",
                email: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "corporate-functions",
    title: "Corporate Functions",
    departments: [
      {
        title: "HR and Administration",
        groups: [
          {
            title: null,
            emails: ["administration@klaveness.com"],
            people: [
              {
                name: "Trine Hellum",
                office: "Oslo",
                role: "Chief HR Officer",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Legal",
        groups: [
          {
            title: null,
            emails: ["legal@klaveness.com"],
            people: [
              {
                name: "Henrik Semb Rønningen",
                office: "Oslo",
                role: "Chief Legal and Compliance Officer",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Communications",
        groups: [
          {
            title: null,
            emails: ["communications@klaveness.com"],
            people: [
              {
                name: "Haley Zerwas Kerek",
                office: "Oslo",
                role: "Head of Corporate Communications",
                email: null,
              },
              {
                name: "Daniel Middleton",
                office: "Oslo",
                role: "Marketing and Communications Manager",
                email: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "klaveness-dry-bulk",
    title: "Klaveness Dry Bulk",
    departments: [
      {
        title: "Management",
        groups: [
          {
            title: null,
            emails: [],
            people: [
              {
                name: "Michael Jørgensen",
                office: "Singapore",
                role: "Executive Vice President, Head of Dry Bulk",
                email: null,
              },
              {
                name: "Jiten Mehra",
                office: "Singapore",
                role: "Vice President, Head of Dry Bulk Operations",
                email: null,
              },
              {
                name: "Peter Bekkestad",
                office: "Dubai",
                role: "Vice President, Head of Financial Trading and Bunker",
                email: null,
              },
              {
                name: "Petter Markussen",
                office: "Oslo",
                role: "Vice President, Head of Performance, Risk and Finance",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Baumarine Pool",
        groups: [
          {
            title: null,
            emails: ["pool@klaveness.com"],
            people: [
              {
                name: "Francisco Gomez",
                office: "Tokyo",
                role: "Head of Baumarine",
                email: null,
              },
              {
                name: "Carl-Martin Graf",
                office: "Oslo",
                role: "Vice President, Head of Atlantic C&T",
                email: null,
              },
              {
                name: "Ignacio Pizarro",
                office: "Dubai",
                role: "Vice President, Global Head of Partner Relations",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Chartering and Trading",
        groups: [
          {
            title: null,
            emails: ["pmax@klaveness.com"],
            people: [
              {
                name: "Eivind Lyford",
                office: "Oslo",
                role: "Vice President, Head of Global Tonnage Team and Head of Klaveness Chartering Atlantic",
                email: null,
              },
              {
                name: "Georg M. Steen Aarheim",
                office: "Oslo",
                role: "Senior Chartering Manager",
                email: null,
              },
              {
                name: "Clifford Saldanha",
                office: "Dubai",
                role: "Chartering Manager",
                email: null,
              },
              {
                name: "Hyrjeta Miraka",
                office: "Dubai",
                role: "Chartering Manager",
                email: null,
              },
              {
                name: "Andreas H. Kristensen",
                office: "Dubai",
                role: "Chartering Manager - Dry Bulk",
                email: null,
              },
              {
                name: "Sofiana Sofian",
                office: "Singapore",
                role: "Senior Chartering Manager, Head of Pacific Desk",
                email: null,
              },
              {
                name: "Lio Yu Feng",
                office: "Singapore",
                role: "Senior Chartering Manager, Head of Pacific Trading",
                email: null,
              },
              {
                name: "Leon Lim",
                office: "Singapore",
                role: "Senior Chartering Manager, Head of Backhaul Book",
                email: null,
              },
              {
                name: "Soren S. Andersen",
                office: "Singapore",
                role: "Commercial Manager",
                email: null,
              },
              {
                name: "Shunya Hoki",
                office: "Singapore",
                role: "Chartering Manager",
                email: null,
              },
              {
                name: "Junji Aratani",
                office: "Tokyo",
                role: "Chartering Manager",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Ship Operations",
        groups: [
          {
            title: null,
            emails: ["operations@klaveness.com"],
            people: [
              {
                name: "Aylin Coskun",
                office: "Singapore",
                role: "Senior Operations Manager, Head of Partner Success, Pool Operations",
                email: null,
              },
              {
                name: "Ankur Mitra",
                office: "Singapore",
                role: "Senior Operations Manager",
                email: null,
              },
              {
                name: "Arif Nazar",
                office: "Dubai",
                role: "General Manager / Regional Operations Manager - Indian Ocean & Atlantic",
                email: null,
              },
              {
                name: "Prakrathi Shetty",
                office: "Dubai",
                role: "Operations Manager",
                email: null,
              },
              {
                name: "Ravi Kumar Arora",
                office: "Dubai",
                role: "Operations Manager",
                email: null,
              },
              {
                name: "Mazyar Ahmad",
                office: "Oslo",
                role: "Senior Operations Manager",
                email: null,
              },
              {
                name: "Sycha Krister F. Tuñacao",
                office: "Manila",
                role: "Operations Manager",
                email: null,
              },
              {
                name: "Ma. Cherry May A. Amaro",
                office: "Manila",
                role: "Operations Manager",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Operations Support",
        groups: [
          {
            title: "Port Operations",
            emails: [],
            people: [
              {
                name: "Sandy Guan",
                office: "China",
                role: "Port Captain, Chief Representative - China",
                email: null,
              },
            ],
          },
          {
            title: "Freight and Laytime",
            emails: ["cargoops@klaveness.com"],
            people: [
              {
                name: "Stella Kong",
                office: "Singapore",
                role: "Freight & Laytime Manager",
                email: null,
              },
              {
                name: "Selene Chua",
                office: "Singapore",
                role: "Freight & Laytime Manager",
                email: null,
              },
            ],
          },
          {
            title: "Marine Accounting",
            emails: ["marine.accounting@klaveness.com"],
            people: [],
          },
        ],
      },
      {
        title: "Financial Trading and Bunker",
        groups: [
          {
            title: null,
            emails: ["mb.bunkers@klaveness.com"],
            people: [
              {
                name: "Jakob Fabricius",
                office: "Oslo",
                role: "Senior Manager, Head of Hedging and Bunker Europe and Americas",
                email: null,
              },
              {
                name: "Anders Klingsholm",
                office: "Oslo",
                role: "FFA Analyst / Trade Executer",
                email: null,
              },
              {
                name: "Kristian S. Hauff",
                office: "Oslo",
                role: "Market Analyst",
                email: null,
              },
              {
                name: "Peter Bekkestad",
                office: "Dubai",
                role: "Vice President, Head of Financial Trading and Bunker",
                email: null,
              },
              {
                name: "Rasmus Holm Jensen",
                office: "Singapore",
                role: "Senior Bunker Manager",
                email: null,
              },
              {
                name: "Jakob Heber Norum",
                office: "Dubai",
                role: "Market Analyst",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "Performance, Risk and Finance",
        groups: [
          {
            title: null,
            emails: [],
            people: [
              {
                name: "Petter Markussen",
                office: "Oslo",
                role: "Vice President, Head of Performance, Risk and Finance",
                email: "midoffice@klaveness.com",
              },
              {
                name: "Torodd Eeg-Olsen",
                office: "Oslo",
                role: "Vice President, Dry Bulk Treasury and Risk",
                email: "finance@klaveness.com",
              },
            ],
          },
        ],
      },
      {
        title: "Market Manager",
        groups: [
          {
            title: "Product",
            emails: [],
            people: [
              {
                name: "Haruki Chua",
                office: "Tokyo",
                role: "General Manager",
                email: null,
              },
            ],
          },
          {
            title: "Research",
            emails: [],
            people: [
              {
                name: "Alexey Piskun",
                office: "Oslo",
                role: "Data Scientist",
                email: null,
              },
            ],
          },
        ],
      },
      {
        title: "QuantBook",
        groups: [
          {
            title: null,
            emails: [],
            people: [
              {
                name: "Ragnhild Noven",
                office: "Oslo",
                role: "Senior Quantitative Researcher",
                email: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "klaveness-shore-services",
    title: "Klaveness Shore Services, Inc. (KSSI)",
    departments: [
      {
        title: "Management",
        groups: [
          {
            title: null,
            emails: ["admin-mnl@klaveness.com"],
            people: [
              {
                name: "Chona L. Villanos",
                office: "Manila",
                role: "President",
                email: null,
              },
              {
                name: "Sergio R. Lomenario",
                office: "Manila",
                role: "Finance Head",
                email: null,
              },
              {
                name: "Randy Magnaye",
                office: "Manila",
                role: "HSEQ and Compliance Manager/Data Protection Officer",
                email: null,
              },
              {
                name: "Jacquelou K. Madueño",
                office: "Manila",
                role: "Human Resources and Administration Manager",
                email: null,
              },
              {
                name: "Geovanni Tacla",
                office: "Manila",
                role: "Freight, Laytime and Marine Accounting Manager",
                email: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
