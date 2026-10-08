import type { StaticImageData } from "next/image";

import fortyBy30 from "@/assets/images/careers/40-by-30.webp";
import benefitsImage from "@/assets/images/careers/benefits.webp";
import developmentImage from "@/assets/images/careers/development.webp";
import equalOpportunitiesImage from "@/assets/images/careers/equal-opportunities.webp";
import heroCareers from "@/assets/images/careers/hero-careers.webp";
import heroLife from "@/assets/images/careers/hero-life-at-klaveness.webp";
import heroMeet from "@/assets/images/careers/hero-meet-our-people.webp";
import heroVacancies from "@/assets/images/careers/hero-vacancies.webp";
import heroWorking from "@/assets/images/careers/hero-working-with-us.webp";
import joiningImage from "@/assets/images/careers/joining-our-team.webp";
import kristinaRep from "@/assets/images/careers/people/kristina-rep.webp";
import magnusNoodt from "@/assets/images/careers/people/magnus-noodt.webp";
import martinWattum from "@/assets/images/careers/people/martin-wattum.webp";
import monicaLauritzen from "@/assets/images/careers/people/monica-lauritzen.webp";
import placeToGrowImage from "@/assets/images/careers/place-to-grow.webp";
import studentsImage from "@/assets/images/careers/students-and-internships.webp";
import visionImage from "@/assets/images/careers/vision-and-values.webp";
import type { RichLine } from "@/content/types";

/*
 * Copy from the client's Careers document (Careers.docx, August 2026).
 * Photos from the current klaveness.com Careers pages and the document.
 */

export const careersPages = {
  home: { label: "Careers", href: "/careers" },
  workingWithUs: { label: "Working with us", href: "/careers/working-with-us" },
  life: { label: "Life at Klaveness", href: "/careers/life-at-klaveness" },
  people: { label: "Meet our people", href: "/careers/meet-our-people" },
  vacancies: { label: "Vacancies", href: "/careers/vacancies" },
} as const;

export const careersHome = {
  meta: {
    title: "Careers",
    description:
      "Keen to make a difference? Whether you are early in your career or an experienced professional, Klaveness offers opportunities to learn, grow, and help shape the future of maritime trade.",
  },
  hero: {
    eyebrow: "Careers",
    statement: [
      { text: "Keen to " },
      { text: "make a difference?", strong: true },
    ] satisfies RichLine,
    image: heroCareers,
  },
  // Client's revised text (October 2026).
  intro: [
    "The shipping industry is evolving rapidly. Decarbonization, digitalization, changing trade patterns, and increasing complexity across global supply chains are reshaping how cargo moves around the world.",
    "At Klaveness, we see these challenges as opportunities. We are looking for curious, ambitious people who want to learn, grow, and contribute to shaping the future of shipping.",
    "Whether you are early in your career or an experienced professional, you’ll have the opportunity to work alongside talented colleagues from around the world and contribute to solutions that make shipping more efficient, resilient, and sustainable.",
  ],
  joining: {
    title: "Joining our team",
    paragraphs: [
      "Klaveness offers opportunities across a wide range of disciplines, including commercial shipping, operations, technology, finance, compliance, sustainability, and corporate services.",
      "With colleagues across five locations, we work closely across functions, cultures, and time zones. Whatever the role, every employee contributes to helping customers move the food, energy, and raw materials the world depends on every day.",
    ],
    cta: "Explore our current vacancies and discover where a career at Klaveness could take you.",
    image: joiningImage,
    imageAlt: "Two Klaveness colleagues working together at a screen in the Singapore office",
  },
  students: {
    title: "Students and internships",
    paragraphs: [
      "We believe meaningful careers often start with meaningful opportunities.",
      "Through partnerships with educational institutions in Norway and internationally, we offer internships and student opportunities that provide practical experience, industry exposure, and the chance to work alongside experienced professionals.",
      "Students at Klaveness are encouraged to contribute, challenge established thinking, and develop skills that support their future careers, whether that journey continues with us or takes them elsewhere.",
    ],
    image: studentsImage,
    imageAlt: "A smiling Klaveness intern in orange overalls and a hard hat on site",
  },
} as const;

export type BenefitIcon =
  "compensation" | "development" | "travel" | "properties" | "flexible" | "wellbeing";

export const workingWithUs = {
  meta: {
    title: "Working with us",
    description:
      "Our vision, Improving the Nature of Shipping, our core values, personal and professional development through the Klaveness Academy, and employee benefits.",
  },
  hero: {
    eyebrow: "Working with us",
    statement: [{ text: "Our " }, { text: "vision and values", strong: true }] satisfies RichLine,
    image: heroWorking,
  },
  vision: {
    eyebrow: "Our vision",
    statement: [
      { text: "Our vision, " },
      { text: "Improving the Nature of Shipping", strong: true },
      {
        text: ", reflects our belief that shipping can work better. By challenging convention and finding smarter ways to move cargo, we aim to support more resilient, decarbonized, and cost-effective seaborne supply chains.",
      },
    ] satisfies RichLine,
    valuesTitle:
      "The decisions we make, the solutions we develop, and the way we work together are guided by our core values:",
    image: visionImage,
    imageAlt: "Two Klaveness colleagues in conversation at a meeting table",
  },
  development: {
    title: "Personal and professional development",
    paragraphs: [
      "Professional growth is a shared responsibility between employees and leaders. Through ongoing feedback, development conversations, training, and practical experience, we support employees in building rewarding long-term careers.",
      "Learning is embedded in our culture. We encourage employees to broaden their expertise, develop new skills, and explore opportunities across functions and businesses. We believe continuous learning, adaptability, and knowledge sharing are essential to individual growth and long-term business success.",
    ],
    academy: {
      name: "Klaveness Academy",
      text: "The Klaveness Academy serves as our internal learning platform, supporting the development of capabilities relevant to both current and future roles.",
    },
    image: developmentImage,
    imageAlt: "A Klaveness employee reading in the office library corner",
  },
  benefits: {
    title: "Employee benefits",
    intro:
      "We believe people do their best work when they have opportunities to grow, contribute, and maintain a healthy work-life balance. That’s why we focus on creating an environment where employees can develop their skills, take on new challenges, and build rewarding long-term careers.",
    listIntro: "Benefits vary by role and location but include:",
    items: [
      { icon: "compensation", text: "Competitive compensation and benefits packages" },
      { icon: "development", text: "Professional development and training opportunities" },
      { icon: "travel", text: "International collaboration and travel opportunities" },
      { icon: "properties", text: "Access to company recreational properties in Europe and Asia" },
      { icon: "flexible", text: "Flexible working practices where appropriate" },
      { icon: "wellbeing", text: "Health and wellbeing support initiatives" },
    ] satisfies { icon: BenefitIcon; text: string }[],
    image: benefitsImage,
    imageAlt: "Colleagues at work in the Klaveness Dubai office",
  },
} as const;

export const lifeAtKlaveness = {
  meta: {
    title: "Life at Klaveness",
    description:
      "A place to grow and make an impact: our culture, equal opportunities, and key facts about the people of Klaveness.",
  },
  hero: {
    eyebrow: "Life at Klaveness",
    statement: [
      { text: "A place to " },
      { text: "grow and make an impact", strong: true },
    ] satisfies RichLine,
    image: heroLife,
  },
  impact: {
    lead: "At Klaveness, employees have the opportunity to work across businesses, functions, and geographies while helping address some of the most important challenges facing global trade and maritime supply chains.",
    paragraphs: [
      "We combine the reach of an international business with the agility and responsibility that comes from being a Group with a diverse portfolio of companies. This creates opportunities to take ownership, broaden experience, and make a meaningful impact.",
      "Across the Group, we are united by a shared ambition to improve Trading Efficiency by finding better ways to align commercial, operational, and environmental considerations. Our culture is built on collaboration, trust, curiosity, and continuous improvement. We encourage employees to challenge established thinking, learn from one another, and contribute to shaping the future of shipping.",
    ],
    links: { "Trading Efficiency": "/trading-efficiency" },
    image: placeToGrowImage,
    imageAlt: "Two Klaveness colleagues discussing ideas at a whiteboard in the Manila office",
  },
  equalOpportunities: {
    title: "Equal opportunities",
    paragraphs: [
      "At Klaveness, we are committed to providing equal opportunities for all employees and applicants. Employment-related decisions are based on qualifications, merit, performance, and other job-related factors.",
      "We believe diverse perspectives make us a stronger business. By bringing together people with different backgrounds, experiences, and ideas, we create a more inclusive workplace and better outcomes for our customers and stakeholders.",
      "Our commitment extends across recruitment, development, compensation, promotion, and leadership opportunities, regardless of gender, gender identity, ethnicity, religion, sexual orientation, disability, or social status.",
    ],
    image: equalOpportunitiesImage,
    imageAlt: "The Klaveness team in Manila gathered outside the office",
  },
  facts: {
    title: "Key facts and figures",
    // Worded exactly as in the document: [before] **value** [after].
    figures: [
      { before: "", value: 48, suffix: "%", after: "women employed across Klaveness" },
      { before: "", value: 40, suffix: "%", after: "women on the Board of Directors" },
      { before: "Employees representing", value: 20, suffix: "", after: "nationalities" },
    ],
    pledge: {
      text: "Signatory of the WISTA Norway 40 by 30 Pledge, working to increase the share of women in leadership positions to 40% by 2030",
      logo: fortyBy30,
      logoAlt: "40 by 30 pledge logo",
    },
    offices: {
      text: "Offices in",
      cities: ["Oslo", "Singapore", "Manila", "Dubai", "Tokyo"],
    },
  },
} as const;

export type Story = {
  slug: string;
  name: string;
  role: string;
  quote: string;
  link: { label: string; href: string; external: boolean };
  image: StaticImageData;
  imageAlt: string;
};

export const meetOurPeople = {
  meta: {
    title: "Meet our people",
    description:
      "Every career journey is different. Read the stories of colleagues from across Klaveness and learn more about their experiences, career paths, and perspectives.",
  },
  hero: {
    eyebrow: "Meet our people",
    statement: [
      { text: "Every career journey is " },
      { text: "different.", strong: true },
    ] satisfies RichLine,
    image: heroMeet,
  },
  intro: [
    "Across the Klaveness Group, employees contribute in many ways, from building commercial relationships and optimizing vessel operations to developing digital solutions, supporting customers, managing risk, and advancing new ideas across the maritime industry.",
    "What connects us is a shared ambition to improve the nature of shipping. Whether working in shipping, technology, finance, sustainability, or corporate functions, every employee plays a role in helping customers navigate an increasingly complex operating environment.",
    "Read the stories of colleagues across Klaveness and learn more about their experiences, career journeys, and perspectives on working in a constantly evolving industry.",
  ],
  stories: [
    {
      slug: "magnus-noodt",
      name: "Magnus Noodt",
      role: "Seagoing intern turned full-time employee, Klaveness Combination Carriers",
      quote:
        "Being on the ship and seeing how everything works together was incredible. The practical knowledge I gained is something that theory can’t fully convey.",
      link: {
        label: "Read Magnus’ story",
        href: "/news/from-desk-to-deck-an-interns-time-as-a-seafarer",
        external: false,
      },
      image: magnusNoodt,
      imageAlt: "Magnus Noodt in orange overalls on the deck of a Klaveness vessel",
    },
    {
      slug: "kristina-rep",
      name: "Kristina Rep",
      role: "Operations Manager, Klaveness Digital",
      quote:
        "I didn’t know much about shipping and thought maybe I should stick with what I already knew. But then a colleague gave me a ‘Shipping 101’ intro, and I was instantly hooked.",
      link: {
        label: "Read Kristina’s story",
        href: "https://www.klavenessdigital.com/news-and-insights/the-future-of-shipping-is-digital-and-it-needs-all-kinds-of-talent",
        external: true,
      },
      image: kristinaRep,
      imageAlt: "Kristina Rep smiling in the Klaveness Digital office",
    },
    {
      slug: "martin-wattum",
      name: "Martin Wattum",
      role: "Senior Manager, Head of Energy and Operational Efficiency, KCC",
      quote:
        "Without curiosity, progress stops. You stay where you are. The goal for us is to continue improving trading efficiency, voyage efficiency and energy efficiency.",
      link: {
        label: "Read Martin’s story",
        href: "https://www.combinationcarriers.com/insights-and-news/how-kcc-makes-efficiency-a-mindset-not-just-a-metric",
        external: true,
      },
      image: martinWattum,
      imageAlt: "Portrait of Martin Wattum in the Klaveness office",
    },
    {
      slug: "monica-lauritzen",
      name: "Monica C. Lauritzen",
      role: "Business Relations Manager, Torvald Klaveness",
      quote:
        "I see myself as a bridge between business and IT. My job is to make sure what we deliver actually works and fits real needs.",
      link: {
        label: "Read Monica’s story",
        href: "https://www.linkedin.com/posts/klavenessvalues-craftsmanship-ugcPost-7399015176005578752-ycav/",
        external: true,
      },
      image: monicaLauritzen,
      imageAlt: "Portrait of Monica C. Lauritzen in the Klaveness office",
    },
  ] satisfies Story[],
} as const;

export type Vacancy = {
  title: string;
  location: string;
  company: string;
  /** ISO date. */
  deadline?: string;
  href: string;
};

export const vacanciesPage = {
  meta: {
    title: "Vacancies",
    description:
      "Apply now and be part of our journey to improve the nature of shipping. Current vacancies at Klaveness.",
  },
  hero: {
    eyebrow: "Vacancies",
    statement: [
      { text: "Apply now and be part of our journey to " },
      { text: "improve the nature of shipping", strong: true },
    ] satisfies RichLine,
    image: heroVacancies,
  },
  title: "Current Vacancies",
  empty: "We have no vacant positions for the time being.",
  follow: "Follow Torvald Klaveness on LinkedIn to hear about new opportunities.",
  /** Add open positions here; the page lists them automatically. */
  vacancies: [] as Vacancy[],
} as const;
