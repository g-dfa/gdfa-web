import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MapPin, Sparkles } from "lucide-react"

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-orange-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(249,115,22,0.1),transparent_50%)]"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute bottom-20 right-40 w-8 h-8 bg-emerald-300 rounded-full opacity-40 animate-bounce"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-2 text-sm font-medium text-emerald-700 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            <span>Empowering Local Talent Since 2025</span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-gray-900">Greater</span>
                                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                  Dinajpur
                </span>
                                <span className="block text-gray-900">Freelancer</span>
                                <span className="block bg-gradient-to-r from-teal-600 via-orange-500 to-teal-700 bg-clip-text text-transparent">
                  Association
                </span>
                            </h1>

                            <div className="flex items-center gap-3 text-lg text-gray-600">
                                <MapPin className="w-5 h-5 text-emerald-600" />
                                <span>Dinajpur • Thakurgaon • Panchagarh • Rangpur Division</span>
                            </div>

                            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                                Join Bangladesh's most vibrant freelance community where local talent meets global opportunities.
                                <span className="font-semibold text-emerald-700"> Connect, collaborate, and grow together.</span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                            >
                                Join Our Community
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                    </div>

                    {/* Right side visual */}
                    <div className="relative">
                        {/* Main card */}
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-orange-500/5 rounded-3xl"></div>

                            <div className="relative z-10 text-center space-y-6">
                                {/* Logo area */}
                                <div className="relative">
                                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <MapPin className="w-8 h-8 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Users className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900">Ready to Start?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Join hundreds of talented freelancers from Greater Dinajpur region and take your career to the next
                                        level.
                                    </p>
                                </div>

                                {/* Feature highlights */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-emerald-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-emerald-700 mb-1">24/7</div>
                                        <div className="text-xs text-emerald-600 font-medium">Community Support</div>
                                    </div>
                                    <div className="bg-teal-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-teal-700 mb-1">Free</div>
                                        <div className="text-xs text-teal-600 font-medium">Membership</div>
                                    </div>
                                    <div className="bg-orange-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-orange-700 mb-1">50+</div>
                                        <div className="text-xs text-orange-600 font-medium">Skills Covered</div>
                                    </div>
                                    <div className="bg-purple-50 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-purple-700 mb-1">Local</div>
                                        <div className="text-xs text-purple-600 font-medium">Network</div>
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                    Get Started Today
                                </Button>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-600 font-bold text-sm">WD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">Web Dev</div>
                                    <div className="text-xs text-gray-500">Expert Level</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">GD</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">Graphics</div>
                                    <div className="text-xs text-gray-500">Pro Designer</div>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-10 animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    )
}
