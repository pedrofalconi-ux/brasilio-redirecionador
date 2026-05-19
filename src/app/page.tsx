import Image from 'next/image'

/* ──────────────────────────────────────────
   Tipos
────────────────────────────────────────── */
interface LinkItem {
  id: string
  href: string
  external?: boolean
  icon: string
  iconFill?: boolean
  iconColor?: string
  label: string
  variant?: 'default' | 'primary'
}

/* ──────────────────────────────────────────
   Dados
────────────────────────────────────────── */
const links: LinkItem[] = [
  {
    id: 'whatsapp',
    href: '#',
    icon: 'chat',
    iconFill: true,
    iconColor: 'text-primary',
    label: 'Comunidade WhatsApp',
  },
  {
    id: 'google-review',
    href: 'https://www.google.com/search?sca_esv=a362b3da5b4ff7be&sxsrf=ANbL-n7YKBYA9NpPyh3xs68ytI4azpmdaw:1779055181655&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObOYXGOnbh7xGtJ1_s7BjgbpsplhfjAtGEy0fu-27Z14HOBpm2FpFB5MRHGWKYyauHuDAMUy300LCCqFpbFeTWwgvGDPUMlJe5Y8SUJEJRJETWseZQ%3D%3D&q=Restaurante+Brasilio+Coment%C3%A1rios&sa=X&ved=2ahUKEwjzs42BqcGUAxW4p5UCHcewG7wQ0bkNegQINBAH&biw=1440&bih=812&dpr=2',
    external: true,
    icon: 'star',
    iconFill: true,
    iconColor: 'text-[#FFB400]',
    label: 'Avalie no Google',
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/brasiliorestaurante',
    external: true,
    icon: 'photo_camera',
    iconColor: 'text-primary',
    label: 'Siga no Instagram',
  },
  {
    id: 'cardapio',
    href: '/cardapio_gráfica_cropped.pdf',
    external: true,
    icon: 'restaurant',
    label: 'Nosso Cardápio',
    variant: 'primary',
  },
]

const socialLinks = [
  { id: 'website', href: '#',                                        icon: 'public', label: 'Site' },
  { id: 'email',   href: '#',                                        icon: 'mail',   label: 'E-mail' },
  { id: 'phone',   href: '#',                                        icon: 'call',   label: 'Telefone' },
]

/* ──────────────────────────────────────────
   Sub-componentes
────────────────────────────────────────── */

function Header() {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-3 max-w-[480px] mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Brasilo Restaurante Logo"
            width={32}
            height={32}
            className="h-8 w-auto rounded-full object-cover"
          />
          <span className="text-on-surface font-semibold text-lg tracking-tight font-sans">
            Brasilo Restaurante
          </span>
        </div>
        <button
          id="btn-share"
          aria-label="Compartilhar"
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </header>
  )
}

function ProfileSection() {
  return (
    <section className="mb-8 animate-fade-slide-in text-center">
      <div className="relative w-24 h-24 mb-4 mx-auto">
        <div className="absolute inset-0 bg-primary/10 rounded-full pulse-ring" />
        <Image
          src="/logo.jpg"
          alt="Brasilo Restaurante"
          width={96}
          height={96}
          className="w-full h-full object-cover rounded-full shadow-lg border-2 border-surface"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold text-on-surface mb-1 font-sans">
        Brasilo Restaurante
      </h1>
      <p className="text-secondary font-body tracking-tight">
        Sabor e conexão em cada prato
      </p>
    </section>
  )
}

function LinkCard({ link }: { link: LinkItem }) {
  const externalProps = link.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (link.variant === 'primary') {
    return (
      <a
        id={`link-${link.id}`}
        href={link.href}
        {...externalProps}
        className="group relative flex items-center justify-center w-full p-5 bg-primary text-on-primary rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined">{link.icon}</span>
          <span className="font-bold text-sm uppercase tracking-widest font-sans">
            {link.label}
          </span>
        </div>
      </a>
    )
  }

  return (
    <a
      id={`link-${link.id}`}
      href={link.href}
      {...externalProps}
      className="group relative flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 border border-outline-variant/20"
    >
      <div className="flex items-center gap-4">
        <span
          className={`material-symbols-outlined ${link.iconColor ?? 'text-on-surface'}`}
          style={
            link.iconFill
              ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
              : undefined
          }
        >
          {link.icon}
        </span>
        <span className="font-semibold text-on-surface text-sm uppercase tracking-wider font-sans">
          {link.label}
        </span>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
        chevron_right
      </span>
    </a>
  )
}

function LinksNav() {
  return (
    <nav className="w-full space-y-4" aria-label="Links do restaurante">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </nav>
  )
}

function ChefSpecial() {
  return (
    <section className="w-full mt-8 text-left">
      <h3 className="text-xl font-bold text-on-surface mb-4 font-sans">
        Sugestão do Chef
      </h3>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md aspect-video group border border-outline-variant/10">
        <Image
          src="/chef-special.jpg"
          alt="Baião de Dois com Carne de Sol e Queijo Coalho"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 480px) 100vw, 480px"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white/90 text-xs font-bold uppercase tracking-wider mb-1">
            Destaque da Semana
          </p>
          <h4 className="text-white text-lg font-semibold font-sans">
            Baião de Dois com Carne de Sol e Queijo Coalho
          </h4>
        </div>
      </div>
    </section>
  )
}

function SocialFooter() {
  return (
    <footer className="mt-8 flex justify-center items-center gap-8 pb-8">
      {socialLinks.map((s) => (
        <a
          key={s.id}
          id={`social-${s.id}`}
          href={s.href}
          aria-label={s.label}
          className="text-secondary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">{s.icon}</span>
        </a>
      ))}
    </footer>
  )
}

/* ──────────────────────────────────────────
   Página principal
────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="brand-bg min-h-screen flex flex-col items-center">
      <Header />

      <main className="w-full max-w-[480px] px-6 pt-8 flex flex-col items-center text-center pb-8">
        <ProfileSection />
        <LinksNav />
        <ChefSpecial />
        <SocialFooter />
      </main>
    </div>
  )
}
