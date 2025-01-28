import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PhoneCall, Heart, AlertTriangle } from "lucide-react"
import { getDictionary } from "../dictionaries"

export default async function HealthcarePage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.healthcare.title}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              {dict.healthcare.emergencyContacts.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dict.healthcare.emergencyContacts.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              {dict.healthcare.preventiveCare.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dict.healthcare.preventiveCare.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              {dict.healthcare.firstAidTips.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dict.healthcare.firstAidTips.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>{dict.healthcare.articles.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {dict.healthcare.articles.items.map((article, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{article.excerpt}</p>
                <Button>{dict.healthcare.articles.readMore}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

