import ShaderBackground from '@/components/ShaderBackground'
import Header from '@/components/Header'
import GlassmorphicMenu from '@/components/GlassmorphicMenu'
import HeroContent from '@/components/HeroContent'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-y-auto lg:overflow-hidden flex flex-col">
        <ShaderBackground />
        <HeroContent />
      </main>
      <GlassmorphicMenu />
    </>
  )
}