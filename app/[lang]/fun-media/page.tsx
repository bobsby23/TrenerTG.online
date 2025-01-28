import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function FunMediaPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.funMedia.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.funMedia.items.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.type}</CardDescription>
            </CardHeader>
            <CardContent>
              {item.type === "Video" && (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
              <p className="mt-4">{item.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {dict.funMedia.viewButton} {item.type}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

