import { site, techStack, projects, pricingTiers, addons, stats, pricingNiches } from "@/lib/content";

export const en = {
  metadata: {
    title: "Nervure — The structure behind the form",
    description: "Design and development agency. The invisible structure that holds the visible form — a powerful metaphor for design and development: the framework behind the appearance.",
  },
  nav: [
    { label: "About", href: "/en#about" },
    { label: "Services", href: "/en#services" },
    { label: "Work", href: "/en#work" },
    { label: "Pricing", href: "/en#pricing" },
  ],
  menu: {
    servicesTitle: "OUR SPECIALIZED SERVICES",
  },
  hero: {
    status: "Open for new projects",
    weAreThe: "We are the",
    rotatingWords: ["DEVELOPERS", "DESIGNERS", "STRATEGISTS", "BUILDERS"],
    description: "The framework behind the appearance. We build digital experiences combining naturalistic aesthetics and technical performance.",
    cta: "LET'S CHAT",
    bottomStrap: "Design and development agency. The invisible structure that holds the visible form.",
  },
  about: {
    tag: "Who We Are",
    heading1: "We craft digital experiences that ",
    headingHighlight: "blend aesthetics",
    heading2: " with functionality.",
    p1: "Nervure is a specialized collective of web designers and developers. We are recognized as experts in creating digital experiences, dedicated to building unique online identities with a naturalistic and technical aesthetic.",
    p2: "From the initial concept to the final deployment, we focus on every detail — ensuring your site is fast, accessible, and strikingly beautiful. We don't just build websites; we design the framework behind the appearance.",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "24/7", label: "Support System" },
      { value: "100%", label: "Client Satisfied" },
    ],
  },
  tech: {
    tag: "The tech we use to build software",
    heading: "Technologies We Work With",
  },
  services: {
    tag: "Our Services",
    heading1: "ALL YOUR ",
    headingHighlight: "digital needs",
    description: "A premier agency offering precision design, custom development, and continuous optimization for your business growth.",
    cta: "BOOK A CALL",
    items: [
      { id: "product-design", title: "Product Design", description: "End-to-end product experiences from research to launch.", details: { overview: "We design intuitive digital products that place the user at the heart of the experience.", features: ["User Research & Personas", "Information Architecture", "High-fidelity Mockups", "Interactive Prototypes"] } },
      { id: "websites", title: "Websites", description: "High-performance marketing sites that convert.", details: { overview: "Your website is your digital storefront. We make it memorable and high-performing.", features: ["Next.js & Performance", "Conversion Rate Optimization", "Custom Web Design", "Simplified CMS"] } },
      { id: "software", title: "Software Development", description: "Scalable web and desktop applications.", details: { overview: "We develop robust and scalable software solutions to meet your complex needs.", features: ["Full-stack Applications", "Micro-services", "Robust APIs", "Maintenance & Evolution"] } },
      { id: "automation", title: "Automation Tools", description: "Custom automations and internal tooling.", details: { overview: "Optimize your time by automating repetitive tasks with our custom tools.", features: ["Tool Integration", "Automation Scripts", "Custom Internal Tools", "Workflow Optimization"] } },
      { id: "ads", title: "Meta & Google Ads", description: "Paid acquisition strategies that drive ROI.", details: { overview: "Maximize your return on investment with targeted and optimized advertising campaigns.", features: ["Campaign Management", "A/B Testing", "Performance Analysis", "Audience Targeting"] } },
      { id: "graphics", title: "Graphics (Creatives)", description: "Brand creatives, ad sets, and social assets.", details: { overview: "Give your brand a strong visual identity with our unique graphic creations.", features: ["Branding & Logos", "Ad Creatives", "Social Media Design", "Visual Identity"] } },
      { id: "seo", title: "SEO Optimization", description: "Technical and content SEO for sustainable growth.", details: { overview: "Improve your visibility on search engines with our holistic SEO approach.", features: ["Technical SEO Audit", "Keyword Research", "Content Optimization", "Link Building Strategy"] } },
    ]
  },
  works: {
    tag: "Selected Works",
    heading1: "Crafted with ",
    headingHighlight: "Precision",
    viewAll: "View All Projects & Designs"
  },
  pricing: {
    tag: "Pricing & Plans",
    heading1: "Transparent ",
    headingHighlight: "Investments",
    description: "Simple, transparent pricing. No hidden fees. We build scalable systems that generate ROI for your business.",
    cta: "Get Started",
    popularBadge: "Most Popular",
    startingAt: "Starting at",
    currency: "€",
    unit: "/project",
    tiers: {
      basic: {
        name: "Basic",
        price: "600",
        tagline: "Online presence + trust",
        features: [
          "5-page website (Home, Menu, About, Contact, Gallery)",
          "Online menu with pricing",
          "Google Maps integration",
          "WhatsApp order button",
          "Basic SEO setup",
          "Contact/Reservation form",
        ],
      },
      standard: {
        name: "Standard",
        price: "1,500",
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
      },
      premium: {
        name: "Premium",
        price: "4,000",
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
      },
    },
    nichesTag: "We work with:",
    addonsHeading: "Boost Your Growth",
    addonsDescription: "Scale faster with our specialized monthly add-ons.",
  },
  testimonials: {
    tag: "Client Love",
    heading1: "Don't just take ",
    headingHighlight: "our word",
    heading2: " for it",
    items: [
      {
        quote: "Nervure is hands down the best website building agency. They transformed our outdated site into a modern conversion machine. The attention to detail and animations are world-class.",
        author: "Rahul Sharma",
        role: "CEO, TechFlow",
      },
      {
        quote: "Incredible experience working with Nervure. They understood our brand voice immediately and delivered a product that exceeded our wildest expectations. Highly recommend!",
        author: "Priya Patel",
        role: "Founder, StartUp Solutions",
      },
      {
        quote: "Fast, professional, and wildly creative. The SEO optimizations alone have doubled our organic traffic in just two months.",
        author: "Amit Verma",
        role: "Marketing Director, GrowthHub",
      },
    ]
  },
  faq: {
    tag: "FAQ",
    heading1: "Got ",
    headingHighlight: "Questions?",
    items: [
      {
        q: "How long does a typical website project take at Nervure?",
        a: "Timeline depends on complexity. A basic 5-page website usually takes 7–10 days, while standard business sites take 2–3 weeks. For complex platforms, it may take 4–8 weeks.",
      },
      {
        q: "Which pricing plan is best for my business?",
        a: "Our 'Standard' plan is the most popular as it balances advanced features with cost-effectiveness. However, if you're looking for a serious revenue-generation system, the 'Premium' plan is the way to go.",
      },
      {
        q: "What is your payment structure?",
        a: "We require a 20% advance payment to initiate the project and lock in your slot. The remaining 80% is due only after the project is successfully completed and you are 100% satisfied.",
      },
      {
        q: "Will my website be mobile-friendly and SEO optimized?",
        a: "Absolutely! Every website we build is 100% responsive across all devices. We also implement basic SEO as standard, ensuring your site is fast and structured correctly.",
      },
      {
        q: "Do you offer support after the website is launched?",
        a: "Yes! Every project comes with 1 month of free technical support. After that, you can opt for our AMC (Annual Maintenance Contract) at 15% of the project cost.",
      },
    ]
  },
  cta: {
    heading1: "Let's build a ",
    headingHighlight: "masterpiece.",
    button: "START A PROJECT",
  },
  footer: {
    contact: "Contact",
    socials: "Socials",
    sitemap: "Sitemap",
    copyright: `© 2026 Nervure — The structure behind the form. All rights reserved.`,
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    businessCard: "Business Card",
    works: "Work"
  },
  contact: {
    tag: "Contact Us",
    heading: "Let's talk about your next project.",
    description: "Have an idea? We have the expertise. Fill out the form and we'll get back to you within 24 hours.",
    form: {
      name: "Full Name",
      email: "Email Address",
      subject: "Subject / Project Type",
      subjects: [
        { label: "Select a project type...", value: "" },
        { label: "Web Design & Development", value: "web" },
        { label: "Software Solution", value: "software" },
        { label: "Branding & Identity", value: "branding" },
        { label: "Other", value: "other" },
      ],
      budgetLabel: "Project Budget",
      budgetOptions: [
        { label: "< 1k €", value: "under_1k" },
        { label: "< 2k €", value: "under_2k" },
        { label: "< 5k €", value: "under_5k" },
        { label: "5k+ €", value: "over_5k" },
      ],
      message: "Your Message",
      placeholderMessage: "How can we help you?",
      submit: "Send Message",
      success: "Message sent successfully! We'll get back to you very soon.",
      error: "An error occurred. Please try again.",
    },
    info: {
      email: "hello@nervure.site",
      location: "Nantes, France",
    }
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 23, 2026",
    sections: [
      {
        title: "1. Data Collection",
        content: "We collect information that you provide directly to us through our contact form, including your name, email address, and project details."
      },
      {
        title: "2. Data Usage",
        content: "Your data is used exclusively to respond to your inquiries, manage your projects, and improve our services. We never sell your data to third parties."
      },
      {
        title: "3. Data Retention",
        content: "We retain your data for as long as necessary to provide our services or to fulfill our legal obligations."
      },
      {
        title: "4. Your Rights",
        content: "You have the right to access, rectify, and delete your personal data. Contact us at hello@nervure.site for any requests."
      }
    ]
  },
  terms: {
    title: "Terms of Use",
    lastUpdated: "Last updated: April 23, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing this site, you agree to be bound by these terms of use and all applicable laws and regulations."
      },
      {
        title: "2. Intellectual Property",
        content: "All content on this site, including text, graphics, logos, and code, is the property of Nervure and is protected by intellectual property laws."
      },
      {
        title: "3. Limitation of Liability",
        content: "Nervure shall not be held liable for any direct or indirect damages resulting from the use or inability to use the services on this site."
      },
      {
        title: "4. Modifications",
        content: "Nervure reserves the right to modify these terms at any time without notice. It is your responsibility to review them regularly."
      }
    ]
  },
  portfolio: {
    tag: "Our Portfolio",
    heading1: "A selection of our ",
    headingHighlight: "best achievements",
    description: "Discover how we help our clients stand out with custom digital solutions, from minimalist design to complex development.",
    cta: "Discuss a project",
  }
};
