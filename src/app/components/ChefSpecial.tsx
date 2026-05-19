import Image from 'next/image'

export function ChefSpecial() {
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
