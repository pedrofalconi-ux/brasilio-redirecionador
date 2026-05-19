import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Work_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brasilo Restaurante | Links',
  description:
    'Sabor e conexão em cada prato. Siga o Brasilo Restaurante nas redes sociais, avalie no Google e confira nosso cardápio.',
  keywords: ['restaurante', 'brasilo', 'cardápio', 'comida brasileira'],
  openGraph: {
    title: 'Brasilo Restaurante',
    description: 'Sabor e conexão em cada prato',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${workSans.variable}`}
    >
      <head>
        {/* Material Symbols — self-hosted via Google Fonts CDN */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
