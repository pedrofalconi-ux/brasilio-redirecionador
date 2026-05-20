export interface LinkItem {
  id: string
  href: string
  external?: boolean
  label: string
  subtitle: string
  icon: string
  iconBg: string
  iconColor: string
  iconFill?: boolean
  variant?: 'default' | 'primary'
  stagger: number
}

export const links: LinkItem[] = [
  {
    id: 'whatsapp',
    href: '#',
    label: 'Comunidade WhatsApp',
    subtitle: 'Entre no grupo de clientes',
    icon: 'chat',
    iconBg: '#25D366',
    iconColor: '#ffffff',
    iconFill: true,
    stagger: 1,
  },
  {
    id: 'google-review',
    href: 'https://www.google.com/search?sca_esv=a362b3da5b4ff7be&sxsrf=ANbL-n7YKBYA9NpPyh3xs68ytI4azpmdaw:1779055181655&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObOYXGOnbh7xGtJ1_s7BjgbpsplhfjAtGEy0fu-27Z14HOBpm2FpFB5MRHGWKYyauHuDAMUy300LCCqFpbFeTWwgvGDPUMlJe5Y8SUJEJRJETWseZQ%3D%3D&q=Restaurante+Brasilio+Coment%C3%A1rios&sa=X&ved=2ahUKEwjzs42BqcGUAxW4p5UCHcewG7wQ0bkNegQINBAH&biw=1440&bih=812&dpr=2',
    external: true,
    label: 'Avalie no Google',
    subtitle: 'Deixe sua avaliação',
    icon: 'star',
    iconBg: '#FFF3E0',
    iconColor: '#F59E0B',
    iconFill: true,
    stagger: 2,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/brasiliorestaurante',
    external: true,
    label: 'Siga no Instagram',
    subtitle: '@brasiliorestaurante',
    icon: 'photo_camera',
    iconBg: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    iconColor: '#ffffff',
    stagger: 3,
  },
  {
    id: 'cardapio',
    href: '/cardapio_gráfica_cropped.pdf',
    external: true,
    label: 'Ver Cardápio Completo',
    subtitle: 'Todos os pratos e preços',
    icon: 'restaurant_menu',
    iconBg: '',       // not used in primary variant
    iconColor: '',
    variant: 'primary',
    stagger: 4,
  },
]

/* ── Icon badge ── */
function IconBadge({ link }: { link: LinkItem }) {
  const isGradient = link.iconBg.startsWith('linear-gradient')

  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
      style={{
        background: isGradient ? link.iconBg : link.iconBg,
        backgroundColor: !isGradient ? link.iconBg : undefined,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{
          color: link.iconColor,
          fontSize: 22,
          fontVariationSettings: link.iconFill
            ? "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24"
            : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        }}
      >
        {link.icon}
      </span>
    </div>
  )
}

/* ── Link card (default) ── */
function LinkCard({ link }: { link: LinkItem }) {
  const externalProps = link.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  /* ── Primary CTA ── */
  if (link.variant === 'primary') {
    return (
      <a
        id={`link-${link.id}`}
        href={link.href}
        {...externalProps}
        className={`
          cta-shimmer relative overflow-hidden
          flex items-center gap-4 w-full px-6 py-5
          rounded-2xl text-white
          active:scale-[0.97] transition-transform duration-150
          animate-fade-slide-in stagger-${link.stagger}
        `}
        style={{
          background: 'linear-gradient(135deg, #ff3b30 0%, #ff5f54 60%, #ff3b30 100%)',
          boxShadow: '0 4px 20px rgba(255,59,48,0.40), 0 1px 2px rgba(0,0,0,0.10)',
        }}
      >
        {/* Icon bubble */}
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: 24, fontVariationSettings: "'FILL' 1" }}
          >
            {link.icon}
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 text-left">
          <p className="font-bold text-[15px] font-sans leading-none mb-0.5">{link.label}</p>
          <p className="text-[12px] text-white/75 font-body">{link.subtitle}</p>
        </div>

        {/* Arrow */}
        <span
          className="material-symbols-outlined text-white/80 shrink-0"
          style={{ fontSize: 20 }}
        >
          arrow_forward
        </span>
      </a>
    )
  }

  /* ── Default card ── */
  return (
    <a
      id={`link-${link.id}`}
      href={link.href}
      {...externalProps}
      className={`
        group flex items-center gap-4 w-full px-4 py-4
        bg-white rounded-2xl
        card-shadow hover:card-shadow-hover
        active:scale-[0.97] transition-all duration-150
        animate-fade-slide-in stagger-${link.stagger}
      `}
    >
      <IconBadge link={link} />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-on-surface text-[15px] font-sans leading-tight">
          {link.label}
        </p>
        <p className="text-[12px] text-secondary font-body mt-0.5 truncate">{link.subtitle}</p>
      </div>

      {/* Chevron */}
      <span
        className="material-symbols-outlined text-outline/60 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
        style={{ fontSize: 20 }}
      >
        chevron_right
      </span>
    </a>
  )
}

/* ── Nav ── */
export function LinksNav() {
  return (
    <nav className="w-full flex flex-col gap-3" aria-label="Links do restaurante">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </nav>
  )
}
