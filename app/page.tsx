import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChatInterface } from "./components/chat-interface"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 relative overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/80 to-[#0f1729]/60" />
          <div className="relative z-10 h-full flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-4">
              Train Smarter, Not Harder
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#FF36F7] to-[#3B82F6] bg-clip-text text-transparent font-bold mb-4">
              The Ultimate Dog Academy!
            </h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl mb-6">
              Transform your relationship with your furry friend through expert-led training
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#FF36F7] to-[#3B82F6] hover:opacity-90" asChild>
                <Link href="/dog-academy">Explore Courses</Link>
              </Button>
              <Button variant="outline" className="border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA]/10">
                Start Chat
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <ChatInterface />
        </div>
      </section>
    </div>
  )
}

