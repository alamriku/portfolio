export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  role: string;
  year: string;
  featured?: boolean;
  link?: { label: string; url: string };
  caseStudyUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  stars?: number;
  kind: 'review' | 'recognition';
}

export interface Article {
  title: string;
  url: string;
  blurb: string;
  date: string;
  readMins: number;
  tags: string[];
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export const profile = {
  name: 'Kazi Badrul',
  title: 'Full Stack Developer',
  tagline: 'I build bidirectional sync engines, Shopify apps, and browser extensions — Laravel on the back, React on the front.',
  years: '4+',
  location: 'Chittagong, Bangladesh',
  email: 'kazi.badrul.alam96@gmail.com',
  about: [
    'Software Engineer at WPPOOL with 4+ years shipping production systems across e-commerce, sync tooling, and browser extensions. Self-taught from a non-CS background — I learn by building.',
    'My work lives at the seams between platforms: Shopify ↔ Google Sheets, browsers ↔ cloud storage, marketplaces ↔ dropshipping backends. I care about queue architecture, API rate limits, and shaving latency off the hot path.',
  ],
  socials: [
    { label: 'GitHub', handle: 'alamriku', url: 'https://github.com/alamriku' },
    { label: 'LinkedIn', handle: 'kazi-badrul', url: 'https://www.linkedin.com/in/kazi-badrul' },
    { label: 'Medium', handle: 'alamriku069', url: 'https://medium.com/@alamriku069' },
    { label: 'Dev.to', handle: 'alamriku', url: 'https://dev.to/alamriku' },
  ],
  skills: {
    Languages: ['PHP', 'JavaScript', 'TypeScript', 'SQL'],
    Frameworks: ['Laravel', 'React', 'FilamentPHP', 'CodeIgniter'],
    Platforms: ['Shopify App Dev', 'Chrome Extensions', 'WordPress', 'Cloudflare Workers'],
    Data: ['MySQL', 'Redis', 'GraphQL'],
    Infra: ['Docker', 'AWS Lambda', 'EventBridge', 'Git'],
  },
};

export const projects: Project[] = [
  {
    name: 'FlexSync',
    tagline: 'Bidirectional real-time sync between Shopify and Google Sheets.',
    description:
      'A Shopify public app that lets merchants export products, variants, and inventory into Google Sheets, bulk-edit them in a familiar spreadsheet, and sync changes back to Shopify automatically. Built around a serialized bulk-operation queue and webhook-driven updates so two systems never drift out of step.',
    stack: ['Laravel 12', 'React 18', 'TypeScript', 'MySQL', 'Redis', 'Shopify GraphQL', 'Google Sheets API', 'Apps Script'],
    highlights: [
      'Solo-built end to end — architecture, backend, frontend, shipping',
      'Serves 400+ merchants in production',
      'Handles 4M+ requests a month via a serialized queue + MySQL index optimization',
      'Cut sync latency 60% with buffered webhook processing',
      'Formula sync — spreadsheet price/stock formulas push straight back to Shopify',
    ],
    role: 'Software Engineer · WPPOOL',
    year: '2023 — Present',
    featured: true,
    link: { label: 'Shopify App Store', url: 'https://apps.shopify.com/flex-stock-sync' },
    caseStudyUrl: '/flexsync',
  },
  {
    name: 'Hoodsly Connector',
    tagline: 'Custom Shopify app that breaks the 3-option product limit.',
    description:
      'A custom Shopify app enabling 30+ product configuration options — well past Shopify\'s native 3-option cap — with a React theme app extension that renders configurators dynamically on the storefront.',
    stack: ['Laravel', 'React', 'Shopify Theme Extension', 'Webhooks'],
    highlights: [
      'Enabled 30+ product configuration options',
      'React theme app extension for dynamic storefront rendering',
      'Third-party API integration via Laravel webhooks for automated product imports',
      'Reduced merchant setup time by 75% with custom storefront blocks',
    ],
    role: 'Software Engineer · WPPOOL',
    year: '2024',
    featured: true,
  },
  {
    name: 'Clippy',
    tagline: 'Screen-recorder Chrome extension with a Cloudflare Stream backend.',
    description:
      'An end-to-end screen recording Chrome extension: capture, store, and share videos. Backed by a FilamentPHP admin and Cloudflare Stream/Workers for video storage and delivery.',
    stack: ['Chrome Extension', 'FilamentPHP', 'Cloudflare Stream', 'Cloudflare Workers'],
    highlights: [
      'End-to-end capture → storage → sharing pipeline',
      'FilamentPHP backend for management',
      'Handled 500+ recordings during beta',
    ],
    role: 'Software Engineer · WPPOOL',
    year: '2024',
    featured: true,
  },
  {
    name: 'Slack Follow-up Task Bot',
    tagline: 'Cuts down repetitive standup pings by auto-assigning tasks.',
    description:
      'A Slack bot that reduces the volume of manual status pings on a team by automatically assigning and tracking follow-up tasks.',
    stack: ['Slack API', 'Laravel'],
    highlights: ['Automatic task assignment', 'Fewer manual status-update pings'],
    role: 'Software Engineer · WPPOOL',
    year: '2024',
  },
  {
    name: 'MoveUp',
    tagline: 'Published Shopify app + Chrome extension for dropshipping.',
    description:
      'A published Shopify app for dropshipping through WooCommerce and Shopify. Set up the full Shopify app config and wired Shopify webhook events through an Amazon EventBridge + Lambda pipeline. Paired with a companion Chrome extension.',
    stack: ['Shopify App', 'AWS Lambda', 'EventBridge', 'Chrome Extension', 'Laravel'],
    highlights: [
      'Published Shopify app with full config setup',
      'Shopify webhooks routed via AWS EventBridge + Lambda',
      'Companion Chrome extension for dropshipping workflows',
    ],
    role: 'Software Engineer · MoveOn',
    year: '2021 — 2023',
  },
  {
    name: 'Ali2BD Assistant & Scrapers',
    tagline: 'Order-fulfillment automation and marketplace scraping packages.',
    description:
      'Automated order fulfillment from AliExpress and Amazon into Ali2BD, plus a set of NPM packages that scrape product data from Amazon, AliExpress, 1688, and Taobao. Also built the Ali2BD support panel in React.',
    stack: ['Laravel', 'Laravel Queues', 'React', 'Ant Design', 'NPM Packages'],
    highlights: [
      'Automated fulfillment from AliExpress & Amazon',
      'NPM scraping packages for Amazon, AliExpress, 1688, Taobao',
      'Bulk order sync with third-party items via Laravel queues',
      'React + Ant Design support panel',
    ],
    role: 'Software Engineer · MoveOn',
    year: '2021 — 2023',
  },
  {
    name: 'Thumb-Blocker',
    tagline: 'A Chrome extension that hides YouTube thumbnails.',
    description:
      'A pet-project Chrome extension that strips thumbnails from YouTube to cut clickbait-driven distraction.',
    stack: ['Chrome Extension', 'JavaScript'],
    highlights: ['Hides YouTube thumbnails for focus'],
    role: 'Pet project',
    year: '2023',
  },
];

export const proof = {
  lead:
    "FlexSync serves 400+ merchants — but the feedback I'm proudest of isn't about the feature list. It's about showing up. When a merchant hit an edge case that wasn't even ours to fix, we stayed on it until it was solved. That's the reputation I want the work to carry.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Super helpful app and passionate, supportive developers. They really spent time trying to solve an issue for me when they didn't have to! Thanks so much!",
    author: 'lizfrydesign',
    role: '5-star review · Shopify App Store',
    stars: 5,
    kind: 'review',
  },
  {
    quote: 'Thanks Team for the support 🎉 Thanks @Badrul Alam vai',
    author: 'Azizul Haque',
    role: 'Team shout-out · WPPOOL',
    kind: 'recognition',
  },
];

export const writing = {
  intro:
    'I write to think — digging into the parts of PHP, Laravel, and the web that usually stay hidden. Some in English, some in Bangla for developers back home.',
  profileUrl: 'https://dev.to/alamriku',
};

export const articles: Article[] = [
  {
    title: 'Async PHP বুঝতে গিয়ে যা শিখলাম — Fibers, epoll, আর PHP 8.6',
    url: 'https://dev.to/alamriku/sync-php-developer-hisebe-async-php-bujhte-giye-yaa-shikhlaam-fibers-epoll-aar-php-86-462j',
    blurb:
      'A sync-first PHP developer\'s dive into async: Fibers, the epoll event loop, and what PHP 8.6 changes. Written in Bangla for developers learning past the request-response model.',
    date: 'Jul 2025',
    readMins: 4,
    tags: ['php', 'async', 'fibers'],
    featured: true,
  },
  {
    title: 'Comprehensive Software Engineering Technical Interview Guide',
    url: 'https://dev.to/alamriku/comprehensive-software-engineering-technical-interview-guide-3l38',
    blurb:
      'A long-form resource covering core software engineering concepts — from inheritance vs. composition to system design — built for interview prep.',
    date: 'May 2025',
    readMins: 45,
    tags: ['career', 'interview'],
  },
  {
    title: 'Laravel Guards: A Comprehensive Guide',
    url: 'https://dev.to/alamriku/laravel-guards-a-comprehensive-guide-2fdo',
    blurb: "A deep look at Laravel's authentication guards — how they work under the hood and when to reach for a custom one.",
    date: 'May 2025',
    readMins: 7,
    tags: ['laravel', 'auth'],
  },
  {
    title: 'How to Integrate PayPal Payment Gateway in Laravel',
    url: 'https://dev.to/alamriku/how-to-integrate-paypal-payment-gateway-in-laravel-8-x-ba6',
    blurb: 'A practical, step-by-step walkthrough of wiring PayPal payments into a Laravel app.',
    date: 'Aug 2021',
    readMins: 7,
    tags: ['laravel', 'payments'],
  },
  {
    title: 'Lazy Loading & Lazy Collections in Laravel',
    url: 'https://dev.to/alamriku/lazy-loading-lazy-collection-in-laravel-5d2i',
    blurb: "When and why to reach for lazy collections to keep memory flat over large Eloquent result sets.",
    date: 'Aug 2021',
    readMins: 2,
    tags: ['laravel', 'performance'],
  },
  {
    title: "Docker: RUN touch doesn't create the file",
    url: 'https://dev.to/alamriku/docker-run-touch-doesnt-create-file-1fjd',
    blurb: 'A short debugging note on a confusing Docker layer-caching gotcha.',
    date: 'Jan 2024',
    readMins: 2,
    tags: ['docker'],
  },
];

export const experience: Experience[] = [
  {
    company: 'WPPOOL',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh · Remote',
    period: 'Aug 2023 — Present',
    points: [
      'Shipped FlexSync — bidirectional Shopify ↔ Google Sheets sync serving 400+ merchants.',
      'Built Hoodsly Connector, a custom Shopify app with 30+ product options via theme extensions.',
      'Built Clippy, a screen-recorder Chrome extension on a Cloudflare Stream/Workers backend.',
    ],
  },
  {
    company: 'MoveOn',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2021 — Jul 2023',
    points: [
      'Shipped features on Ali2BD & MoveOn dropshipping platforms.',
      'Published the MoveUp Shopify app; wired webhooks through AWS EventBridge + Lambda.',
      'Built NPM scraping packages and the Ali2BD fulfillment assistant.',
    ],
  },
  {
    company: 'INI LAB',
    role: 'Software Developer',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2021 — Sep 2021',
    points: ['Built a Learning Management System.'],
  },
  {
    company: 'Soft-Touch',
    role: 'Software Developer',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2020 — Mar 2021',
    points: [
      'Built an E-paper platform with jQuery and Laravel.',
      'Customized CodeCanyon products (POS, news portal, pharmacy) and WordPress themes.',
    ],
  },
  {
    company: 'Synchronise',
    role: 'Junior Developer',
    location: 'Chittagong, Bangladesh',
    period: 'Feb 2019 — Mar 2020',
    points: ['Built accounting software and an SMS management system with CodeIgniter.'],
  },
];
