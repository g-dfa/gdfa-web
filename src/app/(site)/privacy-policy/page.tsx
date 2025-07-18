import {Card, CardContent} from "@/components/ui/card"
import {Shield, Info, Lock, UserCheck, FileText, Share2, Mail} from "lucide-react"

export default function PrivacyPolicy() {
    return (
        <div className="py-12">
            <div className="container px-4 mx-auto w-full">
                <Card className="border-none shadow-none rounded-none">
                    <CardContent className="p-6 lg:p-10 space-y-8">
                        <div className="text-center mb-8">
                            <div
                                className="inline-flex items-center gap-2 bg-blue-100 text-gdfa-secondary rounded-full px-4 py-2 text-sm font-medium mb-4">
                                <Shield className="w-4 h-4"/>
                                <span>Privacy Policy</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Privacy Matters to
                                Us</h1>
                            <p className="text-lg text-gray-600">
                                This Privacy Policy describes how Greater Dinajpur Freelancer Association (GDFA)
                                collects, uses, and
                                discloses your personal information when you visit or become a member of our website.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-gdfa-secondary"/>
                                    1. Information We Collect
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We collect various types of information to provide and improve our services to you.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>
                                        <strong>Personal Data:</strong> When you register as a member, apply for
                                        services, or interact with
                                        our site, we may collect personally identifiable information such as your name,
                                        email address, phone
                                        number, physical address, blood group, professional skills, and portfolio links.
                                    </li>
                                    <li>
                                        <strong>Usage Data:</strong> We may also collect information on how the Service
                                        is accessed and used
                                        (&#34;Usage Data&#34;). This Usage Data may include information such as your
                                        computer&#39;s Internet Protocol
                                        address (e.g., IP address), browser type, browser version, the pages of our
                                        Service that you visit,
                                        the time and date of your visit, the time spent on those pages, unique device
                                        identifiers, and other
                                        diagnostic data.
                                    </li>
                                    <li>
                                        <strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking
                                        technologies to track
                                        the activity on our Service and hold certain information. Cookies are files with
                                        a small amount of
                                        data that may include an anonymous unique identifier.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <UserCheck className="w-6 h-6 text-gdfa-secondary"/>
                                    2. How We Use Your Information
                                </h2>
                                <p className="text-gray-700 mb-4">GDFA uses the collected data for various purposes:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>To provide and maintain our Service, including membership management.</li>
                                    <li>To notify you about changes to our Service.</li>
                                    <li>To allow you to participate in interactive features of our Service when you
                                        choose to do so.
                                    </li>
                                    <li>To provide member support and respond to inquiries.</li>
                                    <li>To provide analysis or valuable information so that we can improve the
                                        Service.
                                    </li>
                                    <li>To monitor the usage of the Service.</li>
                                    <li>To detect, prevent, and address technical issues.</li>
                                    <li>
                                        To send you newsletters, marketing or promotional materials, and other
                                        information that may be of
                                        interest to you.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Share2 className="w-6 h-6 text-gdfa-secondary"/>
                                    3. How We Share Your Information
                                </h2>
                                <p className="text-gray-700 mb-4">We may share your information in the following
                                    situations:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>
                                        <strong>With Service Providers:</strong> We may employ third-party companies and
                                        individuals to
                                        facilitate our Service, provide the Service on our behalf, perform
                                        Service-related services, or
                                        assist us in analyzing how our Service is used.
                                    </li>
                                    <li>
                                        <strong>For Business Transfers:</strong> If GDFA is involved in a merger,
                                        acquisition, or asset
                                        sale, your Personal Data may be transferred.
                                    </li>
                                    <li>
                                        <strong>For Legal Reasons:</strong> We may disclose your Personal Data in the
                                        good faith belief that
                                        such action is necessary to comply with a legal obligation, protect and defend
                                        the rights or
                                        property of GDFA, prevent or investigate possible wrongdoing in connection with
                                        the Service, protect
                                        the personal safety of users of the Service or the public, or protect against
                                        legal liability.
                                    </li>
                                    <li>
                                        <strong>With Your Consent:</strong> We may disclose your personal information
                                        for any other purpose
                                        with your consent.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lock className="w-6 h-6 text-gdfa-secondary"/>
                                    4. Data Security
                                </h2>
                                <p className="text-gray-700">
                                    The security of your data is important to us, but remember that no method of
                                    transmission over the
                                    Internet or method of electronic storage is 100% secure. While we strive to use
                                    commercially
                                    acceptable means to protect your Personal Data, we cannot guarantee its absolute
                                    security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-gdfa-secondary"/>
                                    5. Your Data Protection Rights
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Depending on your location, you may have the following data protection rights:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>The right to access, update, or delete the information we have on you.</li>
                                    <li>
                                        The right of rectification to have your information rectified if that
                                        information is inaccurate or
                                        incomplete.
                                    </li>
                                    <li>The right to object to our processing of your Personal Data.</li>
                                    <li>
                                        The right of restriction to request that we restrict the processing of your
                                        personal information.
                                    </li>
                                    <li>
                                        The right to data portability to be provided with a copy of your Personal Data
                                        in a structured,
                                        machine-readable, and commonly used format.
                                    </li>
                                    <li>
                                        The right to withdraw consent at any time where GDFA relied on your consent to
                                        process your personal
                                        information.
                                    </li>
                                </ul>
                                <p className="text-gray-700 mt-4">
                                    Please note that we may ask you to verify your identity before responding to such
                                    requests.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-gdfa-secondary"/>
                                    6. Changes to This Privacy Policy
                                </h2>
                                <p className="text-gray-700">
                                    We may update our Privacy Policy from time to time. We will notify you of any
                                    changes by posting the
                                    new Privacy Policy on this page. We will let you know via email and/or a prominent
                                    notice on our
                                    Service, prior to the change becoming effective and update the &#34;effective
                                    date&#34; at the top of this
                                    Privacy Policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-gdfa-secondary"/>
                                    7. Contact Us
                                </h2>
                                <p className="text-gray-700">If you have any questions about this Privacy Policy, please
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
