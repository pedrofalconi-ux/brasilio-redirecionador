import Image from 'next/image'

export function ChefSpecial() {
  return (
    <section className="w-full mt-8 animate-fade-slide-in stagger-5">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}
        >
          local_fire_department
        </span>
        <h3 className="text-[15px] font-bold text-on-surface font-sans uppercase tracking-widest">
          Sugestão do Chef
        </h3>
      </div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/3] group"
           style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
        <Image
          src="/chef-special.jpg"
          alt="Baião de Dois com Carne de Sol e Queijo Coalho"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 480px) 100vw, 480px"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider font-sans"
                style={{ background: 'rgba(255,59,48,0.92)', color: '#fff', backdropFilter: 'blur(8px)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            Destaque da Semana
          </span>
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white text-[17px] font-bold font-sans leading-snug drop-shadow">
            Baião de Dois com Carne de Sol e Queijo Coalho
          </h4>
          <p className="text-white/70 text-[13px] font-body mt-1">Prato típico nordestino</p>
        </div>
      </div>
    </section>
  )
}
