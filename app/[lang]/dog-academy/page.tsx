import { getDictionary } from "../dictionaries"
import { CourseCard } from "@/components/training/course-card"

export default async function DogAcademyPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.dogAcademy.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.dogAcademy.courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            href={`/${lang}/dog-academy/${course.slug}`}
            price={course.price}
          />
        ))}
      </div>
    </div>
  )
}

