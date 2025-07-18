"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative flex items-center min-h-screen overflow-hidden py-12 sm:py-16 md:py-20"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
                {/* These specific color values (rgba) are not directly in your CSS variables.
                    You might consider defining new CSS variables for these or adjusting them to
                    use existing ones like --gdfa-secondary or --gdfa-accent with opacity if desired.
                    For now, they remain as is, as there's no direct equivalent. */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(10,48,255,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,175,255,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(48,255,5,0.1),transparent_50%)]"></div>
            </div>

            {/* Floating blobs */}
            {/* These specific color values (e.g., bg-blue-200) are not directly in your CSS variables.
                You might consider defining new CSS variables for these lighter shades or
                adjusting them to use existing ones like --gdfa-secondary or --gdfa-accent with opacity if desired. */}
            <div className="absolute top-[10%] left-[5%] w-10 h-10 sm:w-14 sm:h-14 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-[20%] right-[10%] w-8 h-8 sm:w-12 sm:h-12 bg-cyan-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-[20%] left-[10%] w-8 h-8 sm:w-10 sm:h-10 bg-green-200 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[20%] w-6 h-6 sm:w-8 sm:h-8 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>

            {/* Main content container */}
            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-10">
                    {/* Left content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[var(--gdfa-secondary)] rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-[var(--gdfa-secondary)] shadow">
                            <Sparkles className="w-4 h-4" />
                            <span>Empowering Local Talent Since 2019</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-[var(--gdfa-neutral-black)]">
                                <span className="block">Greater</span>
                                <span className="block bg-gradient-to-r from-[var(--gdfa-secondary)] via-[var(--gdfa-accent)] to-[var(--gdfa-secondary)] bg-clip-text text-transparent">
                                    Dinajpur
                                </span>
                                <span className="block">Freelancer</span>
                                <span className="block bg-gradient-to-r from-[var(--gdfa-accent)] via-[var(--gdfa-accent)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">
                                    Association
                                </span>
                            </h1>

                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                                <MapPin className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                                <span>Dinajpur • Thakurgaon • Panchagarh • Rangpur Division</span>
                            </div>

                            <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
                                Join Bangladesh&#39;s most vibrant freelance community where local talent meets global opportunities.
                                <span className="block font-semibold text-[var(--gdfa-secondary)] mt-1">
                                    Connect, collaborate, and grow together.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="/become-a-member" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-[var(--gdfa-primary)] to-[var(--gdfa-secondary)] hover:from-[var(--gdfa-secondary)] hover:to-[var(--gdfa-primary)] text-[var(--gdfa-neutral-white)] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 text-base px-6 py-3"
                                >
                                    Join Our Community
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right card area */}
                    <div className="relative mt-10 lg:mt-0">
                        <div className="relative bg-[var(--gdfa-neutral-white)] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[var(--gdfa-neutral-black)/10] transition-transform duration-500 hover:scale-102">
                            {/* For these specific gradient colors, I've kept the current implementation as there isn't a direct
                                 mapping in your CSS variables for 'accent-red' or 'accent-green'. If these are intended to be
                                 specific shades, consider adding them as new CSS variables (e.g., --gdfa-accent-red, --gdfa-accent-green). */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gdfa-secondary)/5] via-[var(--gdfa-accent-red)/5] to-[var(--gdfa-accent-green)/5] rounded-3xl"></div>

                            <div className="relative z-10 text-center space-y-6">
                                <div className="relative">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] rounded-full mx-auto flex items-center justify-center shadow-xl">
                                        <div className="w-14 h-14 bg-[var(--gdfa-neutral-white)] rounded-full flex items-center justify-center">
                                            <MapPin className="w-7 h-7 text-[var(--gdfa-secondary)]" />
                                        </div>
                                    </div>
                                    {/* Using --gdfa-accent as a placeholder for accent-green, as it's the closest available 'accent' color.
                                        If 'accent-green' is a distinct color, consider adding it as a new CSS variable. */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--gdfa-accent)] rounded-full flex items-center justify-center shadow-lg">
                                        <Users className="w-4 h-4 text-[var(--gdfa-neutral-white)]" />
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-[var(--gdfa-neutral-black)]">Ready to Start?</h3>
                                <p className="text-sm sm:text-base text-[var(--gdfa-neutral-black)/70] leading-relaxed">
                                    Join hundreds of talented freelancers from Greater Dinajpur region and take your career to the next level.
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4 text-sm sm:text-base">
                                    <div className={`bg-[var(--gdfa-secondary)/10] rounded-xl p-4`}>
                                        <div className={`text-xl font-bold text-[var(--gdfa-secondary)]`}>24/7</div>
                                        <div className={`text-xs font-medium text-[var(--gdfa-secondary)]`}>Community Support</div>
                                    </div>
                                    {/* Using 'accent' as a placeholder for 'accent-red'. If 'accent-red' is a distinct color,
                                        consider adding it as a new CSS variable. */}
                                    <div className={`bg-[var(--gdfa-accent)/10] rounded-xl p-4`}>
                                        <div className={`text-xl font-bold text-[var(--gdfa-accent)]`}>Free</div>
                                        <div className={`text-xs font-medium text-[var(--gdfa-accent)]`}>Membership</div>
                                    </div>
                                    {/* Using 'accent' as a placeholder for 'accent-green'. If 'accent-green' is a distinct color,
                                        consider adding it as a new CSS variable. */}
                                    <div className={`bg-[var(--gdfa-accent)/10] rounded-xl p-4`}>
                                        <div className={`text-xl font-bold text-[var(--gdfa-accent)]`}>50+</div>
                                        <div className={`text-xs font-medium text-[var(--gdfa-accent)]`}>Skills Covered</div>
                                    </div>
                                    <div className={`bg-[var(--gdfa-primary)/10] rounded-xl p-4`}>
                                        <div className={`text-xl font-bold text-[var(--gdfa-primary)]`}>Local</div>
                                        <div className={`text-xs font-medium text-[var(--gdfa-primary)]`}>Network</div>
                                    </div>
                                </div>

                                <Link href="/become-a-member">
                                    {/* Using 'accent' as a placeholder for 'accent-red' in the gradient. */}
                                    <Button className="w-full bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] hover:from-[var(--gdfa-primary)] hover:to-[var(--gdfa-secondary)] text-[var(--gdfa-neutral-white)] shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                                        Get Started Today
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Floating cards (desktop only) */}
                        <div className={`bg-[var(--gdfa-neutral-white)] rounded-2xl p-4 shadow-xl border border-[var(--gdfa-neutral-black)/10] transform transition-transform duration-300 hidden sm:block absolute -top-6 -left-6 rotate-12 hover:rotate-6 z-50`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-[var(--gdfa-secondary)/10] rounded-full flex items-center justify-center`}>
                                    <span className={`text-[var(--gdfa-secondary)] font-bold text-sm`}>WD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[var(--gdfa-neutral-black)]">Web Dev</div>
                                    <div className="text-xs text-[var(--gdfa-neutral-black)/50]">Expert Level</div>
                                </div>
                            </div>
                        </div>
                        {/* Using 'accent' as a placeholder for 'accent-red' in FloatingCard. */}
                        <div className={`bg-[var(--gdfa-neutral-white)] rounded-2xl p-4 shadow-xl border border-[var(--gdfa-neutral-black)/10] transform transition-transform duration-300 hidden sm:block absolute -bottom-6 -right-6 -rotate-12 hover:-rotate-6 z-50`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-[var(--gdfa-accent)/10] rounded-full flex items-center justify-center`}>
                                    <span className={`text-[var(--gdfa-accent)] font-bold text-sm`}>GD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[var(--gdfa-neutral-black)]">Graphics</div>
                                    <div className="text-xs text-[var(--gdfa-neutral-black)/50]">Pro Designer</div>
                                </div>
                            </div>
                        </div>

                        {/* Background blobs */}
                        {/* Using 'accent' as a placeholder for 'accent-red'. */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] rounded-full opacity-10 animate-pulse -z-50"></div>
                        {/* Using 'accent' as a placeholder for 'accent-green' and 'accent-red'. */}
                        <div className="absolute -bottom-8 -left-8 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-[var(--gdfa-accent)] to-[var(--gdfa-accent)] rounded-full opacity-10 animate-pulse -z-50"></div>
                    </div>
                </div>
            </div>

            {/* Bottom SVG wave */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1440 120" className="w-full h-10 sm:h-16 md:h-20 fill-white" preserveAspectRatio="none">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
}