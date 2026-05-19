import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 py-3 max-w-[480px] mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Brasilo Restaurante Logo"
            width={32}
            height={32}
            className="h-8 w-auto rounded-full object-cover"
          />
          <span className="text-on-surface font-semibold text-lg tracking-tight font-sans">
            Brasilo Restaurante
          </span>
        </div>
        <button
          id="btn-share"
          aria-label="Compartilhar"
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </header>
  )
}
