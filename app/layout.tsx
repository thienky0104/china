import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '凤冠字帘 — Chinese Phoenix Crown',
  description:
    '一件可以"拨动"的数字文物——七顶中国凤冠悬于午夜蓝的夜幕中，冠下垂落由汉字织成的珠帘，指尖拂过，字缕如流苏般摇曳作响。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  )
}
