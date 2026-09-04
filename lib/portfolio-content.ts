export const portfolioContent = {
  name: 'Henriette Riis Steinbach',
  email: 'mail@henrietteriis.dk',
  links: {
    github: 'https://github.com/Freydiz',
    linkedin: 'https://www.linkedin.com/in/henriette-riis-steinbach/',
    cv: '/resume.pdf'
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ],
  about: {
    heading: 'Frontend developer with a passion for user-centric digital experiences.',
    paragraphs: [
      "I'm a frontend developer with 4+ years of professional experience building customer-facing web applications with React, Next.js and TypeScript.",
      "I've worked in both large-scale product development and fast-moving agency environments, building everything from reusable UI components and complex e-commerce journeys to B2B experiences and performance improvements.",
      'I particularly enjoy the intersection between engineering and user experience — turning complex requirements into interfaces that feel simple, fast and intuitive. I care about maintainable code, accessibility and performance, and I enjoy working closely with designers, backend developers and product teams.',
      "Today I'm also increasingly incorporating AI into my development workflow and exploring how it can become part of the products and experiences we build."
    ],
    highlights: [
      {
        title: '4+ years',
        description: 'professional experience'
      },
      {
        title: 'Product & agency',
        description: 'environments'
      },
      {
        title: 'Focused on',
        description: 'user experience, performance and accessible solutions'
      }
    ]
  },
  experience: [
    {
      dates: 'Aug 2025 – Present',
      role: 'Frontend Developer',
      company: 'GRAFIKR A/S',
      description:
        'Building customer-facing e-commerce experiences with a focus on reusable UI, performance, accessibility and maintainability.',
      technologies: ['TypeScript', 'Liquid', 'Shopify', 'Tailwind CSS']
    },
    {
      dates: 'Feb 2022 – Apr 2025',
      role: 'Frontend Engineer',
      company: 'WhiteAway Group A/S',
      description:
        'Built and maintained large-scale customer-facing applications and contributed to the migration of a legacy frontend to Next.js SSR.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Storybook', 'Jest', 'Playwright']
    }
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript']
    },
    {
      title: 'UI & Styling',
      items: ['Tailwind CSS', 'Styled-components', 'Storybook', 'GSAP']
    },
    {
      title: 'Quality & Performance',
      items: ['Jest', 'Playwright', 'Accessibility', 'Web Performance']
    },
    {
      title: 'Platform & Integration',
      items: ['Shopify', 'Liquid', 'REST APIs', 'Git', 'CI/CD']
    }
  ]
} as const;

export type PortfolioContent = typeof portfolioContent;
