import { getDictionary } from "../../dictionaries"

export default async function AdvancedTrainingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)
  const course = dict.dogAcademy.courses.find((c) => c.slug === "advanced")

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
      <p className="text-lg mb-4">{course.description}</p>
      <p className="text-xl font-semibold mb-4">{course.price}</p>
      {/* Add more course details here */}
    </div>
  )
}

