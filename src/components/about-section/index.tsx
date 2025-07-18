import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {ArrowRight, Target, Users, Award, Globe} from "lucide-react"
import Link from "next/link"

const highlights = [
    {
        icon: Target,
        title: "Our Mission",
        description: "Empowering local talent to compete globally while strengthening our regional economy.",
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-primary)]/80",
    },
    {
        icon: Users,
        title: "Strong Community",
        description: "500+ active freelancers supporting each other through collaboration and mentorship.",
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-primary)]/80",
    },
    {
        icon: Award,
        title: "Proven Success",
        description: "Our members have completed 1000+ projects with an average rating of 4.9 stars.",
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-primary)]/80",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Connecting Greater Dinajpur talent with opportunities across Bangladesh and beyond.",
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-primary)]/80",
    },
]

export function AboutPreview() {
    return (
        <section
            className="py-20 bg-gradient-to-br from-[var(--gdfa-neutral-white)] to-[var(--gdfa-neutral-white)] relative overflow-hidden">
            {/* Background Elements */}
            <div
                className="absolute top-10 right-10 w-32 h-32 bg-[var(--gdfa-secondary)/10] rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div
                className="absolute bottom-20 left-10 w-24 h-24 bg-[var(--gdfa-accent-green)/10] rounded-full opacity-30 blur-2xl animate-bounce"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div
                                className="inline-flex items-center gap-2 bg-blue-100 text-[var(--gdfa-secondary)] rounded-full px-4 py-2 text-sm font-medium mb-6">
                                <Users className="w-4 h-4"/>
                                <span>About Our Community</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--gdfa-primary)] mb-6 leading-tight">
                                Building the Future of
                                <span
                                    className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-)] bg-clip-text text-transparent">
                                  Freelancing in Bangladesh
                                </span>
                            </h2>

                            <p className="text-xl text-[var(--gdfa-primary)/70] leading-relaxed mb-8">
                                Since 2019, we&#39;ve been transforming how freelancers connect, grow, and succeed in
                                the Greater Dinajpur region.
                                Our community is more than just a network—it’s a family of passionate professionals
                                dedicated to excellence.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[var(--gdfa-secondary)] rounded-full"></div>
                                    <span className="text-[var(--gdfa-primary)/80]">Founded in 2019 with a vision to empower local talent</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[var(--gdfa-accent-red)] rounded-full"></div>
                                    <span className="text-[var(--gdfa-primary)/80]">Covering 4+ districts in the Greater Dinajpur region</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[var(--gdfa-accent-green)] rounded-full"></div>
                                    <span className="text-[var(--gdfa-primary)/80]">Supporting freelancers across 50+ different skills</span>
                                </div>
                            </div>
                        </div>

                        <Link href="/about">
                            <Button className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)]
                                                hover:from-[var(--gdfa-primary)] hover:to-[var(--gdfa-secondary)]
                                                text-[var(--gdfa-neutral-white)] shadow-lg hover:shadow-xl transform
                                                hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                Learn More About Us
                                <ArrowRight className="ml-2 h-5 w-5"/>
                            </Button>
                        </Link>
                    </div>

                    {/* Right Content - Highlights Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {highlights.map((highlight, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group bg-[var(--gdfa-neutral-white)/80] backdrop-blur"
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <highlight.icon className="w-8 h-8 text-[var(--gdfa-neutral-white)]"/>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--gdfa-primary)] mb-3">{highlight.title}</h3>
                                    <p className="text-[var(--gdfa-primary)/70] text-sm leading-relaxed">{highlight.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
