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
      slug: 'bro-storefront',
      number: '02',
      title: 'BRO Storefront',
      tagline: 'Contemporary lifestyle, apparel & streetwear e-commerce experience',
      category: 'Fashion & Apparel',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Full custom theme development, shoppable lookbooks, and mobile-optimized collection layouts.',
      summary:
        'An editorial lifestyle and apparel storefront emphasizing bold typography, oversized campaign imagery, seamless variant selection, and shoppable editorial lookbooks designed for high-conversion fashion drops.',
      role: 'Shopify Theme Customization & Editorial Art Direction',
      techStack: ['Shopify Liquid', 'Theme 2.0 Sections', 'Shoppable Lookbooks', 'Tailwind CSS', 'Figma to Code'],
      focusAreas: [
        'Editorial lookbook browsing and campaign banners',
        'High-density responsive grid with alternating aspect ratios',
        'Quick size & color swatch selection with live inventory feedback',
        'Sticky add-to-cart bar and low-friction mobile checkout',
      ],
      objectives: [
        'Capture the brand’s urban aesthetic through spacious typography and dark/neutral contrast.',
        'Enable rapid product launches and limited-edition drop countdowns in the Shopify Theme Editor.',
        'Deliver a silky-smooth mobile browsing experience for smartphone-first shoppers.',
      ],
      challenge:
        'Streetwear brands rely on high-impact visual storytelling without sacrificing rapid purchase paths. High-res lookbook photography can easily bottleneck page performance if not carefully lazy-loaded and optimized.',
      responsibilities: [
        'Developed custom Liquid section blocks for video hero banners and interactive lookbook hotspots.',
        'Built responsive product cards with hover color-swatch previews and secondary angle reveals.',
        'Configured international currency conversion and localized size recommendation charts.',
      ],
      approach: [
        'Adopted a bold editorial visual framework with crisp typography and clean whitespace.',
        'Built modular sections that allow marketing teams to rearrange collection drops with drag-and-drop ease.',
        'Fine-tuned responsive image breakpoints to guarantee sharp visuals at minimal byte sizes.',
      ],
      outcome:
        'A bold, high-energy fashion storefront that reflects modern streetwear culture and drives immediate product engagement.',
      image: '/projects/bro-homepage.jpg',
      imageAlt: 'BRO contemporary fashion and streetwear storefront full homepage capture',
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
      slug: 'cfs-storefront',
      number: '04',
      title: 'CFS Storefront',
      tagline: 'Sports performance gear, technical product specs & athletic e-commerce',
      category: 'Sports & Performance',
      year: '2026',
      status: 'Client Work',
      statusNote: 'Technical athletic storefront with category architecture, size guides, and performance callouts.',
      summary:
        'A high-performance athletic and training gear storefront built for endurance and fitness athletes. Showcases technical garment attributes (breathability, compression ratings, moisture-wicking technology) with clean product filtering and structured size guidance.',
      role: 'Shopify Storefront Implementation & Technical PDP Architecture',
      techStack: ['Shopify Liquid', 'Theme 2.0 Sections', 'Attribute Callouts', 'Responsive Design', 'UAT Testing'],
      focusAreas: [
        'Technical specification tables & fabric performance callouts',
        'Multi-attribute product filtering (activity, fit, weather, compression)',
        'Interactive athlete sizing chart with centimeter-to-inch toggle',
        'Customer gear reviews with verified athlete height/weight context',
      ],
      objectives: [
        'Help athletes select the exact right gear for their specific training regime and conditions.',
        'Reduce sizing return rates through clear visual diagrams and fit indicators.',
        'Provide merchandising teams with drag-and-drop promotional sections in the theme editor.',
      ],
      challenge:
        'Athletes demand specific technical details before purchasing premium gear. Heavy spec tables often clutter mobile screens and increase bounce rates if not organized with thoughtful progressive disclosure.',
      responsibilities: [
        'Crafted custom product page tabs for fabric technology, care instructions, and durability guarantees.',
        'Implemented rapid variant swatches with real-time stock alerts for fast-selling sizes.',
        'Conducted thorough mobile performance tuning to maintain sub-second navigation between categories.',
      ],
      approach: [
        'Highlighted key performance metrics (stretch, breathability, weather rating) with icon-driven visual gauges.',
        'Built clean, scannable collection pages with sticky filter toolbars on mobile.',
        'Aligned all secondary customer care pages with the brand’s high-energy athletic identity.',
      ],
      outcome:
        'A rugged, professional athletic storefront that instills buyer confidence through technical transparency and rapid navigation.',
      image: '/projects/cfs-homepage.jpg',
      imageAlt: 'CFS athletic training gear and sports performance storefront full homepage capture',
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
  ],
};
