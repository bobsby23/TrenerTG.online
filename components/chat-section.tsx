import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useStore } from "@/lib/store"

export function ChatSection() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; content: string }>>([])
  const [input, setInput] = useState("")
  const { translations } = useStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput("")
      // Here you would typically send the message to your AI backend
      // and then add the response to the messages
    }
  }

  return (
    <div className="border rounded-lg p-4 h-[500px] flex flex-col">
      <div className="flex-grow overflow-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={translations.chat.placeholder}
          className="flex-grow mr-2"
        />
        <Button type="submit">{translations.chat.send}</Button>
      </form>
    </div>
  )
}

