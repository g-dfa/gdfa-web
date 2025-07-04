import Link from 'next/link';
import {Header} from "@/components/navbar";
import {Footer} from "@/components/footer";

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
