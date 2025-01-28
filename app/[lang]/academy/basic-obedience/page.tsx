import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getDictionary } from "../../dictionaries"

export default async function BasicObediencePage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.basicObedience.title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-lg mb-4">{dict.basicObedience.description}</p>
          <h2 className="text-2xl font-semibold mb-4">{dict.basicObedience.whatYouWillLearn}</h2>
          <ul className="list-disc list-inside mb-6">
            {dict.basicObedience.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Button size="lg">{dict.basicObedience.enrollNow}</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{dict.basicObedience.courseDetails}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>{dict.basicObedience.duration}:</strong> {dict.basicObedience.durationValue}</p>
            <p><strong>{dict.basicObedience.level}:</strong> {dict.basicObedience.levelValue}</p>
            <p><strong>{dict.basicObedience.prerequisites}:</strong> {dict.basicObedience.prerequisitesValue}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

