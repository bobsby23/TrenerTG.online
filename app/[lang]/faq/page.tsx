import { getDictionary } from "../dictionaries"

export default async function FAQPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{dict.footer.faq}</h1>
      <p className="text-lg">FAQ content coming soon...</p>
    </div>
  )
}

