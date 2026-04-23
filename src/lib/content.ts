export const site = {
  name: "Nervure",
  tagline: "La structure derrière la forme.",
  contact: {
    email: "hello@nervure.site",
    phones: ["07 59 66 44 70"],
    whatsapp: "33759664470",
  },
  socials: {
    instagram: "https://instagram.com/x_forgeweb",
    twitter: "https://twitter.com/x_forgeweb",
    linkedin: "#",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
  ],
};

export const heroRotatingWords = ["DEVELOPERS", "DESIGNERS", "STRATEGISTS", "BUILDERS"];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Support System" },
  { value: "100%", label: "Client Satisfied" },
];

export const techStack = {
  row1: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Figma", "Firebase", "AWS", "Electron.js"],
  row2: ["Python", "Express.js", "Redux", "GraphQL", "Docker", "Vercel", "Prisma", "Framer Motion", "Supabase", "Git"],
};

export const services = [
  { id: "product-design", title: "Product Design", description: "End-to-end product experiences from research to launch." },
  { id: "websites", title: "Websites", description: "High-performance marketing sites that convert." },
  { id: "software", title: "Software Development", description: "Scalable web and desktop applications." },
  { id: "automation", title: "Automation Tools", description: "Custom automations and internal tooling." },
  { id: "ads", title: "Meta & Google Ads", description: "Paid acquisition strategies that drive ROI." },
  { id: "graphics", title: "Graphics (Creatives)", description: "Brand creatives, ad sets, and social assets." },
  { id: "seo", title: "SEO Optimization", description: "Technical and content SEO for sustainable growth." },
];

export const projects = [
  {
    title: "E-Commerce Website",
    tag: "Full Stack Application",
    image: "/Ecommerce.png",
    href: "https://ecommerce-webapp-w5g9.vercel.app/",
    cta: "View Live",
  },
  {
    title: "Graphic Designs",
    tag: "Creative Portfolio",
    image: "/project-landing.png",
    href: "#",
    cta: "View Gallery",
  },
  {
    title: "Oura Ring",
    tag: "E-Commerce Solution",
    image: "/oura-ring.png",
    href: "https://ouraring.com/",
    cta: "View Project",
  },
  {
    title: "SkillShastra",
    tag: "EdTech Platform",
    image: "/SkillShastra.png",
    href: "https://skill-shastra.vercel.app/",
    cta: "View Live",
  },
];

export const pricingNiches = [
  "Restaurants & Cafes",
  "Tech Startups",
  "Educational Hubs",
  "E-Commerce",
  "Service Providers",
  "Personal Brands",
] as const;

export const pricingTiers = [
  {
    name: "Basic",
    tagline: "Online presence + trust",
    features: [
      "5-page website (Home, Menu, About, Contact, Gallery)",
      "Online menu with pricing",
      "Google Maps integration",
      "WhatsApp order button",
      "Basic SEO setup",
      "Contact/Reservation form",
    ],
    popular: false,
  },
  {
    name: "Standard",
    tagline: "Customer engagement + control",
    features: [
      "Everything in Basic +",
      "Online table booking system",
      "Admin panel to update menu",
      "Photo gallery management",
      "Customer inquiry dashboard",
      "Review/testimonial section",
      "Basic analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Premium",
    tagline: "Revenue generation system",
    features: [
      "Everything in Standard +",
      "Online ordering system (cart + checkout)",
      "Payment gateway integration",
      "Order management dashboard",
      "Coupon/discount system",
      "Inventory lite tracking",
      "1-month digital marketing support",
    ],
    popular: false,
  },
];

export const addons = [
  { name: "Digital Marketing", price: "Custom – Custom/month" },
  { name: "WhatsApp Automation", price: "Custom" },
  { name: "SEO", price: "Custom/month" },
  { name: "AMC (Maintenance)", price: "15% yearly" },
];

export const testimonials = [
  {
    quote: "Nervure is hands down the best website building agency. They transformed our outdated site into a modern conversion machine. The attention to detail and animations are world-class.",
    author: "Rahul Sharma",
    role: "CEO, TechFlow India",
  },
  {
    quote: "Incredible experience working with Nervure. They understood our brand voice immediately and delivered a product that exceeded our wildest expectations. Highly recommend!",
    author: "Priya Patel",
    role: "Founder, StartUp Solutions",
  },
  {
    quote: "Fast, professional, and wildly creative. The SEO optimizations alone have doubled our organic traffic in just two months. Nervure is truly a top web design agency.",
    author: "Amit Verma",
    role: "Marketing Director, GrowthHub",
  },
];

export const faqs = [
  {
    q: "How long does a typical website project take at Nervure?",
    a: "Timeline depends on complexity. A basic 5-page website usually takes 7–10 days, while standard business sites take 2–3 weeks. For complex e-commerce or SaaS platforms, it may take 4–8 weeks. We are known for providing the fastest turnaround without compromising on premium quality.",
  },
  {
    q: "Which pricing plan is best for my business?",
    a: "Our niche-based pricing is tailored for specific outcomes. For most growing businesses, our 'Standard' plan is the most popular as it balances advanced features with cost-effectiveness. However, if you're looking for a serious revenue-generation system, the 'Premium' plan with integrated marketing support is the way to go.",
  },
  {
    q: "What is your payment structure?",
    a: "We follow a professional and transparent payment process. Typically, we require a 20% advance payment to initiate the project and lock in your slot. The remaining 80% is due only after the project is successfully completed and you are 100% satisfied with the result.",
  },
  {
    q: "Will my website be mobile-friendly and SEO optimized?",
    a: "Absolutely! In today's market, mobile-first design is non-negotiable. Every website we build is 100% responsive across all devices. Additionally, we implement basic SEO as standard, ensuring your site is fast, structured correctly, and ready to rank on search engines like Google.",
  },
  {
    q: "Do you offer support after the website is launched?",
    a: "Yes! Every project comes with 1 month of free technical support and 2 minor updates to ensure everything runs smoothly. After that, you can opt for our AMC (Annual Maintenance Contract) at 15% of the project cost to keep your site secured and updated year-round.",
  },
  {
    q: "Can you help with marketing and growing my online presence?",
    a: "Definitely. Beyond development, we offer 'Boost Your Growth' add-ons including Digital Marketing, SEO, and WhatsApp Automation. These services are designed to turn your website from a digital brochure into a lead-generating machine.",
  },
  {
    q: "Why should I choose Nervure over a freelancer?",
    a: "With 50+ projects delivered and a focused team of experts, we provide agency-grade reliability with a personalized touch. We don't just 'build websites'—we build business solutions that are scalable, secure, and designed to convert visitors into customers.",
  },
];
