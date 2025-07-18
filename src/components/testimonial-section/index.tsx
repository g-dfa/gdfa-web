import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image";

const testimonials = [
    {
        name: "Rahul Ahmed",
        role: "Full-Stack Developer",
        location: "Dinajpur",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "Joining GDFA was the best decision for my freelance career. The community support and networking opportunities helped me land my biggest client yet. The workshops are incredibly valuable!",
    },
    {
        name: "Fatima Khatun",
        role: "UI/UX Designer",
        location: "Thakurgaon",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "The design workshops and mentorship program at GDFA transformed my skills. I went from struggling to find clients to having a waiting list. The community truly cares about your success.",
    },
    {
        name: "Mohammad Hasan",
        role: "Digital Marketer",
        location: "Panchagarh",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "GDFA's digital marketing bootcamp gave me the confidence and skills to start my own agency. The ongoing support and collaboration opportunities are unmatched in our region.",
    },
    {
        name: "Nasir Uddin",
        role: "Content Writer",
        location: "Dinajpur",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "The writing workshops and peer feedback sessions helped me improve my craft significantly. I've tripled my income since joining GDFA and built lasting professional relationships.",
    },
    {
        name: "Rashida Begum",
        role: "Graphic Designer",
        location: "Thakurgaon",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "As a woman in freelancing, I found incredible support and encouragement in GDFA. The community celebrates diversity and helps everyone succeed regardless of their background.",
    },
    {
        name: "Karim Sheikh",
        role: "Mobile App Developer",
        location: "Panchagarh",
        image: "/placeholder.svg?height=80&width=80",
        rating: 5,
        text: "The technical workshops and code review sessions at GDFA kept me updated with the latest technologies. I've successfully launched 3 apps this year with community support.",
    },
]

export function Testimonials() {
    return (
        <section className="py-20 bg-[var(--gdfa-neutral-white)]">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[var(--gdfa-secondary)/10] text-[var(--gdfa-secondary)] rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <Star className="w-4 h-4" />
                        <span>Success Stories</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--gdfa-primary)] mb-6 leading-tight">
                        What Our Members
                        <span className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent-red)] bg-clip-text text-transparent">
                          Say About Us
                        </span>
                    </h2>

                    <p className="text-xl text-[var(--gdfa-primary)/70] max-w-3xl mx-auto leading-relaxed">
                        Real stories from freelancers who transformed their careers and achieved success with our community.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden bg-[var(--gdfa-neutral-white)/90] backdrop-blur"
                        >
                            <div className="absolute top-4 right-4 text-[var(--gdfa-accent-red)/20] opacity-50">
                                <Quote className="w-8 h-8" />
                            </div>

                            <CardContent className="p-8">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-[var(--gdfa-accent-green)] text-[var(--gdfa-accent-green)]"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-[var(--gdfa-primary)/80] leading-relaxed mb-6 italic">
                                    &#34;{testimonial.text}&#34;
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-[var(--gdfa-primary)]">{testimonial.name}</h4>
                                        <p className="text-sm text-[var(--gdfa-secondary)]">{testimonial.role}</p>
                                        <p className="text-xs text-[var(--gdfa-primary)/60]">{testimonial.location}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
