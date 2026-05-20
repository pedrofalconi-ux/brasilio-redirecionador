import { Header }         from '@/app/components/Header'
import { ProfileSection } from '@/app/components/ProfileSection'
import { LinksNav }        from '@/app/components/LinksNav'
import { ChefSpecial }     from '@/app/components/ChefSpecial'
import { SocialFooter }    from '@/app/components/SocialFooter'

export default function Home() {
  return (
    <div className="brand-bg min-h-dvh flex flex-col items-center">
      <Header />

      <main className="w-full max-w-[480px] flex flex-col items-stretch px-5 pt-8 pb-4">
        <ProfileSection />
        <LinksNav />
        <ChefSpecial />
        <SocialFooter />
      </main>
    </div>
  )
}
