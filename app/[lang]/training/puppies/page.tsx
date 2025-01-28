import { getDictionary } from "../../dictionaries"

export default async function PuppyTrainingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{dict.dogAcademy.courses[3].title}</h1>
      <p className="text-lg mb-4">{dict.dogAcademy.courses[3].description}</p>
      <p className="text-xl font-semibold">{dict.dogAcademy.courses[3].price}</p>
    </div>
  )
}

