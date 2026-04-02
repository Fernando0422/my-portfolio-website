/**
 * Work / portfolio landing page — project columns.
 * Reuse on other pages via import { workPageColumns } from "../data/workPageColumns";
 */
const base = process.env.PUBLIC_URL || "";

export const workPageColumns = [
  {
    to: "/work/disney",
    previewTreat: "photo",
    title: "EMPLOYER BRAND",
    subtitle: "THE WALT DISNEY COMPANY",
    details: [
      "CAREERS UX",
      "CMS MIGRATION",
      "GLOBAL CONTENT",
      "ACCESSIBILITY",
    ],
    blurb:
      "I build high-volume careers experiences that keep brand, performance, and usability aligned.",
    preview: `${base}/images/The-Walt-Disney-Company-Headquarters.png`,
  },
  {
    to: "/work/lamer",
    previewTreat: "brand",
    title: "LUXURY DIGITAL",
    subtitle: "THE ESTÉE LAUDER COMPANIES",
    details: [
      "WEB EXPERIENCE",
      "E-COMMERCE FLOWS",
      "VISUAL DIRECTION",
      "MOBILE POLISH",
    ],
    blurb:
      "Luxury experience translated into digital systems that feel premium and convert.",
    preview: `${base}/images/La-Mer-logo.jpg`,
  },
  {
    to: "/cah",
    previewTreat: "photo",
    title: "WEB DESIGN",
    subtitle: "CENTER FOR ARTS AND HUMANITIES",
    details: [
      "INFORMATION ARCH",
      "CONTENT DESIGN",
      "INTERACTION",
      "EDITORIAL LAYOUTS",
    ],
    blurb:
      "Cultural storytelling through structured design systems and expressive interfaces.",
    preview: `${base}/images/CAHimg1.png`,
  },
  {
    to: "/snapchat",
    previewTreat: "photo",
    title: "CREATIVE TECH",
    subtitle: "SNAPCHAT",
    details: [
      "AR PROTOTYPES",
      "EXPERIMENTAL UI",
      "CREATOR FLOWS",
      "CAMPAIGN IDEAS",
    ],
    blurb:
      "I prototype creative concepts fast and turn them into feasible product experiences.",
    preview: `${base}/images/snapchat.jpg`,
  },
  {
    to: "/dorothys-calculator",
    previewTreat: "interface",
    title: "PRODUCT BUILD",
    subtitle: "DOROTHY'S CALCULATOR",
    details: [
      "TECH TO MARKET",
      "PRODUCT OPS",
      "USER FEEDBACK LOOPS",
      "IMPLEMENTATION",
    ],
    blurb:
      "From concept to launch, shipping product systems with measurable user impact.",
    preview: `${base}/images/Dorothys Calculator.png`,
  },
  {
    to: "/mayanroots",
    previewTreat: "interface",
    title: "CAPSTONE + THESIS",
    subtitle: "SANTA CLARA UNIVERSITY",
    details: [
      "FLUTTER · FIREBASE · NODE",
      "WEATHER · MILPA · MOON",
      "MAPS · TRILINGUAL UI",
      "THESIS · SCHOLAR COMMONS",
    ],
    blurb:
      "Thesis app built for real constraints in Yucatán: trilingual, offline-first, and designed for the phones people actually use.",
    preview: `${base}/images/mayanroots-app-in-field.png`,
  },
];
