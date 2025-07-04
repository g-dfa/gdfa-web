import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

const footerLinks = {
    community: [
        { name: "About Us", href: "#about" },
        { name: "Our Members", href: "#community" },
        { name: "Success Stories", href: "#" },
        { name: "Events", href: "#" },
    ],
    services: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Design Services", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Career Guide", href: "#" },
        { name: "FAQ", href: "#" },
    ],
    support: [
        { name: "Contact Us", href: "#contact" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container px-4 mx-auto py-16">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">GD</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">GDFA</span>
                                <span className="text-sm text-gray-400">Greater Dinajpur Freelancer Association</span>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed max-w-md">
                            Empowering freelancers in Greater Dinajpur region through community, collaboration, and continuous
                            learning. Join us in building a thriving freelance ecosystem.
                        </p>

                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Community</h3>
                        <ul className="space-y-2">
                            {footerLinks.community.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-emerald-400" />
                            <span className="text-gray-300">info@g-dfa.org</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-emerald-400" />
                            <span className="text-gray-300">+8801711594594</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Greater Dinajpur Freelancer Association. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
