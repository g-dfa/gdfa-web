import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Target,
    Heart,
    Lightbulb,
    Users,
    Award,
    ArrowRight,
    CheckCircle,
    Zap,
    Globe,
    TrendingUp,
    DollarSign,
    Code,
    Palette,
    Megaphone, BookOpen, Video
} from "lucide-react"
import Link from "next/link";
const achievements = [
    {
        title: "Top Freelance Hub in Northern Bangladesh",
        icon: Award,
        stat: "1st Place",
        desc: "Recognized as the leading freelance community in the region"
    },
    {
        title: "Skill Development Workshops",
        icon: Code,
        stat: "50+",
        desc: "Hands-on training sessions conducted"
    },
    {
        title: "Member Satisfaction",
        icon: Heart,
        stat: "95%",
        desc: "Positive feedback from our members"
    },
    {
        title: "Media Features",
        icon: Megaphone,
        stat: "12+",
        desc: "National publications highlighting our work"
    },
    {
        title: "Global Clients",
        icon: Globe,
        stat: "100+",
        desc: "International companies worked with our members"
    },
    {
        title: "Annual Growth",
        icon: TrendingUp,
        stat: "200%",
        desc: "Increase in member earnings year-over-year"
    }
]
const memberStats = [
    { value: "2,500+", label: "Active Members", icon: Users },
    { value: "৳2 Cr+", label: "Annual Earnings", icon: DollarSign },
    { value: "15+", label: "Countries Served", icon: Globe },
    { value: "50+", label: "Workshops Conducted", icon: Code }
]

const serviceAreas = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Digital Marketing", icon: Megaphone },
    { name: "Content Writing", icon: BookOpen },
    { name: "Graphic Design", icon: Palette },
    { name: "Video Editing", icon: Video }
]

export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gdfa-neutral-white)] via-white to-[var(--gdfa-accent-green)/5]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--gdfa-secondary)/1%,transparent_1%)] bg-[length:40px_40px] opacity-10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,48,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px] opacity-30"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10 space-y-24">
                {/* Hero Header */}
                <div className="text-center max-w-4xl mx-auto">
                    <span className="inline-block bg-[var(--gdfa-accent-green)/20] text-[var(--gdfa-accent-green)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Empowering Freelancers Since 2019
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
                        About <span className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">GDFA</span>
                    </h1>
                    <p className="text-xl text-[var(--gdfa-primary)/80] leading-relaxed mb-8">
                        The Greater Dinajpur Freelancer Association (GDFA) is the premier hub for independent professionals in Northern Bangladesh.
                        We&#39;re transforming local talent into global competitors through education, community, and opportunity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/become-a-member">
                            <Button className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]
                            text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                Join Our Community
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/success-stories">
                            <Button variant="outline" className="border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)]
                            hover:bg-[var(--gdfa-secondary)/10] px-6 py-3 rounded-lg cursor-pointer"
                            >
                                Our Success Stories
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {memberStats.map((stat, index) => (
                        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition bg-white/90 backdrop-blur-sm">
                            <CardContent className="p-6 text-center">
                                <stat.icon className={`w-10 h-10 mx-auto mb-3 text-[var(--gdfa-secondary)]`} />
                                <div className="text-3xl font-bold text-[var(--gdfa-primary)] mb-1">{stat.value}</div>
                                <p className="text-sm text-[var(--gdfa-primary)/70]">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition bg-white/95 backdrop-blur-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-[var(--gdfa-secondary)/10] to-transparent p-8">
                            <Target className="w-12 h-12 mb-4 text-[var(--gdfa-secondary)]" />
                            <h3 className="text-2xl font-bold text-[var(--gdfa-primary)] mb-3">Our Mission</h3>
                            <p className="text-[var(--gdfa-primary)/80] leading-relaxed mb-4">
                                To nurture, connect, and empower freelancers in the Greater Dinajpur region, equipping them with the skills,
                                networks, and opportunities to compete on a global scale while maintaining strong local roots.
                            </p>
                            <ul className="space-y-2 text-[var(--gdfa-primary)/80]">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                    <span>Provide cutting-edge skill development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                    <span>Foster meaningful professional connections</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                    <span>Bridge the gap between local talent and global opportunities</span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition bg-white/95 backdrop-blur-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-[var(--gdfa-accent)/10] to-transparent p-8">
                            <Lightbulb className="w-12 h-12 mb-4 text-[var(--gdfa-accent)]" />
                            <h3 className="text-2xl font-bold text-[var(--gdfa-primary)] mb-3">Our Vision</h3>
                            <p className="text-[var(--gdfa-primary)/80] leading-relaxed mb-4">
                                To establish Dinajpur as a recognized hub for world-class freelance talent, where independent professionals
                                have access to everything they need to build sustainable, rewarding careers without leaving their community.
                            </p>
                            <div className="bg-[var(--gdfa-accent-green)/10] p-4 rounded-lg border border-[var(--gdfa-accent-green)/20]">
                                <h4 className="font-semibold text-[var(--gdfa-accent-green)] mb-2">By 2025, we aim to:</h4>
                                <ul className="space-y-2 text-[var(--gdfa-primary)/80]">
                                    <li className="flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                        <span>Support 5,000+ active freelancers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                        <span>Facilitate ₹10 Crore+ in annual member earnings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-0.5 text-[var(--gdfa-accent-green)] flex-shrink-0" />
                                        <span>Establish 3 regional learning hubs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Key Achievements */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[var(--gdfa-primary)] mb-3">By The Numbers</h2>
                        <p className="text-xl text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                            Quantifying our impact on the freelance community in Northern Bangladesh
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achieve, idx) => (
                            <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition group overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-[var(--gdfa-neutral-white)] to-[var(--gdfa-neutral-white)/50] shadow-sm group-hover:bg-[var(--gdfa-secondary)/10] transition">
                                            <achieve.icon className="w-6 h-6 text-[var(--gdfa-secondary)]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-[var(--gdfa-primary)] mb-1">{achieve.stat}</div>
                                            <h3 className="text-lg font-semibold text-[var(--gdfa-primary)]">{achieve.title}</h3>
                                            <p className="text-sm text-[var(--gdfa-primary)/70] mt-1">{achieve.desc}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Service Areas */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[var(--gdfa-primary)] mb-3">Our Focus Areas</h2>
                        <p className="text-xl text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                            Supporting freelancers across these high-demand digital services
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {serviceAreas.map((service, index) => (
                            <div
                                key={index}
                                className="p-4 border border-[var(--gdfa-secondary)/20] rounded-lg hover:border-[var(--gdfa-secondary)/40] hover:shadow-sm transition flex items-center gap-3"
                            >
                                <service.icon className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                                <span className="font-medium text-[var(--gdfa-primary)]">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Final CTA */}
                <div className="text-center">
                    <Card className="border-0 bg-gradient-to-r from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-white overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/10%,transparent_70%)]"></div>
                        <CardContent className="p-12 relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Freelance Career?</h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Join 2,500+ freelancers who are building successful careers with GDFA&#39;s support.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/become-a-member">
                                    <Button className="bg-white text-[var(--gdfa-secondary)] px-8 py-4 rounded-lg
                                     shadow-lg hover:bg-[var(--gdfa-accent)] hover:text-[var(--gdfa-netual-white)] cursor-pointer"
                                    >
                                        Become a Member
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}