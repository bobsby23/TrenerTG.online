import { getDictionary } from "./dictionaries"
import { ClientHome } from "@/components/client-home"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)
  return <ClientHome lang={lang} dict={dict} />
}

