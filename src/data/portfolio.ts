export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullContent: string;
  client: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fintech Market Entry - West Africa',
    category: 'Market Entry',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3ae55d54-301a-4dac-aaab-e3978e0c4f08/project-showcase-3-7d46a0b2-1771850483832.webp',
    description: 'Developing a comprehensive roadmap for a leading European fintech expanding into Nigeria and Ghana.',
    fullContent: 'This project involved deep-dive regulatory analysis, partnership identification, and localized product strategy. We facilitated introductions to key stakeholders in the Central Bank of Nigeria and major local commercial banks.',
    client: 'EcoPay Global',
    date: 'March 2023'
  },
  {
    id: '2',
    title: 'Nairobi Tech Hub Ecosystem Strategy',
    category: 'Tech Ecosystems',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3ae55d54-301a-4dac-aaab-e3978e0c4f08/tech-hub-background-5b6419db-1771850490290.webp',
    description: 'Revitalizing the innovation ecosystem through public-private partnerships and incubator programs.',
    fullContent: 'Working with the Kenyan Ministry of ICT, we designed a framework for a new innovation district that integrates universities, startups, and venture capital firms under one umbrella.',
    client: 'Kenya Innovation Agency',
    date: 'January 2024'
  },
  {
    id: '3',
    title: 'AgriTech Investment Readiness',
    category: 'Investment Readiness',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3ae55d54-301a-4dac-aaab-e3978e0c4f08/project-showcase-1-86c37bea-1771850489327.webp',
    description: 'Preparing five high-growth AgriTech startups for Series A funding rounds, totaling $15M.',
    fullContent: 'We conducted financial audits, business model refining, and pitch coaching. All five startups successfully closed their rounds within 6 months of the engagement.',
    client: 'Venture Capital Africa',
    date: 'September 2023'
  },
  {
    id: '4',
    title: 'Data-Driven Governance Portal',
    category: 'Strategy & Consulting',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3ae55d54-301a-4dac-aaab-e3978e0c4f08/project-showcase-2-0e14b587-1771850485037.webp',
    description: 'Advising on a digital transformation project for government transparency and resource allocation.',
    fullContent: 'A multi-year strategy focused on implementing blockchain for land registry and AI for predictive infrastructure maintenance.',
    client: 'Regional Government',
    date: 'June 2023'
  },
  {
    id: '5',
    title: 'Cross-Border Logistics Scaling',
    category: 'Market Entry',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Scaling a logistics startup from South Africa into the SADC region.',
    fullContent: 'Strategic planning for cross-border operations, including customs integration and local hiring strategies.',
    client: 'SwiftLogix',
    date: 'October 2023'
  },
  {
    id: '6',
    title: 'Renewable Energy VC Fund Setup',
    category: 'Investment Readiness',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    description: 'Structuring a $50M fund focused on solar energy startups in East Africa.',
    fullContent: 'Developing the investment thesis, risk management framework, and LP outreach strategy.',
    client: 'GreenGrowth Partners',
    date: 'February 2024'
  }
];

export const awards = [
  { title: 'Top African Tech Advisor', year: '2023', organization: 'AfriTech Awards' },
  { title: 'Innovation Champion', year: '2022', organization: 'Lagos Tech Week' },
  { title: 'Consultant of the Year', year: '2021', organization: 'Pan-African Business Review' }
];

export const testimonials = [
  {
    name: 'Sarah Mensah',
    role: 'CEO, Fintech Innovations',
    quote: "His deep understanding of the West African regulatory landscape was instrumental in our successful launch in Nigeria.",
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'David Okafor',
    role: 'Managing Partner, VC Africa',
    quote: "A visionary consultant who doesn't just see the future of African tech, but builds the roadmap to get there.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];