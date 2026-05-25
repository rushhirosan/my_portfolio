export type LocalizedString = { en: string; ja: string }

export type ProductLinks = {
  web?: string
  appStore?: LocalizedString
}

export type Product = {
  slug: string
  name: string
  description: LocalizedString
  /** Single destination for most products */
  url?: string
  /** Web and/or App Store when both exist */
  links?: ProductLinks
  image?: string
}

export const products: Product[] = [
  {
    slug: 'trends-dashboard',
    name: 'Trends Dashboard',
    description: {
      en: 'A dashboard that aggregates Japanese trend signals from news, search, tech, and market sources in one place.',
      ja: 'ニュース・検索・テック・マーケットなどの日本向けトレンドを横断して一覧できるダッシュボードです。',
    },
    url: 'https://trends-dashboard.fly.dev/',
  },
  {
    slug: 'talk-shuffle',
    name: 'Talk Shuffle',
    description: {
      en: 'A web and iOS app that helps teams choose conversation topics using 3D dice, themed decks, and local session history.',
      ja: '3Dサイコロとテーマ別カードで会話テーマを決め、セッション履歴も端末内で管理できるWeb・iOSアプリです。',
    },
    links: {
      web: 'https://talk-seed.web.app/',
      appStore: {
        ja: 'https://apps.apple.com/jp/app/talk-shuffle/id6760679042',
        en: 'https://apps.apple.com/us/app/talk-shuffle/id6760679042',
      },
    },
  },
  {
    slug: 'eiken-practice',
    name: 'Eiken Practice',
    description: {
      en: 'An Eiken practice web app where learners can log in and continue study sessions with persistent accounts.',
      ja: '英検学習向けに、ログインして継続的に練習できるWebアプリです。',
    },
    url: 'https://eiken-app.fly.dev/',
  },
  {
    slug: 'soccer-practice-search',
    name: 'Soccer Practice Search',
    description: {
      en: 'A searchable soccer training video app with filters for purpose, group size, level, and channel plus favorites.',
      ja: '目的・人数・レベル・チャンネルでサッカー練習動画を検索し、お気に入り管理もできる検索サイトです。',
    },
    url: 'https://soccer-practice-search.fly.dev/',
  },
]
