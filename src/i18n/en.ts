export const en = {
  lang: 'en',
  locale: 'en_US',

  meta: {
    title: 'Rush(y) Hirosan — Portfolio',
    description: 'Personal portfolio of Rush(y) Hirosan — products and writing.',
  },

  nav: {
    products: 'Products',
    writing: 'Writing',
    about: 'About',
    links: 'Links',
  },

  hero: {
    tagline: 'Employee, indie developer, youth soccer coach, and Japanese-English bilingual.',
    socialLabel: 'Social',
  },

  sections: {
    products: 'Products',
    writing: 'Writing',
    about: 'About',
    links: 'Links',
  },

  product: {
    visit: 'Visit',
  },

  about: {
    bio: "I'm a full-time employee and indie developer based in Chiba.",
    profileTitle: 'Quick profile',
    profile: [
      'Full-time employee and indie developer',
      'In my 40s, living with my wife and two children',
      'Youth soccer coach',
      'Japanese-English bilingual',
    ],
    interestsTitle: 'Interests',
    interests: [
      'Competitive programming',
      'AI',
      'Soccer and futsal',
      'Running',
      'Organizational theory',
      'Leadership and management',
      'Focus and habits',
      'Public speaking',
      'Anger management',
    ],
  },

  footer: {
    copyright: '© 2026 Rush(y) Hirosan',
  },

  a11y: {
    switchToJa: 'Switch to Japanese',
    externalLink: 'Opens in a new tab',
    skipToMain: 'Skip to main content',
  },
} as const

export type I18n = typeof en
