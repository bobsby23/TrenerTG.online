import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getDictionary } from "../../dictionaries"

export default async function BestPracticesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{dict.bestPractices.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.bestPractices.practices.map((practice, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{practice.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{practice.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{dict.bestPractices.readMore}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

