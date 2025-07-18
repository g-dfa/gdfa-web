"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--gdfa-primary)/10] bg-[var(--gdfa-neutral-white)/90] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--gdfa-neutral-white)]/40 flex justify-center">
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href={'/'}>
                    <Image
                        src="/logo.svg"
                        alt="GDFA Logo"
                        width={80}
                        height={80}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-[var(--gdfa-primary)] transition-colors hover:text-[var(--gdfa-secondary)]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    {/* <Button*/}
                    {/*    variant="outline"*/}
                    {/*    size="sm"*/}
                    {/*    className="border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-secondary)/10]"*/}
                    {/*>*/}
                    {/*    Login*/}
                    {/*</Button> */}
                    <Link href="/become-a-member">
                        <Button
                            size="sm"
                            className="bg-[var(--gdfa-primary)] hover:bg-[var(--gdfa-accent] text-[var(--gdfa-neutral-white)] cursor-pointer"
                        >
                            Join Community
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5 text-[var(--gdfa-primary)]" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px] bg-[var(--gdfa-neutral-white)] text-[var(--gdfa-primary)]"
                    >
                        <div className="flex flex-col space-y-4 mt-8 items-center">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium transition-colors hover:text-[var(--gdfa-secondary)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-4">
                                {/*<Button*/}
                                {/*    variant="outline"*/}
                                {/*    className="border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-secondary)/10]"*/}
                                {/*>*/}
                                {/*    Login*/}
                                {/*</Button>*/}
                                <Link href="/become-a-member">
                                    <Button
                                        size="sm"
                                        className="bg-[var(--gdfa-primary)] hover:bg-[var(--gdfa-accent] text-[var(--gdfa-neutral-white)] cursor-pointer"
                                    >
                                        Join Community
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
