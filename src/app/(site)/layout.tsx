import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import '@/app/globals.css';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        default: "Greater Dinajpur Freelancer Association - GDFA",
        template: "%s | GDFA",
    },
    description:
        "Empowering local talent, connecting opportunities, and building a thriving freelance community in Greater Dinajpur region. Join GDFA for skill development, networking, and career growth.",
    keywords: [
        "freelancer",
        "dinajpur",
        "bangladesh",
        "community",
        "web development",
        "graphic design",
        "digital marketing",
        "freelance community",
        "freelance jobs",
        "skill development",
        "networking",
        "Thakurgaon",
        "Panchagarh",
        "Rangpur Division",
    ],

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/logo.png", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico",
    },
    authors: [{ name: "Greater Dinajpur Freelancer Association", url: "https://g-dfa.org" }],
    creator: "Greater Dinajpur Freelancer Association",
    publisher: "Greater Dinajpur Freelancer Association",
    openGraph: {
        title: "Greater Dinajpur Freelancer Association - GDFA",
        description:
            "Empowering local talent, connecting opportunities, and building a thriving freelance community in Greater Dinajpur region. Join GDFA for skill development, networking, and career growth.",
        url: "https://g-dfa.org",
        siteName: "GDFA",
        images: [
            {
                url: "/placeholder.svg?height=630&width=1200",
                width: 1200,
                height: 630,
                alt: "Greater Dinajpur Freelancer Association Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Greater Dinajpur Freelancer Association - GDFA",
        description:
            "Empowering local talent, connecting opportunities, and building a thriving freelance community in Greater Dinajpur region. Join GDFA for skill development, networking, and career growth.",
        creator: "@GDFAOfficial",
        images: ["/placeholder.svg?height=675&width=1200"],
    },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Site Header */}
            <Header />

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
           <Footer/>
        </div>
    );
}
