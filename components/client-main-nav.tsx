"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "./language-switcher"
import { useState } from "react"
import { SignInForm } from "./auth/sign-in-form"
import { JoinForm } from "./auth/join-form"
import { ThemeToggle } from "./theme-toggle"

export function ClientMainNav({ lang, dict }: { lang: string; dict: any }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const navItems = [
    { href: "/dog-academy", label: dict.nav.dogAcademy },
    { href: "/fun-media", label: dict.nav.funDogMedia },
    { href: "/training-guides", label: dict.nav.trainingGuides },
    { href: "/about-us", label: dict.nav.aboutUs },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-[#FF36F7] to-[#3B82F6] bg-clip-text text-transparent">
            TrenerTG
          </span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={`/${lang}${item.href}`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        pathname === `/${lang}${item.href}` ? "text-foreground" : "text-foreground/60",
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end space-x-2 flex-1 md:flex-none">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#FF36F7] to-[#3B82F6] hover:opacity-90"
            onClick={() => setIsSignInOpen(true)}
          >
            {dict.auth.signIn}
          </Button>
          <Button
            variant="outline"
            className="border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA]/10"
            onClick={() => setIsJoinOpen(true)}
          >
            {dict.auth.join}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${lang}${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1 text-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <SignInForm isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <JoinForm isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </header>
  )
}

