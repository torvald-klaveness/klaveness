import customers from "@/assets/images/trading-efficiency/explained/customers.webp";
import dataSmart from "@/assets/images/trading-efficiency/explained/data-smart.webp";
import decarbonisation from "@/assets/images/trading-efficiency/explained/decarbonisation.webp";
import employeesAtSea from "@/assets/images/trading-efficiency/explained/employees-at-sea.webp";
import employeesOnShore from "@/assets/images/trading-efficiency/explained/employees-on-shore.webp";
import operationalExcellence from "@/assets/images/trading-efficiency/explained/operational-excellence.webp";
import reducedEnvironmentalFootprint from "@/assets/images/trading-efficiency/explained/reduced-environmental-footprint.webp";
import reducedFreightCost from "@/assets/images/trading-efficiency/explained/reduced-freight-cost.webp";
import resilience from "@/assets/images/trading-efficiency/explained/resilience.webp";
import ship from "@/assets/images/trading-efficiency/explained/ship.webp";
import suppliers from "@/assets/images/trading-efficiency/explained/suppliers.webp";
import trustAndResponsibility from "@/assets/images/trading-efficiency/explained/trust-and-responsibility.webp";
import vesselPosition from "@/assets/images/trading-efficiency/explained/vessel-position.webp";
import visionary from "@/assets/images/trading-efficiency/explained/visionary.webp";
import resilienceV2 from "@/assets/images/trading-efficiency/explained/resilience-v2.webp";
import costEffective from "@/assets/images/trading-efficiency/explained/cost-effective.webp";

/** Two-tone line icons for the Trading Efficiency Explained page, by name. */
export const explainerIcons = {
  "customers": customers,
  "data-smart": dataSmart,
  "decarbonisation": decarbonisation,
  "employees-at-sea": employeesAtSea,
  "employees-on-shore": employeesOnShore,
  "operational-excellence": operationalExcellence,
  "reduced-environmental-footprint": reducedEnvironmentalFootprint,
  "reduced-freight-cost": reducedFreightCost,
  "resilience": resilience,
  "ship": ship,
  "suppliers": suppliers,
  "trust-and-responsibility": trustAndResponsibility,
  "vessel-position": vesselPosition,
  "visionary": visionary,
  "resilience-v2": resilienceV2,
  "cost-effective": costEffective,
} as const;

export type ExplainerIcon = keyof typeof explainerIcons;
