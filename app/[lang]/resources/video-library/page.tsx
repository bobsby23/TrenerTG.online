import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getDictionary } from "../../dictionaries"

export default async function VideoLibraryPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{dict.videoLibrary.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.videoLibrary.videos.map((video, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
              <CardDescription>{video.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p>{video.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{dict.videoLibrary.watchNow}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

