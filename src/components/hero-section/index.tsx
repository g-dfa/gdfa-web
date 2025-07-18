import {Button} from "@/components/ui/button"
import {ArrowRight, Users, MapPin, Sparkles} from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,48,255,0.1),transparent_50%)]"></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,175,255,0.1),transparent_50%)]"></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(48,255,5,0.1),transparent_50%)]"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div
                className="absolute top-40 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-30 animate-bounce"></div>
            <div
                className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-pulse"></div>
            <div
                className="absolute bottom-20 right-40 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-gdfa-secondary shadow-lg">
                            <Sparkles className="w-4 h-4"/>
                            <span>Empowering Local Talent Since 2019</span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-[var(--gdfa-neutral-black)]">Greater</span>
                                <span
                                    className="block bg-gradient-to-r from-[var(--gdfa-secondary)] via-[var(--gdfa-accent)] to-[var(--gdfa-secondary)] bg-clip-text text-transparent">
                                  Dinajpur
                                </span>
                                <span className="block text-[var(--gdfa-neutral-black)]">
                                    Freelancer
                                </span>
                                <span
                                    className="block bg-gradient-to-r from-[var(--gdfa-accent)] via-[var(--gdfa-accent)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">
                                  Association
                                </span>
                            </h1>

                            <div className="flex items-center gap-3 text-lg text-gray-600">
                                <MapPin className="w-5 h-5 text-gdfa-secondary"/>
                                <span>Dinajpur • Thakurgaon • Panchagarh • Rangpur Division</span>
                            </div>

                            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                                Join Bangladesh&#39;s most vibrant freelance community where local talent meets global
                                opportunities.
                                <span className="font-semibold text-gdfa-secondary"> Connect, collaborate, and grow together.</span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/become-a-member">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[var(--gdfa-primary)] to-[var(--gdfa-secondary)]
                                     hover:from-[var(--gdfa-secondary)] hover:to-[var(--gdfa-primary)]
                                     text-[var(--gdfa-neutral-white)] shadow-xl hover:shadow-2xl
                                     transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg cursor-pointer"
                                >
                                    Join Our Community
                                    <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>
                            </Link>
                        </div>

                    </div>

                    {/* Right side visual */}
                    <div className="relative">
                        {/* Main card */}
                        <div
                            className="relative bg-[var(--gdfa-neutral-white)] rounded-3xl p-8 shadow-2xl border border-[var(--gdfa-neutral-black)/10] transform hover:scale-105 transition-all duration-500">
                            {/* Gradient overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[var(--gdfa-secondary)/5] via-[var(--gdfa-accent-red)/5] to-[var(--gdfa-accent-green)/5] rounded-3xl"></div>

                            <div className="relative z-10 text-center space-y-6">
                                {/* Logo area */}
                                <div className="relative">
                                    <div
                                        className="w-24 h-24 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)] rounded-full mx-auto flex items-center justify-center shadow-xl">
                                        <div
                                            className="w-16 h-16 bg-[var(--gdfa-neutral-white)] rounded-full flex items-center justify-center">
                                            <MapPin className="w-8 h-8 text-[var(--gdfa-secondary)]"/>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--gdfa-accent-green)] rounded-full flex items-center justify-center shadow-lg">
                                        <Users className="w-4 h-4 text-[var(--gdfa-neutral-white)]"/>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-[var(--gdfa-neutral-black)]">Ready to
                                        Start?</h3>
                                    <p className="text-[var(--gdfa-neutral-black)/70] leading-relaxed">
                                        Join hundreds of talented freelancers from Greater Dinajpur region and take your
                                        career to the next level.
                                    </p>
                                </div>

                                {/* Feature highlights */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-[var(--gdfa-secondary)/10] rounded-xl p-4">
                                        <div className="text-2xl font-bold text-[var(--gdfa-secondary)] mb-1">24/7</div>
                                        <div className="text-xs text-[var(--gdfa-secondary)] font-medium">Community
                                            Support
                                        </div>
                                    </div>
                                    <div className="bg-[var(--gdfa-accent-red)/10] rounded-xl p-4">
                                        <div className="text-2xl font-bold text-[var(--gdfa-accent-red)] mb-1">Free
                                        </div>
                                        <div className="text-xs text-[var(--gdfa-accent-red)] font-medium">Membership
                                        </div>
                                    </div>
                                    <div className="bg-[var(--gdfa-accent-green)/10] rounded-xl p-4">
                                        <div className="text-2xl font-bold text-[var(--gdfa-accent-green)] mb-1">50+
                                        </div>
                                        <div className="text-xs text-[var(--gdfa-accent-green)] font-medium">Skills
                                            Covered
                                        </div>
                                    </div>
                                    <div className="bg-[var(--gdfa-primary)/10] rounded-xl p-4">
                                        <div className="text-2xl font-bold text-[var(--gdfa-primary)] mb-1">Local</div>
                                        <div className="text-xs text-[var(--gdfa-primary)] font-medium">Network</div>
                                    </div>
                                </div>

                                <Link href="/become-a-member">
                                    <Button
                                        className="w-full bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)]
                                                 hover:from-[var(--gdfa-primary)] hover:to-[var(--gdfa-secondary)]
                                                 text-[var(--gdfa-neutral-white)] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                    >
                                        Get Started Today
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div
                            className="absolute -top-6 -left-6 bg-[var(--gdfa-neutral-white)] rounded-2xl p-4 shadow-xl border border-[var(--gdfa-neutral-black)/10] transform rotate-12 hover:rotate-6 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-[var(--gdfa-secondary)/10] rounded-full flex items-center justify-center">
                                    <span className="text-[var(--gdfa-secondary)] font-bold text-sm">WD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[var(--gdfa-neutral-black)]">Web Dev
                                    </div>
                                    <div className="text-xs text-[var(--gdfa-neutral-black)/50]">Expert Level</div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute -bottom-6 -right-6 bg-[var(--gdfa-neutral-white)] rounded-2xl p-4 shadow-xl border border-[var(--gdfa-neutral-black)/10] transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-[var(--gdfa-accent-red)/10] rounded-full flex items-center justify-center">
                                    <span className="text-[var(--gdfa-accent-red)] font-bold text-sm">GD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[var(--gdfa-neutral-black)]">Graphics
                                    </div>
                                    <div className="text-xs text-[var(--gdfa-neutral-black)/50]">Pro Designer</div>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div
                            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)] rounded-full opacity-10 animate-pulse"></div>
                        <div
                            className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[var(--gdfa-accent-green)] to-[var(--gdfa-accent-red)] rounded-full opacity-10 animate-pulse"></div>
                    </div>

                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
                    <path
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    )
}
