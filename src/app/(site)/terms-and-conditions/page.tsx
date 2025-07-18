import {Card, CardContent} from "@/components/ui/card"
import {FileText, CheckCircle, Users, Gavel, Lightbulb, Info, Mail} from "lucide-react"

export default function TermsAndConditions() {
    return (
        <div className="py-12">
            <div className="container px-4 mx-auto w-full">
                <Card className="border-none shadow-none rounded-none">
                    <CardContent className="p-6 lg:p-10 space-y-8">
                        <div className="text-center mb-8">
                            <div
                                className="inline-flex items-center gap-2 bg-blue-100 text-gdfa-secondary rounded-full px-4 py-2 text-sm font-medium mb-4">
                                <FileText className="w-4 h-4"/>
                                <span>Terms and Conditions</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Terms of Service for
                                GDFA</h1>
                            <p className="text-lg text-gray-600">
                                Welcome to the Greater Dinajpur Freelancer Association (GDFA). These Terms and
                                Conditions outline the
                                rules and regulations for the use of GDFA&#39;s Website and services.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-gdfa-secondary"/>
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-gray-700">
                                    By accessing this website and/or becoming a member of GDFA, we assume you accept
                                    these terms and
                                    conditions in full. Do not continue to use GDFA&#39;s website if you do not accept
                                    all of the terms and
                                    conditions stated on this page.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Users className="w-6 h-6 text-gdfa-secondary"/>
                                    2. Membership and Registration
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>
                                        <strong>Eligibility:</strong> Membership is open to freelancers and aspiring
                                        freelancers primarily
                                        residing in the Greater Dinajpur region of Bangladesh.
                                    </li>
                                    <li>
                                        <strong>Account Information:</strong> You agree to provide accurate,
                                        current, and complete
                                        information during the registration process and to update such information
                                        to keep it accurate,
                                        current, and complete.
                                    </li>
                                    <li>
                                        <strong>Account Security:</strong> You are responsible for safeguarding your
                                        password and for any
                                        activities or actions under your account. GDFA cannot and will not be liable
                                        for any loss or damage
                                        arising from your failure to comply with the above requirements.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Gavel className="w-6 h-6 text-gdfa-secondary"/>
                                    3. User Responsibilities and Code of Conduct
                                </h2>
                                <p className="text-gray-700 mb-4">As a member or user of GDFA, you agree to:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Comply with all applicable laws and regulations.</li>
                                    <li>Respect other members and maintain a professional and supportive
                                        environment.
                                    </li>
                                    <li>
                                        Not engage in any activity that is harmful, fraudulent, deceptive,
                                        threatening, abusive, harassing,
                                        defamatory, vulgar, obscene, or otherwise objectionable.
                                    </li>
                                    <li>
                                        Not use the platform for spamming, phishing, or any other unauthorized
                                        commercial communication.
                                    </li>
                                    <li>
                                        Not upload or share content that infringes on intellectual property rights
                                        or privacy rights of
                                        others.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-6 h-6 text-gdfa-secondary"/>
                                    4. Services Offered
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    GDFA provides various services to its members, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Networking opportunities and community forums.</li>
                                    <li>Skill development workshops and training sessions.</li>
                                    <li>Mentorship programs.</li>
                                    <li>Access to resources and guides for freelancers.</li>
                                    <li>Showcasing member profiles and success stories.</li>
                                </ul>
                                <p className="text-gray-700 mt-4">
                                    GDFA reserves the right to modify or discontinue any service at any time without
                                    prior notice.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-gdfa-secondary"/>
                                    5. Intellectual Property
                                </h2>
                                <p className="text-gray-700">
                                    The content, features, and functionality of the GDFA website (including but not
                                    limited to all
                                    information, software, text, displays, images, video, and audio, and the design,
                                    selection, and
                                    arrangement thereof) are owned by GDFA, its licensors, or other providers of
                                    such material and are
                                    protected by international copyright, trademark, patent, trade secret, and other
                                    intellectual property
                                    or proprietary rights laws.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-gdfa-secondary"/>
                                    6. Disclaimers
                                </h2>
                                <p className="text-gray-700">
                                    The services and content on the GDFA website are provided &#34;as
                                    is&#34; and &#34;as
                                    available&#34; without any
                                    warranties of any kind, either express or implied, including, but not limited
                                    to, implied warranties
                                    of merchantability, fitness for a particular purpose, non-infringement, or
                                    course of performance. GDFA
                                    does not warrant that the website will be uninterrupted, secure, or error-free.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Gavel className="w-6 h-6 text-gdfa-secondary"/>
                                    7. Limitation of Liability
                                </h2>
                                <p className="text-gray-700">
                                    In no event shall GDFA, nor its directors, employees, partners, agents,
                                    suppliers, or affiliates, be
                                    liable for any indirect, incidental, special, consequential, or punitive
                                    damages, including without
                                    limitation, loss of profits, data, use, goodwill, or other intangible losses,
                                    resulting from (i) your
                                    access to or use of or inability to access or use the Service; (ii) any conduct
                                    or content of any
                                    third party on the Service; (iii) any content obtained from the Service; and
                                    (iv) unauthorized access,
                                    use, or alteration of your transmissions or content, whether based on warranty,
                                    contract, tort
                                    (including negligence), or any other legal theory, whether or not we have been
                                    informed of the
                                    possibility of such damage, and even if a remedy set forth herein is found to
                                    have failed of its
                                    essential purpose.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Gavel className="w-6 h-6 text-gdfa-secondary"/>
                                    8. Governing Law
                                </h2>
                                <p className="text-gray-700">
                                    These Terms shall be governed and construed in accordance with the laws of
                                    Bangladesh, without regard
                                    to its conflict of law provisions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-gdfa-secondary"/>
                                    9. Changes to These Terms
                                </h2>
                                <p className="text-gray-700">
                                    We reserve the right, at our sole discretion, to modify or replace these Terms
                                    at any time. If a
                                    revision is material, we will provide at least 30 days&#39; notice prior to any new
                                    terms taking effect.
                                    What constitutes a material change will be determined at our sole discretion.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-gdfa-secondary"/>
                                    10. Contact Us
                                </h2>
                                <p className="text-gray-700">If you have any questions about these Terms, please
                                    contact us:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>By email: info@gdfa.org</li>
                                    <li>By visiting this page on our website: /contact</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
