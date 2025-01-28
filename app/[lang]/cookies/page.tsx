import { getDictionary } from "../dictionaries"

export default async function CookiesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{dict.footer.cookiePolicy}</h1>
      <p className="text-lg">Cookie policy content coming soon...</p>
    </div>
  )
}

