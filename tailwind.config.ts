import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // DUO Safety Orijinal Renk Paleti
        'duo-deep-blue': '#0f5f96',
        'duo-bright-blue': '#137dc5',
        'duo-navy': '#0a3c5f',
        
        // Tasarım Dokümanındaki Yüzey Renkleri
        'surface': '#f9f9f9',
        'surface-card': '#ffffff',
        'surface-container': '#eeeeee',
        'surface-container-low': '#f3f3f3',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#41474f',
        
        // Durum/Uyarı Renkleri
        'error': '#ba1a1a',
        'compliance-green': '#10B981',
      },
      fontFamily: {
        // Kurumsal tipografi (Next.js font optimizasyonu ile kullanılacak)
        'display': ['var(--font-space-grotesk)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        'gutter': '1.5rem',
        'margin': '2rem',
      }
    },
  },
  plugins: [],
}
export default config