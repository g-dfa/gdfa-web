import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Briefcase, TrendingUp, ArrowRight, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
const successStories = [
    {
        id: 1,
        name: "Rahul Ahmed",
        role: "Full-Stack Developer",
        location: "Dinajpur",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["React", "Node.js", "MongoDB"],
        experience: "3+ years",
        rating: 4.9,
        projects: 85,
        earnings: "₹12+ Lakhs annually",
        achievement: "Top Performer 2023",
        story:
            "Transformed from a computer science student to a successful freelancer earning 6-figure income annually through community support and continuous learning.",
        joinedYear: "2020",
        category: "Web Development",
        slug: "rahul-ahmed-fullstack-developer",
        featured: true,
    },
    {
        id: 2,
        name: "Fatima Khatun",
        role: "UI/UX Designer",
        location: "Thakurgaon",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["Figma", "Adobe XD", "Prototyping"],
        experience: "4+ years",
        rating: 4.8,
        projects: 120,
        earnings: "₹15+ Lakhs annually",
        achievement: "Design Excellence Award",
        story:
            "Built a thriving design consultancy serving clients across Bangladesh and internationally, starting from self-taught beginnings.",
        joinedYear: "2019",
        category: "Design",
        slug: "fatima-khatun-uiux-designer",
        featured: true,
    },
    {
        id: 3,
        name: "Mohammad Hasan",
        role: "Digital Marketing Expert",
        location: "Panchagarh",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["SEO", "Social Media", "Content Strategy"],
        experience: "5+ years",
        rating: 4.9,
        projects: 95,
        earnings: "₹18+ Lakhs annually",
        achievement: "Marketing Mentor of the Year",
        story:
            "Grew from freelancer to agency owner, now mentoring other marketers and running a successful digital marketing agency.",
        joinedYear: "2019",
        category: "Marketing",
        slug: "mohammad-hasan-digital-marketer",
        featured: false,
    },
    {
        id: 4,
        name: "Nasir Uddin",
        role: "Content Writer & Strategist",
        location: "Dinajpur",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["Copywriting", "SEO Writing", "Content Strategy"],
        experience: "3+ years",
        rating: 4.7,
        projects: 150,
        earnings: "₹8+ Lakhs annually",
        achievement: "Content Creator Award",
        story:
            "Tripled income through specialized content writing services and built a personal brand as a content strategist.",
        joinedYear: "2021",
        category: "Content",
        slug: "nasir-uddin-content-writer",
        featured: false,
    },
    {
        id: 5,
        name: "Rashida Begum",
        role: "Graphic Designer",
        location: "Thakurgaon",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["Brand Design", "Print Design", "Illustration"],
        experience: "2+ years",
        rating: 4.8,
        projects: 75,
        earnings: "₹6+ Lakhs annually",
        achievement: "Rising Star Award",
        story:
            "Overcame challenges as a woman in freelancing and built a successful graphic design practice specializing in brand identity.",
        joinedYear: "2022",
        category: "Design",
        slug: "rashida-begum-graphic-designer",
        featured: false,
    },
    {
        id: 6,
        name: "Karim Sheikh",
        role: "Mobile App Developer",
        location: "Panchagarh",
        image: "/placeholder.svg?height=120&width=120",
        specialties: ["React Native", "Flutter", "iOS"],
        experience: "4+ years",
        rating: 4.9,
        projects: 45,
        earnings: "₹14+ Lakhs annually",
        achievement: "Innovation Award",
        story: "Successfully launched 3 mobile apps and built a reputation as a go-to mobile developer in the region.",
        joinedYear: "2020",
        category: "Mobile Dev",
        slug: "karim-sheikh-mobile-developer",
        featured: false,
    },
]

export default function SuccessStories() {
    const featuredStories = successStories.filter((story) => story.featured)
    const regularStories = successStories.filter((story) => !story.featured)

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-100 rounded-full opacity-30 animate-bounce"></div>

            <div className="container px-4 mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-gdfa-secondary rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Award className="w-4 h-4" />
                        <span>Success Stories</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Inspiring
                        <span className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">
                         Success Stories
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover how our community members have transformed their careers, achieved financial independence, and
                        built thriving businesses through dedication and community support.
                    </p>
                </div>


                <div className="mb-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredStories.map((story) => (
                            <Card
                                key={story.id}
                                className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden group"
                            >
                                <div className="h-2 bg-gradient-to-r from-gdfa-secondary to-gdfa-accent"></div>
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="relative">
                                            <Image
                                                src={story.image || "/placeholder.svg"}
                                                alt={story.name}
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 rounded-full object-cover shadow-lg"
                                            />
                                            <div className="absolute -bottom-2 -right-2">
                                                <Badge className="bg-gdfa-secondary text-white text-xs px-2 py-1">Featured</Badge>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gdfa-secondary transition-colors">
                                                {story.name}
                                            </h3>
                                            <p className="text-gdfa-secondary font-semibold mb-2">{story.role}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{story.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    <span>Since {story.joinedYear}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-6 italic">&#34;{story.story}&#34;</p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <Star className="w-4 h-4 text-yellow-500" />
                                                <span className="font-bold text-gray-900">{story.rating}</span>
                                            </div>
                                            <div className="text-xs text-gray-600">Rating</div>
                                        </div>
                                        <div className="text-center p-3 bg-cyan-50 rounded-lg">
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <Briefcase className="w-4 h-4 text-gdfa-secondary" />
                                                <span className="font-bold text-gray-900">{story.projects}</span>
                                            </div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div className="text-center p-3 bg-green-50 rounded-lg">
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <TrendingUp className="w-4 h-4 text-gdfa-accent-green" />
                                                <span className="font-bold text-gray-900 text-xs">{story.earnings.split(" ")[0]}</span>
                                            </div>
                                            <div className="text-xs text-gray-600">Annual</div>
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {story.specialties.map((specialty, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>

                                    <Link href={`/success-stories/${story.slug}`}>
                                        <Button className="w-full bg-gradient-to-r from-[var(--gdfa-secondary)]
                                        to-[var(--gdfa-accent)] hover:from-[var(--gdfa-primary)] hover:to-[var(--gdfa-secondary)]
                                        text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                        >
                                            Read Full Story
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularStories.map((story) => (
                            <Card
                                key={story.id}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Image
                                            src={story.image || "/placeholder.svg"}
                                            alt={story.name}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 rounded-full object-cover shadow-lg"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-gdfa-secondary transition-colors">
                                                {story.name}
                                            </h3>
                                            <p className="text-gdfa-secondary font-semibold text-sm">{story.role}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <MapPin className="w-3 h-3" />
                                                <span>{story.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">&#34;{story.story}&#34;</p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4 text-xs text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-500" />
                                                <span>{story.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Briefcase className="w-3 h-3" />
                                                <span>{story.projects}</span>
                                            </div>
                                        </div>
                                        <Badge className="bg-blue-100 text-gdfa-secondary text-xs">{story.achievement}</Badge>
                                    </div>

                                    <Link href={`/success-stories/${story.slug}`}>
                                        <Button
                                            variant="outline"
                                            className="w-full border-blue-200 text-gdfa-secondary hover:bg-blue-50 bg-transparent cursor-pointer"
                                        >
                                            Read Story
                                            <ArrowRight className="ml-2 h-3 w-3" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Community Impact */}
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <CardContent className="p-12 text-center relative z-10">
                        <h3 className="text-3xl font-bold mb-6">Community Impact</h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our members&#39; collective success demonstrates the power of community support and collaboration
                        </p>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold mb-2">₹50+ Crores</div>
                                <div className="text-blue-100">Total Member Earnings</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">500+</div>
                                <div className="text-blue-100">Success Stories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">95%</div>
                                <div className="text-blue-100">Income Growth Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">4.8★</div>
                                <div className="text-blue-100">Average Member Rating</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
