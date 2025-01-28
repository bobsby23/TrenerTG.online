import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "../dictionaries"

export default async function MembershipPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  const plans = [
    {
      name: dict.membership.basic.name,
      price: dict.membership.basic.price,
      description: dict.membership.basic.description,
      features: dict.membership.basic.features,
    },
    {
      name: dict.membership.premium.name,
      price: dict.membership.premium.price,
      description: dict.membership.premium.description,
      features: dict.membership.premium.features,
    },
    {
      name: dict.membership.ultimate.name,
      price: dict.membership.ultimate.price,
      description: dict.membership.ultimate.description,
      features: dict.membership.ultimate.features,
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{dict.membership.title}</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={index === 1 ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{dict.membership.subscribe}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

