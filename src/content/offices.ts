export type Office = {
  city: string;
  country: string;
  entity: string;
  address: string;
  lat: number;
  lon: number;
  headquarters?: boolean;
  /** IANA time zone, for the live local time on the Dry Bulk map. */
  timeZone: string;
  /** Which side of the marker the label sits on, to avoid overlaps. */
  labelSide: "left" | "right";
  /** Label side on the Dry Bulk map, where labels also carry the local time. */
  timeLabelSide?: "left" | "right";
};

export const offices: Office[] = [
  {
    city: "Oslo",
    timeZone: "Europe/Oslo",
    country: "Norway",
    entity: "Torvald Klaveness — Headquarters",
    address: "Drammensveien 260, 0283 Oslo",
    lat: 59.91,
    lon: 10.75,
    headquarters: true,
    labelSide: "right",
  },
  {
    city: "Dubai",
    timeZone: "Asia/Dubai",
    country: "United Arab Emirates",
    entity: "Klaveness Asia Pte. Ltd. (FZ Branch)",
    address: "Saba Tower 1, Jumeirah Lake Towers",
    lat: 25.07,
    lon: 55.14,
    labelSide: "left",
  },
  {
    city: "Singapore",
    timeZone: "Asia/Singapore",
    country: "Singapore",
    entity: "Klaveness Asia Pte. Ltd.",
    address: "9 Raffles Place, Republic Plaza",
    lat: 1.28,
    lon: 103.85,
    labelSide: "left",
  },
  {
    city: "Manila",
    timeZone: "Asia/Manila",
    country: "Philippines",
    entity: "Klaveness Shore Services Inc.",
    address: "FiveE-com Center, Pasay City",
    lat: 14.54,
    lon: 120.98,
    labelSide: "right",
    timeLabelSide: "left",
  },
  {
    city: "Tokyo",
    timeZone: "Asia/Tokyo",
    country: "Japan",
    entity: "Klaveness Japan KK",
    address: "JP Tower, Marunouchi, Chiyoda-ku",
    lat: 35.68,
    lon: 139.77,
    labelSide: "left",
  },
];

/** Link to an office's section on the Offices page. */
export const officeHref = (city: string) => `/contact/offices#${city.toLowerCase()}`;
