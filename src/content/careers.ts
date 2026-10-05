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
import tonyElmqvist from "@/assets/images/careers/people/tony-elmqvist.webp";
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
  intro: [
    "The challenges facing the global shipping industry are evolving rapidly. Decarbonization, digitalization, changing trade patterns, and increasing complexity across global supply chains are reshaping the future of shipping. At Klaveness, we believe these challenges create opportunities for people who are curious, ambitious, and eager to make a meaningful contribution.",
    "Whether you are early in your career or an experienced professional, we offer opportunities to learn, grow, and help shape the future of maritime trade alongside talented colleagues around the world.",
  ],
  joining: {
    title: "Joining our team",
    paragraphs: [
      "Klaveness offers opportunities across a diverse range of roles, including commercial shipping, operations, technology, finance, compliance, sustainability, and corporate services.",
      "Our people work across five locations, collaborating closely across functions, cultures, and time zones. Regardless of role, every employee contributes to helping customers move the food, energy, and raw materials that society depends on every day.",
    ],
    cta: "View our current vacancies and discover where a career at Klaveness could take you.",
    image: joiningImage,
    imageAlt: "Two Klaveness colleagues working together at a screen in the Singapore office",
  },
  students: {
    title: "Students and internships",
    paragraphs: [
      "We believe attracting future talent starts with providing meaningful opportunities early in a career.",
      "Through collaboration with educational institutions in Norway and internationally, we offer internships and student opportunities that provide practical experience, exposure to the maritime industry, and the opportunity to work alongside experienced professionals.",
      "At Klaveness, students are encouraged to contribute, challenge ideas, and develop skills that will support their future careers, whether that journey continues with us or takes them elsewhere.",
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
    statement: [{ text: "Improving the Nature of Shipping", strong: true }] satisfies RichLine,
    image: heroWorking,
  },
  vision: {
    eyebrow: "Our vision and values",
    statement: [
      { text: "Our vision, " },
      { text: "Improving the Nature of Shipping", strong: true },
      {
        text: ", reflects our belief that shipping can create greater value for society through safer, more efficient, and more sustainable maritime supply chains.",
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
      "We believe professional growth is a shared responsibility between employees and leaders. Through annual performance and development reviews, regular feedback, training opportunities, and practical experience, we support employees in building rewarding long-term careers.",
      "Learning is embedded in how we work. Employees are encouraged to develop new skills, broaden their expertise, and explore opportunities across functions and businesses. As an organization, we believe that continuous learning, adaptability, and knowledge sharing are essential to both personal success and long-term business performance.",
    ],
    academy: {
      name: "Klaveness Academy",
      text: "The Klaveness Academy serves as our internal learning platform, helping employees build knowledge and capabilities relevant to both their current and future roles as well as complete regular compliance training.",
    },
    image: developmentImage,
    imageAlt: "A Klaveness employee reading in the office library corner",
  },
  benefits: {
    title: "Employee benefits",
    intro:
      "We aim to provide a working environment that supports both professional development and personal wellbeing.",
    listIntro: "Benefits vary by role and location but include:",
    items: [
      { icon: "compensation", text: "Competitive compensation and benefits packages" },
      { icon: "development", text: "Professional development and training opportunities" },
      { icon: "travel", text: "International collaboration and travel opportunities" },
      { icon: "properties", text: "Access to company recreational properties in Europe and Asia" },
      { icon: "flexible", text: "Flexible working practices where appropriate" },
      { icon: "wellbeing", text: "Health and wellbeing support initiatives" },
    ] satisfies { icon: BenefitIcon; text: string }[],
    closing:
      "At Klaveness, we recognize that attracting and retaining talented people requires more than competitive compensation alone. We strive to create an environment where employees can grow professionally, maintain a healthy work-life balance, and build meaningful, long-term careers.",
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
    lead: "At Klaveness, our employees have the opportunity to work across different businesses, functions, and geographies while contributing to challenges that matter to global trade and maritime supply chains.",
    paragraphs: [
      "We combine the reach and opportunities of an international business with the agility and responsibility that come from being a Group company with multiple portfolio subsidiaries. This creates opportunities for people to take ownership, broaden their experience, and make a visible impact on the development of our business. Across the Group, our work is guided by a shared focus on Trading Efficiency; an ambition to seek better ways of aligning commercial, operational, and environmental considerations to create value for customers, society, and the wider maritime industry.",
      "Our culture is built on collaboration, trust, curiosity, and a shared commitment to continuous improvement. We encourage employees to challenge ideas, learn from one another, and contribute to shaping the future of shipping.",
    ],
    links: { "Trading Efficiency": "/sustainability#trading-efficiency" },
    image: placeToGrowImage,
    imageAlt: "Two Klaveness colleagues discussing ideas at a whiteboard in the Manila office",
  },
  equalOpportunities: {
    title: "Equal opportunities",
    paragraphs: [
      "Klaveness is committed to providing equal opportunities for all employees and applicants. Employment-related decisions are based on relevant qualifications, merit, performance, and other job-related factors.",
      "We believe diversity strengthens our business by bringing together people with different backgrounds, experiences, perspectives, and ideas.",
      "Our commitment extends across recruitment, development, compensation, promotion, and leadership opportunities regardless of gender, gender identification, ethnicity, religion, sexual orientation, disability, or social status.",
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
    "Across the Klaveness Group, employees contribute in many ways, from developing commercial relationships and optimizing vessel operations to building digital solutions, supporting customers, managing risk, and driving innovation across the maritime industry.",
    "Read the stories of colleagues from across Klaveness and learn more about their experiences, career paths, and perspectives on working in our industry.",
  ],
  stories: [
    {
      slug: "tony-elmqvist",
      name: "John Anton ‘Tony’ Elmqvist",
      role: "Front-End Lead, Klaveness Digital",
      quote:
        "It’s not just about the code being fun — it’s about building the right things, with the right people, in a space that actually needs it",
      link: {
        label: "Read Tony’s story",
        href: "https://www.klavenessdigital.com/news-and-insights/its-not-just-about-the-code-being-fun-its-about-building-the-right-things-with-the-right-people-in-a-space-that-actually-needs-it",
        external: true,
      },
      image: tonyElmqvist,
      imageAlt: "Tony Elmqvist at his desk in the Klaveness Digital office",
    },
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
