import { getDictionary } from "../../dictionaries"

export default async function GDPRPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.gdpr.title}</h1>
      <div className="prose dark:prose-invert">
        {dict.gdpr.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

