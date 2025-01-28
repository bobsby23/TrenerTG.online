import { getDictionary } from "../dictionaries"
import { Client25v } from "@/components/client-25v"

export default async function Page25v({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return <Client25v lang={lang} dict={dict} />
}

