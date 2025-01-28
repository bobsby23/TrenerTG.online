import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav lang={lang} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} />
    </div>
  )
}

