import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  description: string
  image: string
  href: string
  price?: string
}

export function CourseCard({ title, description, image, href, price }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {price && <p className="text-2xl font-bold">{price}</p>}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

