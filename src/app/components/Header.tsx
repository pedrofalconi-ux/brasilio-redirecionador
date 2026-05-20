import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface/75 backdrop-blur-xl border-b border-outline-variant/15">
      <div className="flex items-center px-5 py-3.5 max-w-[480px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-outline-variant/30 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-on-surface font-bold text-[15px] tracking-tight font-sans leading-none">
            Brasilo Restaurante
          </span>
        </div>
      </div>
    </header>
  )
}
