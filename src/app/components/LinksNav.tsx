export interface LinkItem {
  id: string
  href: string
  external?: boolean
  icon: string
  iconFill?: boolean
  iconColor?: string
  label: string
  variant?: 'default' | 'primary'
}

export const links: LinkItem[] = [
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

export function LinksNav() {
  return (
    <nav className="w-full space-y-4" aria-label="Links do restaurante">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </nav>
  )
}
