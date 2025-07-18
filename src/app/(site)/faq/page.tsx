import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {HelpCircle} from "lucide-react"

const faqs = [
    {
        "question": "What is the Greater Dinajpur Freelancer Association (GDFA)?",
        "answer": "GDFA is a community-driven organization dedicated to empowering freelancers in the Greater Dinajpur region of Bangladesh. We provide networking opportunities, skill development workshops, mentorship, and resources to help our members succeed in their freelance careers."
    },
    {
        "question": "Who can join GDFA?",
        "answer": "Membership is open to all freelancers, aspiring freelancers, and professionals residing primarily in the Greater Dinajpur region (Dinajpur, Thakurgaon, Panchagarh). Whether you're a seasoned pro or just starting, you're welcome!"
    },
    {
        "question": "Is there a membership fee?",
        "answer": "No, membership to the Greater Dinajpur Freelancer Association is completely free. We believe in providing accessible support and resources to foster a thriving freelance ecosystem in our region."
    },
    {
        "question": "What kind of services does GDFA offer to its members?",
        "answer": "We offer a wide range of services including regular networking meetups, expert-led workshops on various skills (web development, design, marketing, content writing, etc.), mentorship programs, access to exclusive resources like contract templates and pricing guides, and opportunities to showcase your work."
    },
    {
        "question": "How can I participate in workshops and events?",
        "answer": "Details for all upcoming workshops and events are posted on our 'Events' page. Members can register for events directly through the website. Some events may have limited spots, so we encourage early registration."
    },
    {
        "question": "Can GDFA help me find clients or projects?",
        "answer": "While GDFA does not directly provide jobs, we facilitate opportunities through our networking events, community collaborations, and by showcasing member profiles. Many members have found clients and projects through referrals within the community."
    },
    {
        "question": "How can I contact GDFA for more information?",
        "answer": "You can reach us through the 'Contact' page on our website, where you'll find our email address and phone number. We also encourage you to join our social media groups for quick updates and community interaction."
    },
    {
        "question": "What are the benefits of joining GDFA?",
        "answer": "Joining GDFA offers numerous benefits, including access to a supportive network of fellow freelancers, opportunities for skill enhancement through workshops, mentorship from experienced professionals, business support and guidance, and increased visibility for your services within the region and beyond."
    },
    {
        "question": "How often are events and workshops held?",
        "answer": "We strive to organize events and workshops regularly, typically on a monthly or bi-monthly basis. Special bootcamps and seminars may also be announced throughout the year. Check our 'Events' page for the most up-to-date schedule."
    },
    {
        "question": "Can I propose a workshop or event idea?",
        "answer": "We encourage our members to contribute to the community. If you have an idea for a workshop, talk, or any community event, please reach out to us through the 'Contact' page or the 'Propose an Event' button on the Events page. We'd love to hear your suggestions!"
    },
    {
        "question": "Is there a code of conduct for members?",
        "answer": "Yes, we maintain a professional and respectful environment. All members are expected to adhere to our community guidelines and code of conduct, which can be found in our 'Terms and Conditions' page. This ensures a positive and productive experience for everyone."
    },
    {
        "question": "How can I showcase my work or success story?",
        "answer": "We love celebrating our members' achievements! You can submit your success stories or portfolio highlights to us, and we may feature them on our 'Success Stories' page or during community events. This helps inspire others and gives you valuable exposure."
    },
    {
        "question": "Can I volunteer with GDFA?",
        "answer": "Yes! GDFA welcomes volunteers who are passionate about supporting our community. From helping organize events to mentoring fellow freelancers, there are many ways to get involved. Visit our 'Become a Volunteer' page to learn more and sign up."
    },
    {
        "question": "I don’t live in Greater Dinajpur. Can I still join?",
        "answer": "No. GDFA membership is exclusively for freelancers and professionals residing in the Greater Dinajpur region (Dinajpur, Thakurgaon, Panchagarh). This focus allows us to build a strong, localized community and provide resources tailored to the needs of our members."
    }
]

export default function FAQ() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container px-4 mx-auto w-full">
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 bg-blue-100 text-gdfa-secondary rounded-full px-4 py-2 text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4"/>
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Questions, Answered</h1>
                    <p className="text-lg text-gray-600">
                        Find quick answers to the most common questions about GDFA, our membership, services, and
                        community.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger
                                    className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
