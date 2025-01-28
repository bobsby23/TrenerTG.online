import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"

export function HeroSection() {
  const { translations } = useStore()

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">{translations.hero.title}</h1>
        <h2 className="text-2xl mb-4">{translations.hero.subtitle}</h2>
        <p className="mb-6">{translations.hero.description}</p>
        <div className="space-x-4">
          <Button>{translations.hero.exploreCourses}</Button>
          <Button variant="outline">{translations.hero.startChat}</Button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="/hero-image.jpg" alt="Dog training" className="rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

