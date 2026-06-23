// All site content lives here — edit this file to update the site.

export const profile = {
  firstName: 'Muhammad Aqeel',
  lastName: 'Arshad',
  role: 'Full-Stack Developer',
  years: '3+',
  email: 'aqeelarshad811@gmail.com',
  phone: '+923338283410',
  phoneDisplay: '+92 333 8283410',
  whatsapp: '923338283410',
  whatsappMsg: "Hi Aqeel, I came across your portfolio and I'd like to connect about a Full-Stack Developer opportunity.",
  linkedinUrl: 'https://www.linkedin.com/in/aqeel-arshad-9b77b3347/',
  linkedinText: 'linkedin.com/in/aqeel-arshad',
  location: 'Lahore, PK',
}

// Built WhatsApp click-to-chat link with pre-filled message
export const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMsg)}`

export const sections = [
  { id: 'about', label: 'about', num: '01' },
  { id: 'stack', label: 'stack', num: '02' },
  { id: 'experience', label: 'experience', num: '03' },
  { id: 'work', label: 'work', num: '04' },
  { id: 'contact', label: 'contact', num: '05' },
]

export const stats = [
  { v: '3+', vEm: true, suffix: ' yrs', k: 'Experience' },
  { v: 'Full-Stack', compact: true, k: '+ AI / MCP' },
  { v: 'EST', k: 'US hours' },
]

export const about = [
  "I\u2019m a full-stack developer based in Lahore, working US Eastern hours. Over the last three years I\u2019ve shipped production software end to end \u2014 designing services in Node, TypeScript and NestJS, modeling data with Prisma and PostgreSQL, and building the React and Next.js interfaces on top.",
  "Lately most of my work lives at the seams between systems: REST and microservice integrations, MCP-based service layers, and AI/chat backends that have to talk to the outside world reliably. I care about clean, readable code and features that ship on schedule.",
]

export const facts = [
  { k: 'Experience', big: '3+', v: 'years' },
  { k: 'Based in', v: 'Lahore, PK' },
  { k: 'Works in', v: 'EST timezone' },
  { k: 'Focus', v: 'Node · NestJS · React' },
  { k: 'Degree', v: 'BS Computer Science' },
  { k: 'Status', v: 'Open to roles' },
]

export const stack = [
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'React Hooks', 'Context', 'TypeScript', 'Tailwind CSS', 'MUI', 'Styled Components'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Microservices', 'GraphQL', 'Socket.io', 'WebSocket'] },
  { title: 'Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'TypeORM', 'Mongoose', 'Redis', 'Elasticsearch'] },
  { title: 'Integrations & Infra', items: ['Twilio', 'Stripe', 'OAuth', 'AWS', 'Docker', 'MCP orchestration'] },
  { title: 'Testing & Process', items: ['Jest', 'Cypress', 'Agile / Scrum'] },
  { title: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'Python'] },
]

export const experience = [
  {
    role: 'MERN Stack Developer', when: '07/2025 — Present', place: 'PowerHouse · Remote',
    bullets: [
      'Built and maintained scalable backend services in Node.js, TypeScript and NestJS for legal and sales-focused platforms.',
      'Delivered REST APIs, microservice integrations and MCP-based service layers powering end-to-end business workflows.',
      'Modeled data with Prisma and PostgreSQL, improving query performance, reliability and consistency.',
      'Integrated Twilio (SMS/Voice) for automated notifications and communication workflows.',
      'Built AI/chat backend capabilities — session management, MCP tool orchestration and external service integration.',
      'Partnered with frontend, product and QA to deliver production-ready features on schedule.',
    ],
  },
  {
    role: 'Full Stack Engineer', when: '10/2023 — 06/2025', place: 'AMOXT Solutions Inc.',
    bullets: [
      'Developed web applications with React and NestJS, owning features from design doc to production.',
      'Fixed bugs and improved application performance across the stack.',
      'Documented changes to existing functionality and implemented new requirements from design docs.',
      'Worked closely with QA and the Product Manager to implement design requirements.',
    ],
  },
  {
    role: 'BS, Computer Science', when: '01/2021 — 01/2024', place: 'Gujarat University',
    bullets: ['Bachelor\u2019s degree in Computer Science — foundations in data structures, systems and software engineering.'],
  },
]

export const work = [
  { idx: 'W-01', title: 'Legal & Sales Platform Backend', at: '@ PowerHouse', tech: ['NestJS', 'Node', 'Prisma', 'PostgreSQL'],
    desc: 'Scalable backend services and REST APIs powering legal- and sales-focused workflows, structured across microservices with clean, consistent data models.' },
  { idx: 'W-02', title: 'AI Chat & MCP Service Layer', at: '@ PowerHouse', tech: ['TypeScript', 'MCP', 'Node', 'REST'],
    desc: 'A chat backend with session management and MCP tool orchestration — coordinating multiple external services behind a single conversational interface.' },
  { idx: 'W-03', title: 'Comms Automation', at: '@ PowerHouse', tech: ['Twilio', 'Node', 'Webhooks'],
    desc: 'Automated SMS and voice notifications wired into business workflows with Twilio, so the right message goes out at the right moment — hands-off.' },
  { idx: 'W-04', title: 'Web Application Platform', at: '@ AMOXT Solutions', tech: ['React', 'NestJS', 'Jest', 'Cypress'],
    desc: 'Full-stack feature work and performance tuning on a production React + NestJS application, backed by automated tests with Jest and Cypress.' },
]
