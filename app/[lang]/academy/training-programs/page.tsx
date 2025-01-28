import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDictionary } from "../../dictionaries"

export default async function TrainingProgramsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{dict.trainingPrograms.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.trainingPrograms.programs.map((program, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{program.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/${lang}/academy/${program.slug}`}>{dict.trainingPrograms.learnMore}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

