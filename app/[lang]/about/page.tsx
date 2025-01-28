import { getDictionary } from "../dictionaries"

export default async function AboutPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{dict.about.title}</h1>
      <p className="text-lg mb-4">{dict.about.subtitle}</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{dict.about.mission.title}</h2>
        <p>{dict.about.mission.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">{dict.about.team.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.about.team.members.map((member, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

