import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import Aurora from "@/components/Aurora";
import { FeaturesSection } from "@/components/features-section";
import { AITeamSection } from "@/components/ai-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { NewsSection } from "@/components/news-section";
import ShowTeamSection from "@/components/show-team-section";
import { FAQSection } from "@/components/faq-section";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <main className="min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 w-full h-full">
                    <Aurora
                        colorStops={["#0ea5e9", "#1d4ed8", "#0f172a"]}
                        amplitude={1.2}
                        blend={0.6}
                        speed={0.8}
                    />
                </div>
                <div className="relative z-10">
                    <GlassmorphismNav />
                    <HeroSection />
                    <ProblemSolutionSection />
                    <FeaturesSection />

                    <AITeamSection />
                    <ShowTeamSection />
                    <NewsSection />
                    <TestimonialsSection />

                    <ROICalculatorSection />
                    <FAQSection />
                    <CTASection />
                    <Footer />
                </div>
            </main>
        </div>
    );
}
