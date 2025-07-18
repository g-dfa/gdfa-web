
import { HeroSection } from "@/components/hero-section"
import {AboutPreview} from "@/components/about-section";
import {CommunityBenefits} from "@/components/comunity-benifit-section";
import {MemberSpotlight} from "@/components/member-spotlight-section";
import {Testimonials} from "@/components/testimonial-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutPreview/>
            <CommunityBenefits/>
            <MemberSpotlight/>
            <Testimonials/>
        </>
    )
}