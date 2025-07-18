import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[var(--gdfa-neutral-white)]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--gdfa-primary)] mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-[var(--gdfa-primary)/70] max-w-3xl mx-auto">
                        Ready to join our community or have questions? We’d love to hear from you. Reach out and let’s start the conversation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--gdfa-primary)] mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[var(--gdfa-secondary)/10] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[var(--gdfa-secondary)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--gdfa-primary)] mb-1">Address</h4>
                                        <p className="text-[var(--gdfa-primary)/70]">
                                            Dinajpur Sadar, Dinajpur District
                                            <br />
                                            Rangpur Division, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[var(--gdfa-accent-red)/10] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[var(--gdfa-accent-red)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--gdfa-primary)] mb-1">Phone</h4>
                                        <p className="text-[var(--gdfa-primary)/70]">+880 1XXX-XXXXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[var(--gdfa-accent-green)/10] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[var(--gdfa-accent-green)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--gdfa-primary)] mb-1">Email</h4>
                                        <p className="text-[var(--gdfa-primary)/70]">info@gdfa.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[var(--gdfa-primary)/10] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-[var(--gdfa-primary)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--gdfa-primary)] mb-1">Office Hours</h4>
                                        <p className="text-[var(--gdfa-primary)/70]">
                                            Saturday - Thursday: 9:00 AM - 6:00 PM
                                            <br />
                                            Friday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-gradient-to-br from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-[var(--gdfa-neutral-white)] border-0">
                            <CardContent className="p-6">
                                <h4 className="text-xl font-semibold mb-3">Join Our Community</h4>
                                <p className="mb-4 opacity-90">
                                    Ready to connect with fellow freelancers and grow your business? Join GDFA today and be part of something amazing.
                                </p>
                                <Button
                                    variant="secondary"
                                    className="bg-[var(--gdfa-neutral-white)] text-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-neutral-white)/90]"
                                >
                                    Become a Member
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="shadow-lg border-0">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[var(--gdfa-primary)]">
                                Send us a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">First Name</label>
                                    <Input placeholder="Your first name" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">Last Name</label>
                                    <Input placeholder="Your last name" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">Email Address</label>
                                <Input type="email" placeholder="your.email@example.com" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">Phone Number</label>
                                <Input type="tel" placeholder="+880 1XXX-XXXXXX" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">Subject</label>
                                <Input placeholder="What's this about?" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-[var(--gdfa-primary)] mb-2 block">Message</label>
                                <Textarea placeholder="Tell us more about your inquiry..." rows={5} />
                            </div>

                            <Button className="w-full bg-[var(--gdfa-primary)] hover:bg-[var(--gdfa-accent)] text-[var(--gdfa-neutral-white)]">
                                Send Message
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
