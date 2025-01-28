import { getDictionary } from "../dictionaries"

export default async function PrivacyPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{dict.footer.privacyPolicy}</h1>
      <p className="text-lg">Privacy policy content coming soon...</p>
    </div>
  )
}

