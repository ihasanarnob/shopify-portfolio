export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: 'Client Work' | 'Design Concept' | 'Work in Progress' | 'Theme Customization';
  statusNote?: string;
  client?: string;
  summary: string;
  role: string;
  techStack: string[];
  focusAreas: string[];
  objectives: string[];
  challenge: string;
  responsibilities: string[];
  approach: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  scrollDuration?: number;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; note?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    role: string;
    tagline: string;
    subheadline: string;
    location: string;
    availability: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumePdfUrl: string;
  };
  about: {
    intro: string;
    philosophy: string;
    approachPoints: { title: string; desc: string }[];
  };
  stats: { label: string; value: string; helper: string }[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: {
    degree: string;
    institution: string;
    period: string;
    note?: string;
  }[];
  certification: {
    name: string;
    issuer: string;
  }[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Iftekhar Hasan',
    fullName: 'Md. Iftekhar Hasan',
    role: 'Shopify Developer & Frontend Developer',
    tagline: 'I build Shopify experiences that make brands stand out.',
    subheadline:
      'Shopify Developer & Frontend Developer focused on thoughtful storefront design, custom theme development, and responsive e-commerce experiences.',
    location: 'Dhaka, Bangladesh',
    availability: 'Open to opportunities · Remote worldwide (GMT+6)',
    email: 'iftekharhasan04@gmail.com',
    phone: '+8801758852787',
    github: 'https://github.com/ihasanarnob',
    linkedin: 'https://www.linkedin.com/in/ihasanarnob',
    resumePdfUrl: '/resume.pdf',
  },
  about: {
    intro:
      'I am a Shopify and Frontend Developer who bridges the gap between commercial business goals and clean, resilient code. My daily work revolves around taking structured requirements, Figma designs, and merchant feedback, and translating them into conversion-focused storefront experiences.',
    philosophy:
      'Great e-commerce development is not about flashy code for its own sake. It is about speed, clarity of product storytelling, bulletproof mobile usability, and giving merchants flexible, reusable sections they can manage with confidence.',
    approachPoints: [
      {
        title: 'Requirement-First Execution',
        desc: 'I turn ambiguous merchant requests into structured technical briefs (PRD-style), defining clear acceptance criteria before writing code.',
      },
      {
        title: 'Modular Section Architecture',
        desc: 'Building with Shopify Online Store 2.0 principles—crafting flexible, configurable Liquid sections and blocks that empower content teams.',
      },
      {
        title: 'Rigorous QA & UAT Testing',
        desc: 'Verifying responsive behavior, cart state, checkout flows, and cross-browser consistency end-to-end to catch regressions before launch.',
      },
      {
        title: 'Performance & UX Balance',
        desc: 'Balancing rich visual typography and editorial layouts with lightweight asset delivery and optimal Core Web Vitals.',
      },
    ],
  },
  stats: [
    { label: 'Client Engagements', value: '50+', helper: 'Handled requirements, builds & UAT' },
    { label: 'Concurrent Store Accounts', value: '30+', helper: 'At peak agency capacity' },
    { label: 'Shopify Core Focus', value: 'OS 2.0', helper: 'Modular Liquid themes & sections' },
    { label: 'Engineering Background', value: 'B.Sc. CSE', helper: 'Computer Science & Engineering graduate' },
  ],
  skills: [
    {
      title: 'Shopify Storefronts',
      description: 'Native theme engineering and storefront architecture',
      skills: [
        { name: 'Shopify Online Store 2.0', highlight: true },
        { name: 'Shopify Liquid Template Engine', highlight: true },
        { name: 'Custom Theme Development', highlight: true },
        { name: 'Figma to Shopify Implementation', highlight: true },
        { name: 'Reusable Sections & Blocks', highlight: true },
        { name: 'Shopify Theme Customization' },
        { name: 'Shopify App Integrations' },
        { name: 'Collection & Cart UX' },
        { name: 'Store Policy & Content Architecture' },
      ],
    },
    {
      title: 'Frontend Engineering',
      description: 'Modern, performant client-side technologies',
      skills: [
        { name: 'HTML5 & Semantic Markup', highlight: true },
        { name: 'CSS3 / Modern Layouts (Grid/Flexbox)', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Next.js (App Router)' },
        { name: 'Responsive Web Design' },
        { name: 'Core Web Vitals & Page Speed' },
      ],
    },
    {
      title: 'Workflow & Product Management',
      description: 'Communication, QA processes, and version control',
      skills: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'User Acceptance Testing (UAT)', highlight: true },
        { name: 'Requirements Gathering (PRD)', highlight: true },
        { name: 'Figma Wireframing & Layouts' },
        { name: 'Jira & Trello Issue Tracking' },
        { name: 'Cross-functional Collaboration' },
        { name: 'Client Feedback Management' },
      ],
    },
  ],
  experience: [
    {
      role: 'Executive, Shopify',
      company: 'Betopia Group',
      period: 'December 2025 – Present',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      highlights: [
        'Gather and document business, product, content, and UI/UX requirements in structured briefs (PRD-style) to deliver tailored Shopify storefront solutions.',
        'Coordinate across technical and non-technical teams (developers, designers, content teams, and merchants), acting as primary liaison to translate client requirements into practical outcomes.',
        'Run end-to-end User Acceptance Testing (UAT) with clients prior to launch, logging bugs and issue tracking in Jira through final resolution.',
        'Create wireframes and low-fidelity layouts in Figma to communicate and validate storefront ideas with clients before starting development.',
        'Manage feedback, scope adjustments, and revision requests across 30+ concurrent client accounts in fashion, apparel, lifestyle, and multi-category e-commerce.',
      ],
      technologies: ['Shopify 2.0', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Figma', 'Jira', 'UAT Testing'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Daffodil Institute of IT',
      period: '2020 – 2025',
      note: 'Comprehensive coursework in algorithms, data structures, software engineering, web technologies, and database systems.',
    },
  ],
  certification: [
    {
      name: 'Complete Web Development Course',
      issuer: 'Programming Hero',
    },
  ],
  projects: [
    {
      slug: 'frequency-food',
      number: '01',
      title: 'Frequency Food',
      tagline: 'Multi-category nutrition, wellness & specialty food marketplace',
      category: 'Food & Nutrition',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Storefront customization and multi-collection grocery & nutrition architecture.',
      summary:
        'A comprehensive specialty food and nutrition marketplace built on Shopify. Designed with high-density departmental navigation, dietary filter tags (organic, gluten-free, keto), dynamic bundle discounts, and fast mobile cart checkout.',
      role: 'Shopify Storefront Customization & Collection Architecture',
      techStack: ['Shopify OS 2.0', 'Liquid', 'Filter & Search API', 'Responsive CSS', 'CRO Best Practices'],
      focusAreas: [
        'Multi-category departmental navigation and dietary tags',
        'Dynamic ingredient & nutrition transparency accordions',
        'Subscription-ready checkout integration',
        'Mobile-first category drawer with instant search',
      ],
      objectives: [
        'Structure extensive food and dietary product categories without visual clutter.',
        'Present nutritional benefits, certifications, and ingredient transparency clearly on product pages.',
        'Streamline repeat grocery ordering with intuitive cart drawer upsells.',
      ],
      challenge:
        'Specialty food buyers demand thorough ingredient information before purchasing, while seeking quick re-ordering paths. The challenge was structuring dense product data into clean, expandable tabs while keeping page load speeds under 1.5 seconds on mobile.',
      responsibilities: [
        'Implemented custom Liquid sections for featured nutritional collections and seasonal bundles.',
        'Built dynamic badges for organic, non-GMO, and vegan product classifications.',
        'Configured slide-out mini-cart with shipping threshold progress bar and one-click upsells.',
        'Conducted complete cross-device UAT across iOS Safari and Android Chrome.',
      ],
      approach: [
        'Created a modular collection template supporting multiple banner formats and banner promotions.',
        'Integrated metafields to dynamically render nutritional facts and certifications.',
        'Optimized full-length homepage asset loading for smooth scrolling.',
      ],
      outcome:
        'A vibrant, appetizing digital storefront that makes discovering healthy products effortless while maximizing merchant promotional flexibility.',
      image: '/projects/frequency-food-homepage.jpg',
      imageAlt: 'Frequency Food specialty food and nutrition marketplace full homepage capture',
      scrollDuration: 8.5,
      featured: true,
      accentColor: '#10B981',
    },
    {
      slug: 'bro-compagnie',
      number: '02',
      title: 'Bro Compagnie',
      tagline: 'Personalized canine nutrition, healthy chews & local pet wellness storefront',
      category: 'Pet Care & Nutrition',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Custom Shopify 2.0 boutique setup, French-language localization, and category architecture for pet nutrition.',
      summary:
        'A warm, localized French-language Shopify storefront created for Bro & Compagnie, a boutique pet wellness brand based in Quebec. Features structured product categories for canine nutrition, natural chews (mastication), and supplements, paired with pet care service bookings.',
      role: 'Shopify Storefront Customization & Bilingual Architecture',
      techStack: ['Shopify OS 2.0', 'Liquid', 'French Localization', 'Responsive Design', 'Figma to Shopify'],
      focusAreas: [
        'Tailored canine nutrition and chew category navigation (Alimentation & Mastication)',
        'Localized Quebec French storefront copy and currency formatting',
        'Integration of local pet care services and walking appointments',
        'Mobile-optimized product cards with quick variant selection',
      ],
      objectives: [
        'Present healthy pet nutrition and supplements in a reassuring, friendly aesthetic.',
        'Enable dog owners to easily find tailored dietary advice and products for their dogs.',
        'Ensure an effortless mobile browsing and checkout experience for local Canadian pet owners.',
      ],
      challenge:
        'Pet owners are highly protective of what they feed their dogs, requiring reassuring ingredient transparency and education without overwhelming mobile visitors. The challenge was organizing bilingual product information and service offerings into a clean, intuitive layout.',
      responsibilities: [
        'Customized Shopify Online Store 2.0 theme sections to align with the brand’s warm, earthy aesthetic.',
        'Structured modular collection templates for Alimentation, Mastication, Suppléments, and Accessoires.',
        'Built clear customer trust signals, verified testimonials, and advisory callouts.',
        'Conducted responsive testing across iOS and Android mobile viewports.',
      ],
      approach: [
        'Designed modular Liquid section blocks for advisory tips ("La santé canine à la portée de tous").',
        'Optimized collection filters to help pet owners filter by dog size, dietary need, and product type.',
        'Streamlined mobile navigation with quick category access and friendly typography.',
      ],
      outcome:
        'A warm, community-centered digital boutique that builds trust with dog owners and makes ordering premium canine nutrition effortless.',
      image: '/projects/bro-homepage.jpg',
      imageAlt: 'Bro Compagnie pet wellness and canine nutrition storefront full homepage capture',
      scrollDuration: 11,
      featured: true,
      accentColor: '#F59E0B',
    },
    {
      slug: 'braniac-prints',
      number: '03',
      title: 'Brainiac Prints',
      tagline: 'Custom printed stickers, interactive configurator & volume tier pricing',
      category: 'Custom Goods & Print',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Interactive storefront planning, custom product options, and dynamic quantity discount tables.',
      summary:
        'A specialized e-commerce storefront for custom printed stickers, decals, and branded merchandise. Features an interactive product configurator for choosing materials (die-cut, holographic, matte, clear), quantity discount tiers, and print-ready artwork file uploads.',
      role: 'Storefront UX Architecture & Custom Pricing Logic',
      techStack: ['Shopify OS 2.0', 'Liquid', 'Custom Option Logic', 'Quantity Break Rules', 'JavaScript'],
      focusAreas: [
        'Interactive finish & material preview (holographic, matte, clear, die-cut)',
        'Volume tier discount matrix with real-time per-unit price recalculation',
        'Seamless artwork file upload validation and resolution guidelines',
        'Clear turnaround time estimates and sample pack ordering flow',
      ],
      objectives: [
        'Demystify custom sticker options and make selecting sizes and finishes intuitive for both designers and first-time buyers.',
        'Incentivize higher average order values (AOV) by clearly displaying volume discounts.',
        'Prevent order delays by providing clear file upload specs directly on the product configuration screen.',
      ],
      challenge:
        'Custom manufactured goods have non-linear pricing and complex options that exceed standard Shopify variant architectures. The UX required simplifying multi-step configuration into an approachable, delightful workflow.',
      responsibilities: [
        'Designed custom product option selectors linked to line-item property metadata.',
        'Built dynamic volume pricing tables that highlight the "Best Value" tier to encourage bulk purchases.',
        'Structured customer trust indicators including free proof guarantees and durable weather-proof badges.',
      ],
      approach: [
        'Broke down the purchasing journey into 3 intuitive steps: Material &rarr; Size & Quantity &rarr; Artwork Upload.',
        'Engineered responsive pricing components that render instantly without client-side lag.',
        'Tested edge cases for extreme dimensions and custom quantity inputs.',
      ],
      outcome:
        'A seamless custom goods purchasing experience that transforms a technical manufacturing process into an effortless digital storefront.',
      image: '/projects/braniac-prints-homepage.jpg',
      imageAlt: 'Brainiac Prints custom stickers and print merchandise storefront full homepage capture',
      scrollDuration: 7,
      featured: true,
      accentColor: '#8B5CF6',
    },
    {
      slug: 'candy-from-strangers',
      number: '04',
      title: 'Candy From Strangers',
      tagline: 'Gourmet candy gift boxes, custom 6-pack box builder & playful DTC commerce',
      category: 'Confectionery & Gifts',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Interactive custom mix configurator, gift packaging flow, and bold high-contrast branding.',
      summary:
        'A witty, direct-to-consumer gourmet candy storefront built on Shopify. Features an interactive "Build Your Own" box configurator allowing shoppers to select 6 custom candy varieties into luxury gift boxes, alongside curated themed mixes and corporate event gifting.',
      role: 'Shopify Storefront Implementation & Box Builder UX',
      techStack: ['Shopify Liquid', 'Theme 2.0 Sections', 'Custom Box Builder Logic', 'Responsive Design', 'CRO Optimization'],
      focusAreas: [
        'Interactive "Build Your Own" 6-candy gift box selection flow',
        'Curated mix collections with flavor notes and packaging previews',
        'Corporate gifting and event planning inquiry integration',
        'Bold typography, irreverent copy storytelling, and frictionless checkout',
      ],
      objectives: [
        'Make gifting gourmet candy boxes effortless with a playful, memorable brand personality.',
        'Streamline the multi-step custom candy selection workflow without customer friction.',
        'Drive higher average order values (AOV) through pre-curated mixes and gift-ready packaging.',
      ],
      challenge:
        'Building a custom mix-and-match box builder within native Shopify required allowing shoppers to pick exactly 6 candies (with doubles permitted) and passing those selections cleanly into cart line-item properties without requiring bloated external apps.',
      responsibilities: [
        'Engineered custom Liquid sections for curated 12 oz box displays with flavor note badges.',
        'Implemented the "Build Your Own Box" step-by-step picker with real-time selection counters.',
        'Configured slide-out cart drawer displaying custom mix contents and gift messaging inputs.',
        'Conducted thorough cross-browser QA and checkout verification.',
      ],
      approach: [
        'Adopted a bold editorial high-contrast visual design with playful, cheeky micro-copy.',
        'Built reusable theme blocks so marketing teams can launch new seasonal candy drops with zero code.',
        'Optimized image assets and drawer transitions to ensure instant mobile responsiveness.',
      ],
      outcome:
        'An engaging, high-converting confectionery storefront that transforms gifting candy into an unforgettable, delightfully cheeky digital experience.',
      image: '/projects/cfs-homepage.jpg',
      imageAlt: 'Candy From Strangers gourmet candy gift boxes and custom box builder storefront capture',
      scrollDuration: 7,
      featured: true,
      accentColor: '#3B82F6',
    },
    {
      slug: 'mystic-cloud',
      number: '05',
      title: 'Mystic Cloud',
      tagline: 'Premium lifestyle device & single-product direct-to-consumer experience',
      category: 'Lifestyle & DTC',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Direct-to-consumer single-product storytelling with clinical compliance and customer verification.',
      summary:
        'A sleek, minimalist direct-to-consumer storefront created for a premium lifestyle device brand. Centers around immersive product storytelling, interactive component exploded views, age-verification compliance, and persistent purchase conversion elements.',
      role: 'Shopify Theme Customization & Conversion Rate Optimization (CRO)',
      techStack: ['Shopify 2.0', 'Liquid', 'Age Gate Compliance', 'Sticky Purchase Flow', 'CSS Animations'],
      focusAreas: [
        'Immersive single-product narrative and feature breakdowns',
        'Compliant age verification modal and regulatory disclosures',
        'Interactive flavor/finish carousel with custom colorways',
        'Sticky bottom add-to-cart bar and bundle-builder checkout',
      ],
      objectives: [
        'Guide first-time visitors through an educational, visually striking product narrative.',
        'Ensure full regulatory compliance with non-intrusive age verification and legal policy architecture.',
        'Maximize checkout conversions with one-click multi-pack bundle selectors.',
      ],
      challenge:
        'Regulated lifestyle products require rigorous compliance safeguards while delivering a frictionless, premium luxury brand feel that converts skeptical shoppers.',
      responsibilities: [
        'Integrated compliant, accessible age verification workflows with persistent session storage.',
        'Built sticky mobile purchase triggers with instant flavor switching and price calculation.',
        'Configured detailed warranty registration and FAQ accordions with structured data markup.',
      ],
      approach: [
        'Utilized a deep charcoal aesthetic with glowing neon accents to evoke premium device craftsmanship.',
        'Structured customer validation testimonials with verified badge indicators.',
        'Tested end-to-end checkout paths to ensure compliance checks do not create cart abandonment.',
      ],
      outcome:
        'A sleek, compliance-certified direct-to-consumer storefront that pairs premium product presentation with optimized conversion metrics.',
      image: '/projects/mystic-cloud-homepage.jpg',
      imageAlt: 'Mystic Cloud lifestyle device and wellness storefront full homepage capture',
      scrollDuration: 8.5,
      featured: true,
      accentColor: '#EC4899',
    },
    {
      slug: 'woof-island',
      number: '06',
      title: 'Woof Island',
      tagline: 'All-natural tropical dog treats, size-tailored chews & subscription pet nutrition',
      category: 'Pet Care & Treats',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Online Store 2.0 theme customization, weight-based treat filtering, and tropical product storytelling.',
      summary:
        'A vibrant tropical-themed dog treat and chew storefront built on Shopify. Designed with size-tailored category filtering (Small, Medium, Large, XL dogs), ingredient transparency callouts (naturally inspired, rawhide-free), customer review validation, and high-conversion drawer cart.',
      role: 'Shopify Theme Customization & Collection Architecture',
      techStack: ['Shopify OS 2.0', 'Liquid', 'Filter & Search API', 'Responsive CSS', 'Customer Reviews Integration'],
      focusAreas: [
        'Weight-based treat categorization (Small, Medium, Large, XL dogs)',
        'Tropical coconut chew storytelling & ingredient transparency callouts',
        'Verified customer review carousels & social proof trust badges',
        'Nutrition FAQ accordions & subscription-ready checkout path',
      ],
      objectives: [
        'Help dog owners quickly identify safe, size-appropriate treats for their pets.',
        'Highlight natural ingredients, dental health benefits, and rawhide-free recipes.',
        'Streamline mobile navigation with sticky category filters and fast add-to-cart flows.',
      ],
      challenge:
        'Pet owners are cautious about treat sizes and chewing safety for different dog weights. The storefront required prominent, visual breed/size filters and clear ingredient disclosures without cluttering mobile screens.',
      responsibilities: [
        'Implemented responsive Liquid sections for "Treats Tailored to Your Dog’s Size & Needs".',
        'Configured dynamic ingredient and nutritional benefit badges across product cards.',
        'Built mobile-optimized collection grids with instant category switching.',
        'Conducted end-to-end device testing across mobile and desktop viewports.',
      ],
      approach: [
        'Paired tropical brand aesthetics with bright pet photography and clean whitespace.',
        'Architected reusable Online Store 2.0 blocks allowing merchants to update collections with drag-and-drop ease.',
        'Optimized asset loading and layout shifts for smooth 60fps scrolling.',
      ],
      outcome:
        'A delightful, high-converting digital storefront that makes finding wholesome pet treats intuitive while boosting merchant promotional agility.',
      image: '/projects/woof-island-homepage.jpg',
      imageAlt: 'Woof Island all-natural tropical dog treats and chews storefront full homepage capture',
      scrollDuration: 9,
      featured: true,
      accentColor: '#0EA5E9',
    },
  ],
};
