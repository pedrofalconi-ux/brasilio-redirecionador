import Image from 'next/image'

export function ProfileSection() {
  return (
    <section className="mb-8 text-center animate-fade-slide-in stagger-0">
      {/* Avatar with animated gradient ring */}
      <div className="relative flex items-center justify-center mb-5 mx-auto w-fit">
        {/* Pulse behind ring */}
        <div className="pulse-ring" />
        {/* Spinning gradient ring */}
        <div className="avatar-ring-wrapper">
          <div className="avatar-ring-inner">
            <Image
              src="/logo.jpg"
              alt="Brasilo Restaurante"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="text-[28px] font-bold text-on-surface mb-1.5 font-sans leading-tight tracking-tight">
        Brasilo Restaurante
      </h1>

      {/* Tagline */}
      <p className="text-[15px] text-secondary font-body tracking-wide">
        Sabor e conexão em cada prato 🍽️
      </p>

      {/* Category pill */}
      <div className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/15">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>location_on</span>
        <span className="text-[12px] font-semibold text-primary font-sans tracking-wide uppercase">
          Restaurante Brasileiro
        </span>
      </div>
    </section>
  )
}
