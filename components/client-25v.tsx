"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Client25v({ lang, dict }: { lang: string; dict: any }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = input.split("").reverse().join("")
    setOutput(result)
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">{dict["25v"].title}</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{dict["25v"].cardTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={dict["25v"].inputPlaceholder}
              />
            </div>
            <Button type="submit">{dict["25v"].submitButton}</Button>
          </form>
          {output && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">{dict["25v"].resultTitle}</h2>
              <p className="text-lg">{output}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

