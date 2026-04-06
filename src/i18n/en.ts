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
    tagline: "Building tools that make people's lives a little better.",
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

  writing: {
    readMore: 'Read more',
  },

  about: {
    bio: "I'm a software engineer based in Chiba. I love building small, useful tools and writing about things I learn along the way.",
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
