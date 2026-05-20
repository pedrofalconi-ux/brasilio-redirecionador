import Image from 'next/image'

export function ProfileSection() {
  return (
    <section className="mb-6 animate-fade-slide-in stagger-0">
      {/* Premium Banner Container */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 card-shadow flex flex-col items-center pb-6">
        
        {/* Cover Banner background with abstract design */}
        <div className="w-full h-28 bg-[#930005] relative overflow-hidden">
          {/* Rich organic background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#930005] via-[#bc000a] to-[#ff3b30]" />
          {/* Subtle grid pattern or glassmorphism effect */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5 blur-xl" />
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
        </div>

        {/* Premium Squircle Logo Container (iOS Icon Style) */}
        <div className="relative -mt-12 mb-3.5 z-10">
          <div className="w-[88px] h-[88px] rounded-2xl overflow-hidden p-1.5 bg-surface-container-lowest ring-4 ring-surface-container-lowest shadow-md">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-surface">
              <Image
                src="/logo.jpg"
                alt="Brasilio Restaurante Logo"
                width={88}
                height={88}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center px-5">
          <h1 className="text-2xl font-bold text-on-surface mb-1 font-sans tracking-tight">
            Brasilio Restaurante
          </h1>
          <p className="text-[14px] text-secondary font-body leading-relaxed max-w-[320px] mx-auto">
            Sabor e conexão em cada prato 🍽️
          </p>

          {/* Location / Cuisine Badge */}
          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-primary/6 border border-primary/10">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1" }}>
              restaurant_menu
            </span>
            <span className="text-[10px] font-bold text-primary font-sans tracking-wider uppercase">
              Culinária Brasileira & Espaço Aconchegante
            </span>
          </div>
        </div>
        
      </div>
    </section>
  )
}
