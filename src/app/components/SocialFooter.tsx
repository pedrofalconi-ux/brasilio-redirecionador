const socialLinks = [
  { id: 'website', href: '#', icon: 'public', label: 'Site' },
  { id: 'email',   href: '#', icon: 'mail',   label: 'E-mail' },
  { id: 'phone',   href: '#', icon: 'call',   label: 'Telefone' },
]

export function SocialFooter() {
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
