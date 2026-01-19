/**
 * 網站資料設定檔
 * 可依需求修改以下資料
 */

// 個人資訊
export const siteConfig = {
  name: 'q_nnn412',
  title: 'Q的狗窩',
  description: '記錄我與世界交流的點滴',
  author: 'Q',
  
  // 社群連結
  social: {
    github: 'https://github.com/NiaN0412/',
    instagram: 'https://www.instagram.com/q_nnn412/',
    email: 'mailto:h0980199619@gmail.com',
  },
  
  // 外部社群導向
  community: {
    name: 'HackIt',
    url: 'https://hackit.tw',
  },
}

// 關鍵字標籤（首頁展示用）
export const keywords = [
  'TypeScript',
  'React',
  'Philosophy',
  'Writing',
]

// 友站列表
export const friendSites = [
  {
    name: 'HackIt',
    url: 'https://hackit.tw',
    description: '延伸互動場域，社群節點',
  },
  // 在此添加更多友站...
]

// 經歷時間軸
export const journeyPoints = [
  {
    year: '2024',
    title: {
      'zh-TW': '選擇深耕社群',
      en: 'Chose to focus on community',
      ja: 'コミュニティに注力することを選択',
    },
    description: {
      'zh-TW': '從獨立開發轉向社群連結，理解到技術不只是工具，而是與人互動的媒介。',
      en: 'Shifted from independent development to community connection, understanding that technology is not just a tool, but a medium for interacting with people.',
      ja: '独立した開発からコミュニティへの接続に移行し、技術が単なるツールではなく、人々と対話するためのメディアであることを理解しました。',
    },
    type: 'turning' as const,
  },
  // 在此添加更多經歷節點...
]

// 部落格文章資料結構
export interface BlogPost {
  id: string
  slug: string
  title: Record<string, string>
  excerpt: Record<string, string>
  date: string
  tags: string[]
  status: 'draft' | 'published'
}

// 示範文章（實際可從 CMS 或 Markdown 檔案載入）
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'writing-and-thinking',
    title: {
      'zh-TW': '關於寫作與思考的距離',
      en: 'On the Distance Between Writing and Thinking',
      ja: '書くことと考えることの距離について',
    },
    excerpt: {
      'zh-TW': '寫作不是為了證明什麼，而是為了釐清自己的想法。',
      en: 'Writing is not to prove something, but to clarify one\'s thoughts.',
      ja: '書くことは何かを証明するためではなく、自分の考えを明確にするためです。',
    },
    date: '2025-12-15',
    tags: ['思考', '寫作'],
    status: 'published',
  },
]
