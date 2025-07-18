import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Briefcase,
    ArrowRight,
    GraduationCap,
    FolderDot,
    Handshake,
    Search,
    Lightbulb,
    DollarSign,
} from "lucide-react"
import Link from "next/link"

const guidelineSections = [
    {
        icon: GraduationCap,
        title: "1. Continuous Skill Development & Learning",
        description:
            "The freelance landscape is dynamic and ever-evolving. To remain competitive and relevant, continuous learning and adapting to new trends are paramount. Invest in yourself and your craft.",
        points: [
            {
                heading: "Identify In-Demand Skills",
                text: "Regularly research market trends, analyze job postings on platforms like Upwork, Fiverr, and LinkedIn, and read industry reports to understand which skills are currently in high demand. Focus on skills that align with your interests and career goals.",
            },
            {
                heading: "Formal & Informal Learning",
                text: "Enroll in online courses (Coursera, Udemy, edX), attend virtual or local workshops (like those offered by GDFA), pursue certifications, and read industry-specific books and blogs. Don't underestimate the power of tutorials and documentation.",
            },
            {
                heading: "Hands-on Practice & Personal Projects",
                text: "Theory is good, but practice is essential. Work on personal projects, contribute to open-source initiatives, or create mock projects for imaginary clients. This builds practical experience and a tangible portfolio.",
            },
            {
                heading: "Seek Feedback & Mentorship",
                text: "Share your work with peers, join critique groups, and actively seek constructive feedback. A mentor can provide invaluable guidance, share industry insights, and help you navigate challenges. GDFA's mentorship program is a great starting point.",
            },
        ],
        cta: { text: "Explore GDFA Workshops", href: "/events" },
    },
    {
        icon: FolderDot,
        title: "2. Building an Impressive Portfolio & Personal Brand",
        description:
            "Your portfolio is your most powerful marketing tool, acting as your visual resume. It should not only showcase your abilities but also tell a story about your problem-solving skills and impact. Complement this with a strong personal brand.",
        points: [
            {
                heading: "Curate High-Quality Projects",
                text: "Select your best and most relevant work. Quality over quantity is key. Ensure each project demonstrates a specific skill or area of expertise that you want to be known for. Include a variety of projects if you offer diverse services.",
            },
            {
                heading: "Craft Compelling Case Studies",
                text: "For each project, don't just show the final product. Explain the client's challenge, your role, the process you followed, the tools you used, and most importantly, the measurable results or impact you achieved. Use the STAR method (Situation, Task, Action, Result).",
            },
            {
                heading: "Tailor Your Portfolio to Your Niche",
                text: "If you specialize, ensure your portfolio speaks directly to your target clients. For example, if you're a web developer for e-commerce, highlight your e-commerce projects. This shows you understand their specific needs.",
            },
            {
                heading: "Keep it Updated & Accessible",
                text: "Regularly add new, impactful projects and remove outdated ones. Make your portfolio easily accessible online (e.g., a dedicated website, Behance, GitHub). Ensure it's mobile-responsive and loads quickly.",
            },
            {
                heading: "Develop Your Personal Brand",
                text: "Your personal brand is how you present yourself to the world. This includes your online presence (LinkedIn, social media), your unique value proposition, and your communication style. Consistency across all platforms builds trust and recognition.",
            },
        ],
        cta: { text: "View Member Success Stories", href: "/success-stories" },
    },
    {
        icon: Handshake,
        title: "3. Effective Networking & Community Engagement",
        description:
            "Freelancing can sometimes feel isolating. Building a strong network is crucial for referrals, collaborations, learning, and emotional support. Active participation in communities like GDFA can open many doors.",
        points: [
            {
                heading: "Attend Industry Events & Meetups",
                text: "Participate in both online and offline events, conferences, and workshops. These are excellent opportunities to meet potential clients, collaborators, and mentors. Don't just collect business cards; aim for meaningful conversations.",
            },
            {
                heading: "Engage in Online Communities",
                text: "Join relevant Facebook groups, LinkedIn groups, Discord servers, and forums (like GDFA's online platform). Share your knowledge, answer questions, and offer help. Be a valuable member, not just a lurker.",
            },
            {
                heading: "Build Genuine Relationships",
                text: "Focus on building authentic connections rather than just transactional ones. Offer help without expecting immediate returns. Nurture relationships over time, as referrals often come from people who know and trust you.",
            },
            {
                heading: "Collaborate with Peers",
                text: "Partner with other freelancers on projects that require complementary skills. This expands your service offerings, allows you to take on larger projects, and provides valuable learning experiences.",
            },
            {
                heading: "Seek & Offer Mentorship",
                text: "Whether you're looking for guidance or ready to share your expertise, mentorship is a powerful way to grow your network and contribute to the community. GDFA actively promotes mentorship among its members.",
            },
        ],
        cta: { text: "Join Our Community", href: "/become-a-member" },
    },
    {
        icon: Search,
        title: "4. Mastering Client Acquisition & Project Management",
        description:
            "Securing clients and managing projects efficiently are fundamental to a sustainable freelance career. This involves strategic outreach, effective communication, and robust organizational skills.",
        points: [
            {
                heading: "Craft Winning Proposals & Pitches",
                text: "Understand the client's pain points deeply before writing a proposal. Highlight how your unique skills and experience can solve their specific problems. Be concise, professional, and include a clear call to action. Personalize every pitch.",
            },
            {
                heading: "Leverage Freelance Platforms & Direct Outreach",
                text: "Optimize your profiles on platforms like Upwork, Fiverr, and Freelancer.com. Beyond platforms, explore direct outreach via cold emailing, LinkedIn connections, and attending local business events. Referrals from satisfied clients are also gold.",
            },
            {
                heading: "Develop Strong Negotiation Skills",
                text: "Research industry rates to price your services competitively and fairly. Be confident in your value. Learn to articulate your pricing, handle objections gracefully, and negotiate terms that benefit both parties. Don't be afraid to say no to low-paying projects.",
            },
            {
                heading: "Efficient Project Management",
                text: "Utilize tools (Trello, Asana, Notion) to manage tasks, deadlines, and client communication. Set clear expectations from the start, provide regular updates, and deliver on time. Good project management leads to satisfied clients and repeat business.",
            },
            {
                heading: "Client Communication & Relationship Building",
                text: "Maintain open, clear, and proactive communication. Respond promptly to inquiries. Build long-term relationships by consistently delivering high-quality work and providing excellent service. Happy clients become your best marketers.",
            },
        ],
        cta: { text: "Explore Services Offered by Members", href: "/contact" },
    },
    {
        icon: DollarSign,
        title: "5. Financial Management & Legal Considerations",
        description:
            "Beyond the creative and technical aspects, understanding the business side of freelancing—including finances and legalities—is crucial for stability and growth.",
        points: [
            {
                heading: "Pricing Your Services",
                text: "Learn various pricing models (hourly, project-based, value-based) and determine what works best for your services and market. Factor in your experience, overheads, and desired income. Don't underprice your work.",
            },
            {
                heading: "Budgeting & Saving",
                text: "Create a personal and business budget. Set aside funds for taxes, emergencies, and professional development. Consider opening separate bank accounts for business and personal finances.",
            },
            {
                heading: "Tax & Compliance",
                text: "Understand your tax obligations as a freelancer in Bangladesh. Keep meticulous records of all income and expenses. Consult with a local accountant or tax advisor to ensure compliance.",
            },
            {
                heading: "Contracts & Agreements",
                text: "Always use written contracts for projects. These should clearly outline the scope of work, deliverables, timelines, payment terms, intellectual property rights, and dispute resolution. GDFA may offer template resources.",
            },
            {
                heading: "Protecting Your Work",
                text: "Understand copyright and intellectual property laws relevant to your field. Ensure your contracts protect your rights and clearly define client usage rights.",
            },
        ],
        cta: { text: "Contact Us for Guidance", href: "/contact" },
    },
    {
        icon: Lightbulb,
        title: "6. Maintaining Well-being & Work-Life Balance",
        description:
            "Freelancing offers flexibility but can also lead to burnout if not managed properly. Prioritizing your mental and physical health is essential for long-term productivity and happiness.",
        points: [
            {
                heading: "Set Clear Boundaries",
                text: "Define your working hours and communicate them to clients. Avoid checking emails or working late into the night. Create a dedicated workspace to separate work from personal life.",
            },
            {
                heading: "Manage Your Time Effectively",
                text: "Use time management techniques (e.g., Pomodoro Technique, time blocking) to stay focused and productive. Prioritize tasks and avoid multitasking. Take regular breaks to prevent fatigue.",
            },
            {
                heading: "Prevent Burnout",
                text: "Recognize the signs of burnout and take proactive steps. Schedule regular days off, engage in hobbies, and spend time with family and friends. Don't let work consume your entire life.",
            },
            {
                heading: "Stay Connected",
                text: "Combat isolation by actively engaging with your freelance community (like GDFA). Share your challenges and successes. Peer support can be incredibly motivating and helpful.",
            },
            {
                heading: "Prioritize Self-Care",
                text: "Ensure you get enough sleep, eat healthy, and exercise regularly. Mental well-being is as important as physical health. Don't hesitate to seek professional help if you're struggling.",
            },
        ],
    },
]

export default function CareerGuidelinesSection() {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-[var(--gdfa-secondary)] rounded-full px-4 py-2 text-sm font-medium mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span>Career Guidelines</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Roadmap to Freelance Success</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Navigate your freelance journey with confidence. Our comprehensive guidelines provide actionable steps to
                        build a thriving and sustainable career.
                    </p>
                </div>

                <div className="space-y-12">
                    {guidelineSections.map((section, index) => (
                        <Card key={index} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-6 lg:p-10 flex flex-col md:flex-row items-start gap-8">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] rounded-xl flex items-center justify-center shadow-lg">
                                    <section.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">{section.description}</p>
                                    <ul className="space-y-6">
                                        {section.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                                    <ArrowRight className="w-4 h-4 text-[var(--gdfa-secondary)] flex-shrink-0" />
                                                    {point.heading}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed ml-6">{point.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    {section.cta && (
                                        <Link href={section.cta.href}>
                                            <Button className="mt-8 bg-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-primary)] text-white cursor-pointer">
                                                {section.cta.text}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>


                {/* Final CTA */}
                <div className="text-center mt-16">
                    <Card className="border-0 bg-gradient-to-r from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-white overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/10%,transparent_70%)]"></div>
                        <CardContent className="p-12 relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Freelance Career?</h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Join the Greater Dinajpur Freelancer Association today and get personalized support to
                                achieve your career goals.
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
        </div>
    )
}
