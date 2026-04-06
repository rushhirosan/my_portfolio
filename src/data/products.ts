export type LocalizedString = { en: string; ja: string }

export type Product = {
  slug: string
  name: string
  description: LocalizedString
  url: string
  tags: string[]
  image?: string
}

export const products: Product[] = [
  {
    slug: 'product-a',
    name: 'Product A',
    description: {
      en: 'A dashboard that aggregates Japanese trend signals from news, search, tech, and market sources in one place.',
      ja: 'ニュース・検索・テック・マーケットなどの日本向けトレンドを横断して一覧できるダッシュボードです。',
    },
    url: 'https://trends-dashboard.fly.dev/',
    tags: ['Trends', 'Dashboard'],
  },
  {
    slug: 'product-b',
    name: 'Product B',
    description: {
      en: 'A searchable soccer training video app with filters for purpose, group size, level, and channel plus favorites.',
      ja: '目的・人数・レベル・チャンネルでサッカー練習動画を検索し、お気に入り管理もできる検索サイトです。',
    },
    url: 'https://soccer-practice-search.fly.dev/',
    tags: ['Sports', 'Search'],
  },
  {
    slug: 'product-c',
    name: 'Product C',
    description: {
      en: 'An Eiken practice web app where learners can log in and continue study sessions with persistent accounts.',
      ja: '英検学習向けに、ログインして継続的に練習できるWebアプリです。',
    },
    url: 'https://eiken-app.fly.dev/',
    tags: ['Education', 'Language Learning'],
  },
  {
    slug: 'product-d',
    name: 'Product D',
    description: {
      en: 'An iOS app that helps teams choose conversation topics using 3D dice, themed decks, and local session history.',
      ja: '3Dサイコロとテーマ別カードで会話テーマを決め、セッション履歴も端末内で管理できるiOSアプリです。',
    },
    url: 'https://apps.apple.com/us/app/talk-seed/id6760679042',
    tags: ['iOS', 'Communication'],
  },
]
