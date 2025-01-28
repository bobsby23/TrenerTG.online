"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClientChatInterface } from "@/components/client-chat-interface"

export function ClientHome({ lang, dict }: { lang: string; dict: any }) {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="flex flex-col">
      <section className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 relative overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
          <div className="relative z-10 h-full flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
              {dict.hero.title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mb-4">
              {dict.hero.subtitle}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mb-6">{dict.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={`/${lang}/dog-academy`}>{dict.hero.exploreCourses}</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => setShowChat(true)}
              >
                {dict.hero.startChat}
              </Button>
            </div>
          </div>
        </div>
        {showChat && (
          <div className="flex-1 p-8">
            <ClientChatInterface />
          </div>
        )}
      </section>
    </div>
  )
}

