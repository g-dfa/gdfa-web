import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Star, MapPin, Award, Clock, TrendingUp, Globe } from "lucide-react"

const stats = [
    {
        icon: Users,
        number: "500+",
        label: "Active Members",
        description: "Talented freelancers",
        color: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    },
    {
        icon: Briefcase,
        number: "1000+",
        label: "Projects Completed",
        description: "Successful deliveries",
        color: "from-[var(--gdfa-accent)] to-[var(--gdfa-primary)]",
    },
    {
        icon: Star,
        number: "4.9",
        label: "Average Rating",
        description: "Client satisfaction",
        color: "from-[var(--gdfa-accent)] to-[var(--gdfa-secondary)]",
    },
    {
        icon: MapPin,
        number: "3+",
        label: "Districts Covered",
        description: "Greater Dinajpur region",
        color: "from-[var(--gdfa-primary)] to-[var(--gdfa-accent)]",
    },
]

const achievements = [
    {
        icon: Award,
        title: "Excellence Award 2023",
        description: "Best Freelance Community in Northern Bangladesh",
    },
    {
        icon: TrendingUp,
        title: "BDT 8+ Cr Earned",
        description: "Total earnings by our members in 2024",
    },
    {
        icon: Globe,
        title: "Global Recognition",
        description: "Featured in national freelancing publications",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock community assistance",
    },
]

export function CommunityStats() {
    return (
        <section className="py-20 bg-gradient-to-br from-[var(--gdfa-secondary)/5] via-[var(--gdfa-accent-red)/5] to-[var(--gdfa-accent-green)/5] relative overflow-hidden">

        {/* Background Pattern */}
            <div className="container px-4 mx-auto relative z-10">
                {/* Main Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group bg-[var(--gdfa-neutral-white)/80] backdrop-blur-sm"
                        >
                            <CardContent className="p-8 text-center">
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <stat.icon className="w-8 h-8 text-[var(--gdfa-neutral-white)]" />
                                </div>
                                <div className="text-4xl font-bold text-[var(--gdfa-primary)] mb-2">{stat.number}</div>
                                <div className="text-lg font-semibold text-[var(--gdfa-primary)] mb-1">{stat.label}</div>
                                <div className="text-sm text-[var(--gdfa-primary)/70]">{stat.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Achievements */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[var(--gdfa-primary)] mb-4">Our Achievements</h3>
                    <p className="text-lg text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                        Recognition and milestones that showcase our community&#39;s impact and growth
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group bg-[var(--gdfa-neutral-white)/60] backdrop-blur-sm"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--gdfa-secondary)/10] to-[var(--gdfa-accent-red)/10] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <achievement.icon className="w-10 h-10 text-[var(--gdfa-secondary)]" />
                                </div>
                                <h4 className="font-semibold text-[var(--gdfa-primary)] mb-2 text-sm">{achievement.title}</h4>
                                <p className="text-[var(--gdfa-primary)/70] text-xs leading-relaxed">{achievement.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
