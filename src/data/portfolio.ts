import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Layers3,
  Megaphone,
  PenTool,
  Search,
  Smartphone,
  Utensils,
  WandSparkles,
} from "lucide-react";

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
  url?: string;
  accent: string;
  challenge: string;
  solution: string;
  approach: string;
  technology: string[];
  objective: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Kanchi Cafe",
    category: "Restaurant Website",
    description: "A warm, modern home for a neighbourhood cafe—with the menu, atmosphere and useful details always within reach.",
    services: ["Web design", "Development", "Responsive design"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Sunlit cafe interior with wood furniture and hanging plants",
    accent: "#d6ac75",
    challenge: "Give a local cafe a distinctive online identity and make essential visitor information easy to find.",
    solution: "A welcoming, editorial layout gives the menu, location and cafe atmosphere their own clear place.",
    approach: "Warm natural tones, considered type and generous food photography set the mood without getting in the way.",
    technology: ["React", "Responsive UI", "Accessible HTML"],
    objective: "A polished concept designed to support discovery, menu browsing and in-person visits.",
  },
  {
    number: "02",
    name: "Cafe Vibe",
    category: "Cafe Website",
    description: "A bright and inviting digital experience centred on easy menu discovery and the character of the space.",
    services: ["UI design", "Development", "Responsive design"],
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Freshly brewed coffee beside a notebook in a cafe",
    accent: "#b9c497",
    challenge: "Create an online first impression that feels as relaxed and memorable as the cafe itself.",
    solution: "A simple, mobile-first structure brings menu highlights, hours and location into a natural flow.",
    approach: "Fresh imagery and confident typography balance personality with clear, practical information.",
    technology: ["React", "CSS", "Responsive UI"],
    objective: "A concept experience focused on making local information and the menu straightforward to explore.",
  },
  {
    number: "03",
    name: "Elite Haven",
    category: "Hospitality Website",
    description: "A refined hospitality concept pairing immersive imagery with a calm, considered guest journey.",
    services: ["Web design", "Development", "Responsive design"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Quiet, refined hotel lounge with neutral furnishings",
    accent: "#c1a8a0",
    challenge: "Communicate the feeling of a premium stay while helping potential guests find the details they need.",
    solution: "A visual-first page introduces the property, then guides visitors through amenities and enquiry.",
    approach: "Soft neutrals, spacious sections and a restrained type system create an understated sense of quality.",
    technology: ["React", "Responsive UI", "Accessible HTML"],
    objective: "A hospitality concept that puts atmosphere and a clear guest journey first.",
  },
  {
    number: "04",
    name: "Obsidian Pulse",
    category: "Brand / Business Website",
    description: "A confident digital brand concept with bold type, dark surfaces and carefully paced interactions.",
    services: ["Web design", "Development", "Brand experience"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contemporary creative studio with dramatic dark accents",
    accent: "#8e9da5",
    challenge: "Build a memorable web presence for a modern brand without sacrificing readability or clarity.",
    solution: "A strong typographic system and focused calls to action give the concept a distinct, coherent voice.",
    approach: "Deep charcoal, crisp contrast and purposeful motion support an energetic but controlled identity.",
    technology: ["React", "CSS", "Motion-conscious UI"],
    objective: "A brand-led concept demonstrating how a distinctive visual system can stay usable.",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { number: "01", title: "Website Design", description: "Freelance website design for small businesses, shaped around your brand and the people you want to reach.", icon: PenTool },
  { number: "02", title: "Business Websites", description: "Small business website design and development that introduces your business and makes the next step obvious.", icon: Globe2 },
  { number: "03", title: "Restaurant & Cafe Websites", description: "Restaurant and cafe website design with clear menus, inviting visuals, and useful location details.", icon: Utensils },
  { number: "04", title: "Landing Pages", description: "Focused landing page design for a product, service or campaign, with a clear path to action.", icon: Layers3 },
  { number: "05", title: "Website Redesign", description: "Website redesign and development for a more modern, mobile-friendly experience that fits your business.", icon: Smartphone },
  { number: "06", title: "Digital Marketing", description: "Practical SEO services, Google Ads and social media marketing support to build your online presence.", icon: Megaphone },
];

export const benefits = [
  "Modern & professional design",
  "Mobile responsive",
  "Fast & user friendly",
  "SEO ready",
  "Marketing ready",
  "Clear communication",
  "Transparent pricing",
  "Post-launch support",
];

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand your business, audience and what the website needs to do.", icon: Compass },
  { number: "02", title: "Plan", description: "Shape the site structure, content and a clear path for your visitors.", icon: Layers3 },
  { number: "03", title: "Design", description: "Create a distinctive visual direction that feels right for your brand.", icon: PenTool },
  { number: "04", title: "Build", description: "Develop the experience, then test it across screens and devices.", icon: Code2 },
  { number: "05", title: "Launch", description: "Prepare the site for launch, including domain and deployment guidance.", icon: ArrowUpRight },
  { number: "06", title: "Support", description: "Stay available for post-launch improvements and maintenance needs.", icon: Gauge },
];

export const faqs = [
  { question: "How long does a website take?", answer: "Timelines depend on the size of the project and how quickly content and feedback are ready. A focused small-business website often takes a few weeks from kickoff to launch; I’ll outline a realistic schedule before we begin." },
  { question: "Do you provide domain and hosting?", answer: "I can help you choose and connect a domain and hosting provider. These are usually purchased in your name, so you retain ownership and access." },
  { question: "Can you redesign my existing website?", answer: "Yes. We can review what is and isn’t working, keep useful content and rebuild the experience around your current goals and brand." },
  { question: "Can I request changes?", answer: "Of course. The project includes agreed feedback rounds at design milestones. We’ll confirm the scope and process clearly before work starts." },
  { question: "Do you provide maintenance?", answer: "Post-launch support and ongoing maintenance can be discussed based on what your website needs, from small updates to regular care." },
  { question: "Do you work with clients outside India?", answer: "Yes. I work with businesses in India and beyond, and can coordinate remotely across locations and time zones." },
];

export const skillGroups = [
  { label: "Web", icon: Globe2, skills: ["HTML", "CSS", "JavaScript", "React", "WordPress"] },
  { label: "Development", icon: Code2, skills: ["Python", "Flask", "SQL"] },
  { label: "Design", icon: PenTool, skills: ["Figma", "Canva"] },
  { label: "Marketing", icon: Search, skills: ["Google Ads", "Meta Ads", "SEO", "Social media"] },
  { label: "AI", icon: WandSparkles, skills: ["AI-assisted development", "AI content tools", "AI website tools"] },
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? "";
const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Hari, I’d like to discuss a project.")}`
  : `https://wa.me/?text=${encodeURIComponent("Hi Hari, I’d like to discuss a project.")}`;

export const socialLinks = [
  { label: "Instagram", href: import.meta.env.VITE_INSTAGRAM_URL ?? "" },
  { label: "LinkedIn", href: import.meta.env.VITE_LINKEDIN_URL ?? "" },
  { label: "GitHub", href: import.meta.env.VITE_GITHUB_URL ?? "" },
];
