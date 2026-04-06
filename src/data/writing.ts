import type { LocalizedString } from './products'

export type Article = {
  title: LocalizedString
  url: string
  publishedAt: string // YYYY-MM-DD
  platform?: string
}

export const articles: Article[] = [
  {
    title: {
      en: 'Medium',
      ja: 'Medium',
    },
    url: 'https://medium.com/@rushhirosan',
    publishedAt: '2026-04-06',
    platform: 'Medium',
  },
  {
    title: {
      en: 'note',
      ja: 'note',
    },
    url: 'https://note.com/_hiro_san',
    publishedAt: '2026-04-06',
    platform: 'note',
  },
]
