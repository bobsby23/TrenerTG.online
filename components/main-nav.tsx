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
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { SignInForm } from "./auth/sign-in-form"
import { JoinForm } from "./auth/join-form"

export function MainNav({ lang }: { lang: string }) {
  const pathname = usePathname()
  const [isSignInOpen, setIsSignInOpen] = React.useState(false)
  const [isJoinOpen, setIsJoinOpen] = React.useState(false)

  const navItems = [
    { href: "/dog-academy", label: "Dog Academy" },
    { href: "/training-guides", label: "Training Guides" },
    { href: "/healthcare", label: "Healthcare" },
    { href: "/fun-media", label: "Fun Media" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">TrenerTG</span>
        </Link>
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
        <div className="ml-auto flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href={`/${lang}/membership`}>Membership</Link>
          </Button>
          <Button onClick={() => setIsSignInOpen(true)}>Log In</Button>
          <Button onClick={() => setIsJoinOpen(true)} variant="secondary">
            Join Us
          </Button>
        </div>
      </div>
      <SignInForm isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <JoinForm isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </header>
  )
}

