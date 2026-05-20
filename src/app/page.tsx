import { ProfileSection } from '@/app/components/ProfileSection'
import { LinksNav }        from '@/app/components/LinksNav'

export default function Home() {
  return (
    <div className="brand-bg min-h-dvh flex flex-col items-center">
      <main className="w-full max-w-[480px] flex flex-col items-stretch px-5 pt-8 pb-10">
        <ProfileSection />
        <LinksNav />
      </main>
    </div>
  )
}
