import ShaderBackground from '@/components/ShaderBackground'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'
import GlassmorphicMenu from '@/components/GlassmorphicMenu'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden lg:overflow-hidden flex flex-col">
        <ShaderBackground />
        <HeroSection />
      </main>
      <GlassmorphicMenu />
    </>
  )
}