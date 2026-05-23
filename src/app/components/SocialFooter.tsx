const socialLinks = [
  { id: 'website', href: '#', icon: 'language', label: 'Site oficial' },
  { id: 'email',   href: '#', icon: 'mail',     label: 'E-mail' },
  { id: 'phone',   href: 'tel:+5583991282929', icon: 'call',     label: 'Telefone' },
]

export function SocialFooter() {
  return (
    <footer className="mt-8 pb-2 w-full safe-area-bottom">
      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-outline-variant/40" />
        <span className="text-[11px] text-secondary/60 font-body uppercase tracking-widest">Contato</span>
        <div className="flex-1 h-px bg-outline-variant/40" />
      </div>

      {/* Icon buttons */}
      <div className="flex justify-center items-center gap-4">
        {socialLinks.map((s) => (
          <a
            key={s.id}
            id={`social-${s.id}`}
            href={s.href}
            aria-label={s.label}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white
                       text-secondary hover:text-primary
                       hover:scale-110 active:scale-90
                       transition-all duration-200"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{s.icon}</span>
          </a>
        ))}
      </div>

      {/* Brand note */}
      <p className="text-center text-[11px] text-secondary/40 font-body mt-6">
        © 2025 Brasilio Restaurante · Todos os direitos reservados
      </p>
    </footer>
  )
}
