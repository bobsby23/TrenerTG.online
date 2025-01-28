import { getDictionary } from "../dictionaries"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function TrainingGuidesPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  const videoGuides = [
    {
      title: "Basic Obedience Training",
      description: "Learn the fundamentals of dog obedience training",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      title: "Advanced Tricks",
      description: "Teach your dog impressive tricks",
      youtubeId: "dQw4w9WgXcQ",
    },
  ]

  const writtenGuides = [
    {
      title: "Puppy Training 101",
      description: "A comprehensive guide to raising and training your new puppy",
      slug: "puppy-training-101",
    },
    {
      title: "Behavior Modification Techniques",
      description: "Effective strategies for addressing common behavioral issues",
      slug: "behavior-modification",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.trainingGuides.title}</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">{dict.trainingGuides.videoGuides}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {videoGuides.map((guide, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${guide.youtubeId}`}
                    title={guide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{dict.trainingGuides.writtenGuides}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {writtenGuides.map((guide, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={`/${lang}/training-guides/${guide.slug}`}>{dict.trainingGuides.readGuide}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

