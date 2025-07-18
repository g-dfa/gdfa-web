import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Star, MapPin, Briefcase, TrendingUp} from "lucide-react"
import Image from "next/image";

const featuredMembers = [
    {
        name: "Rahul Ahmed",
        role: "Full-Stack Developer",
        location: "Dinajpur",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["React", "Node.js", "MongoDB"],
        experience: "3+ years",
        rating: 4.9,
        projects: 85,
        achievement: "Top Performer 2023",
        story: "Transformed from a computer science student to a successful freelancer earning 6-figure income annually.",
        joinedYear: "2020",
    },
    {
        name: "Fatima Khatun",
        role: "UI/UX Designer",
        location: "Thakurgaon",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["Figma", "Adobe XD", "Prototyping"],
        experience: "4+ years",
        rating: 4.8,
        projects: 120,
        achievement: "Design Excellence Award",
        story: "Built a thriving design consultancy serving clients across Bangladesh and internationally.",
        joinedYear: "2019",
    },
    {
        name: "Mohammad Hasan",
        role: "Digital Marketing Expert",
        location: "Panchagarh",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["SEO", "Social Media", "Content Strategy"],
        experience: "5+ years",
        rating: 4.9,
        projects: 95,
        achievement: "Marketing Mentor of the Year",
        story: "Grew from freelancer to agency owner, now mentoring other marketers in the community.",
        joinedYear: "2019",
    },
]

export function MemberSpotlight() {
    return (
        <section className="py-20 bg-[var(--gdfa-neutral-white)]">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 bg-[var(--gdfa-secondary)/10] text-[var(--gdfa-secondary)] rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Star className="w-4 h-4"/>
                        <span>Member Spotlight</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--gdfa-primary)] mb-6 leading-tight">
                        Meet Our
                        <span
                            className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)] bg-clip-text text-transparent">
                          Success Stories
                        </span>
                    </h2>

                    <p className="text-xl text-[var(--gdfa-primary)/70] max-w-3xl mx-auto leading-relaxed">
                        Discover how our community members have transformed their careers and achieved remarkable
                        success in their freelancing journey.
                    </p>
                </div>

                {/* Featured Members */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {featuredMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden bg-[var(--gdfa-neutral-white)/90] backdrop-blur"
                        >
                            <CardContent className="p-8">
                                {/* Member Photo & Basic Info */}
                                <div className="text-center mb-6">
                                    <div className="relative inline-block mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 rounded-full object-cover mx-auto shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2">
                                            <Badge
                                                className="bg-[var(--gdfa-secondary)] text-[var(--gdfa-neutral-white)] text-xs px-2 py-1">
                                                {member.achievement.split(" ")[0]}
                                            </Badge>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--gdfa-primary)] mb-1">{member.name}</h3>
                                    <p className="text-[var(--gdfa-secondary)] font-semibold mb-2">{member.role}</p>

                                    <div
                                        className="flex items-center justify-center gap-1 text-[var(--gdfa-primary)/70] text-sm mb-4">
                                        <MapPin className="w-4 h-4"/>
                                        <span>{member.location}</span>
                                        <span className="mx-2">•</span>
                                        <span>Since {member.joinedYear}</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Star className="w-4 h-4 text-yellow-400"/>
                                            <span
                                                className="font-bold text-[var(--gdfa-primary)]">{member.rating}</span>
                                        </div>
                                        <div className="text-xs text-[var(--gdfa-primary)/60]">Rating</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Briefcase className="w-4 h-4 text-[var(--gdfa-secondary)]"/>
                                            <span
                                                className="font-bold text-[var(--gdfa-primary)]">{member.projects}</span>
                                        </div>
                                        <div className="text-xs text-[var(--gdfa-primary)/60]">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <TrendingUp className="w-4 h-4 text-[var(--gdfa-accent-red)]"/>
                                            <span
                                                className="font-bold text-[var(--gdfa-primary)]">{member.experience}</span>
                                        </div>
                                        <div className="text-xs text-[var(--gdfa-primary)/60]">Experience</div>
                                    </div>
                                </div>

                                {/* Specialties */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {member.specialties.map((specialty, specialtyIndex) => (
                                            <Badge
                                                key={specialtyIndex}
                                                variant="outline"
                                                className="text-xs border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)]"
                                            >
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Story */}
                                <div className="mb-6">
                                    <p className="text-[var(--gdfa-primary)/70] text-sm leading-relaxed italic text-center">
                                        &#34;{member.story}&#34;
                                    </p>
                                </div>

                                {/* Achievement Badge */}
                                <div className="text-center">
                                    <Badge
                                        className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)] text-[var(--gdfa-neutral-white)]">
                                        🏆 {member.achievement}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Community Impact Stats */}
                <Card
                    className="border-0 shadow-xl bg-gradient-to-br from-[var(--gdfa-secondary)/10] to-[var(--gdfa-accent-red)/10]">
                    <CardContent className="p-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-[var(--gdfa-primary)] mb-4">Community Impact</h3>
                            <p className="text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                                Our members&#39; collective achievements showcase the power of community support and
                                collaboration.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[var(--gdfa-secondary)] mb-2">৳8+ Crores</div>
                                <div className="text-[var(--gdfa-primary)/70] text-sm">Total Earnings (2024)</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[var(--gdfa-accent-red)] mb-2">1000+</div>
                                <div className="text-[var(--gdfa-primary)/70] text-sm">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[var(--gdfa-accent-green)] mb-2">50+</div>
                                <div className="text-[var(--gdfa-primary)/70] text-sm">Success Stories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[var(--gdfa-primary)] mb-2">95%</div>
                                <div className="text-[var(--gdfa-primary)/70] text-sm">Client Satisfaction</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
