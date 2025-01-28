"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStore } from "@/lib/store"

type FormData = {
  email: string
  fullName: string
  username: string
  password: string
  confirmPassword: string
}

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const { translations } = useStore()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    // TODO: Implement registration logic
    console.log(data)
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">{translations.auth.email}</Label>
        <Input id="email" type="email" {...register("email", { required: true })} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">{translations.auth.fullName}</Label>
          <Input id="fullName" {...register("fullName", { required: true })} />
        </div>

        <div>
          <Label htmlFor="username">{translations.auth.username}</Label>
          <Input id="username" {...register("username", { required: true })} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="password">{translations.auth.password}</Label>
          <Input id="password" type="password" {...register("password", { required: true })} />
        </div>

        <div>
          <Label htmlFor="confirmPassword">{translations.auth.confirmPassword}</Label>
          <Input id="confirmPassword" type="password" {...register("confirmPassword", { required: true })} />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? translations.auth.creating : translations.auth.createAccount}
      </Button>
    </form>
  )
}

