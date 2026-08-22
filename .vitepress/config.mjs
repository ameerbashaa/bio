import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ameer Basha | Marriage Biodata',
  description: 'Marriage biodata of Ameer Basha J, an educated and family-oriented Muslim groom from Bengaluru.',
  base: '/bio/',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#b73c5d' }],
    ['link', { rel: 'icon', href: '/bio/favicon.svg' }],
    ['meta', { property: 'og:title', content: 'Ameer Basha J | Marriage Biodata' }],
    ['meta', { property: 'og:description', content: 'A refined biodata profile presented with VitePress and modern animation.' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Profile', link: '#profile' },
      { text: 'Family', link: '#family' },
      { text: 'Education', link: '#education' },
      { text: 'Contact', link: '#contact' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ameerbashaa' }
    ],
    footer: {
      message: 'Prepared with love',
      copyright: '© Ameer Basha J'
    }
  }
})
