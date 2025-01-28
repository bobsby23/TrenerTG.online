import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer({ lang }: { lang: string }) {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col gap-8 py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Training Programs</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/dog-academy/basic-obedience`}>Basic Obedience</Link>
              </li>
              <li>
                <Link href={`/${lang}/dog-academy/advanced`}>Advanced Training</Link>
              </li>
              <li>
                <Link href={`/${lang}/dog-academy/behavior`}>Behavior Modification</Link>
              </li>
              <li>
                <Link href={`/${lang}/dog-academy/puppy`}>Puppy Training</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/blog`}>Blog</Link>
              </li>
              <li>
                <Link href={`/${lang}/training-guides`}>Training Guides</Link>
              </li>
              <li>
                <Link href={`/${lang}/videos`}>Video Library</Link>
              </li>
              <li>
                <Link href={`/${lang}/faq`}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/about`}>About Us</Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`}>Contact</Link>
              </li>
              <li>
                <Link href={`/${lang}/careers`}>Careers</Link>
              </li>
              <li>
                <Link href={`/${lang}/press`}>Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/privacy`}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={`/${lang}/terms`}>Terms of Service</Link>
              </li>
              <li>
                <Link href={`/${lang}/cookies`}>Cookie Policy</Link>
              </li>
              <li>
                <Link href={`/${lang}/gdpr`}>GDPR</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
          <div className="flex gap-4">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 TrenerTG, Inc. Sofia, Ovcha Kupel, Dr. Tania Getova, 1000, Bulgaria
          </p>
        </div>
      </div>
    </footer>
  )
}

