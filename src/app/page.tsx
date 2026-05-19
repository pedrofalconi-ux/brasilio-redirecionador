import { Header }         from '@/app/components/Header'
import { ProfileSection } from '@/app/components/ProfileSection'
import { LinksNav }        from '@/app/components/LinksNav'
import { ChefSpecial }     from '@/app/components/ChefSpecial'
import { SocialFooter }    from '@/app/components/SocialFooter'

export default function Home() {
  return (
    <div className="brand-bg min-h-screen flex flex-col items-center">
      <Header />

      <main className="w-full max-w-[480px] px-6 pt-8 flex flex-col items-center text-center pb-8">
        <ProfileSection />
        <LinksNav />
        <ChefSpecial />
        <SocialFooter />
      </main>
    </div>
  )
}
