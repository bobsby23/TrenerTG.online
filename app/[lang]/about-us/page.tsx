import { getDictionary } from "../dictionaries"
import Image from "next/image"

export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">{dict.about.title}</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{dict.about.mission.title}</h2>
          <p className="text-lg">{dict.about.mission.description}</p>

          <h2 className="text-2xl font-bold">{dict.about.team.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {dict.about.team.members.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

