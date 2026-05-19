import Image from 'next/image'

export function ProfileSection() {
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
