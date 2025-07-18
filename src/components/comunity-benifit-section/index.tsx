import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {ArrowRight, Users, BookOpen, Handshake, Award, Zap, Shield} from "lucide-react"
import Link from "next/link"

const benefits = [
    {
        icon: Users,
        title: "Networking Opportunities",
        description: "Connect with 500+ freelancers, potential collaborators, and industry professionals in your region.",
        features: ["Monthly meetups", "Online community", "Collaboration projects"],
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    },
    {
        icon: BookOpen,
        title: "Skill Development",
        description: "Access workshops, training sessions, and mentorship programs to enhance your professional skills.",
        features: ["Expert-led workshops", "Peer learning", "Certification programs"],
        color: "from-[var(--gdfa-accent)] to-[var(--gdfa-primary)]",
    },
    {
        icon: Handshake,
        title: "Business Support",
        description: "Get guidance on pricing, client management, contracts, and growing your freelance business.",
        features: ["Business mentorship", "Legal guidance", "Pricing strategies"],
        color: "from-[var(--gdfa-accent)] to-[var(--gdfa-secondary)]",
    },
    {
        icon: Award,
        title: "Recognition & Growth",
        description: "Showcase your work, get recognized for achievements, and build your professional reputation.",
        features: ["Member spotlights", "Achievement awards", "Portfolio reviews"],
        color: "from-[var(--gdfa-primary)] to-[var(--gdfa-accent)]",
    },
    {
        icon: Zap,
        title: "Exclusive Resources",
        description: "Access templates, tools, guides, and resources designed specifically for freelancers.",
        features: ["Contract templates", "Pricing guides", "Marketing materials"],
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    },
    {
        icon: Shield,
        title: "Community Support",
        description: "Get help when you need it most - from technical issues to career advice and moral support.",
        features: ["24/7 community chat", "Peer support", "Crisis assistance"],
        color: "from-[var(--gdfa-accent)] to-[var(--gdfa-primary)]",
    },
]

export function CommunityBenefits() {
    return (
        <section className="py-20 bg-[var(--gdfa-neutral-white)]">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 bg-[var(--gdfa-secondary)/10] text-[var(--gdfa-secondary)]
                                rounded-full px-4 py-2 text-sm font-medium mb-6"
                    >
                        <Users className="w-4 h-4"/>
                        <span>Member Benefits</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--gdfa-primary)] mb-6 leading-tight">
                        Why Join Our
                        <span
                            className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)]
                             bg-clip-text text-transparent"
                        >
                          Freelancer Community?
                        </span>
                    </h2>

                    <p className="text-xl text-[var(--gdfa-primary)/70] max-w-3xl mx-auto leading-relaxed">
                        We provide the support, resources, and connections you need to thrive as a freelancer in Greater
                        Dinajpur and beyond.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden bg-[var(--gdfa-neutral-white)/90] backdrop-blur"
                        >
                            <div className={`h-1 bg-gradient-to-r ${benefit.color}`}></div>
                            <CardContent className="p-8">
                                <div
                                    className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <benefit.icon className="w-7 h-7 text-[var(--gdfa-neutral-white)]"/>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--gdfa-primary)] mb-3 group-hover:text-[var(--gdfa-secondary)] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-[var(--gdfa-primary)/70] mb-6 leading-relaxed">
                                    {benefit.description}
                                </p>

                                <div className="space-y-2">
                                    {benefit.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-[var(--gdfa-secondary)] rounded-full"></div>
                                            <span className="text-sm text-[var(--gdfa-primary)/80]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <Card
                    className="border-0 shadow-2xl bg-gradient-to-br from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-[var(--gdfa-neutral-white)] overflow-hidden relative">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <CardContent className="p-12 text-center relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                                Ready to Transform Your Freelance Career?
                            </h3>
                            <p className="text-xl text-[var(--gdfa-neutral-white)/80] mb-8 leading-relaxed">
                                Join hundreds of successful freelancers who have accelerated their careers through our
                                supportive community. Membership is completely free!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/become-a-member">
                                    <Button className="bg-white text-[var(--gdfa-secondary)] px-8 py-4 rounded-lg
                                    shadow-lg hover:bg-[var(--gdfa-accent)] hover:text-[var(--gdfa-netual-white)]
                                    cursor-pointer"
                                    >
                                        Become a Member
                                        <ArrowRight className="ml-2 h-5 w-5"/>
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button className="bg-[var(--gdfa-accent)] text-[var(--gdfa-netual-white)] px-8 py-4
                                    rounded-lg shadow-lg hover:bg-[var(--gdfa-netual-white)] hover:text-[var(--gdfa-seconday)]
                                    cursor-pointer"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-5 w-5"/>
                                    </Button>
                                </Link>
                            </div>

                            {/* Quick Stats */}
                            <div
                                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--gdfa-neutral-white)/20]">
                                <div>
                                    <div className="text-2xl font-bold mb-1">Free</div>
                                    <div className="text-[var(--gdfa-neutral-white)/80] text-sm">Membership</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold mb-1">500+</div>
                                    <div className="text-[var(--gdfa-neutral-white)/80] text-sm">Active Members</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold mb-1">24/7</div>
                                    <div className="text-[var(--gdfa-neutral-white)/80] text-sm">Support</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
