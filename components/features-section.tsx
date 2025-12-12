"use client";

import { Laptop, LineChart, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ParticleCard, GlobalSpotlight } from "./MagicBento";

export function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const services = [
        {
            title: "Thiết kế website tối ưu",
            desc: "UI/UX rõ ràng, nội dung mạch lạc giúp websitetăng tỉ lệ chuyển đổi.",
            icon: Laptop,
        },
        {
            title: "SEO & Content",
            desc: "Nội dung chuẩn SEO, cấu trúc rõ ràng và technical SEO tối ưu từ đầu.",
            icon: LineChart,
        },
        {
            title: "Tối ưu chuyển đổi (CRO)",
            desc: "A/B test CTA, tối ưu form, heatmap & tracking rõ ràng để cải thiện tỉ lệ chuyển đổi.",
            icon: Rocket,
        },
        {
            title: "Tool & Tự động hóa",
            desc: "Kết nối CRM, email, chatbot, booking; nuôi dưỡng lead tự động và cảnh báo real-time.",
            icon: Workflow,
        },
        {
            title: "Thương hiệu & UI Kit",
            desc: "Hệ thống màu, typography và component library thống nhất, dễ mở rộng.",
            icon: Sparkles,
        },
        {
            title: "Vận hành & bảo trì",
            desc: "Hỗ trợ, xử lý lỗi, cập nhật SEO/hiệu năng định kỳ và backup bảo mật để website vận hành bền vững.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section id="services" ref={sectionRef} className="relative z-10">
            <style>
                {`
                    .card--border-glow::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        padding: 6px;
                        background: radial-gradient(var(--glow-radius, 300px) circle at var(--glow-x, 50%) var(--glow-y, 50%),
                            rgba(96, 165, 250, calc(var(--glow-intensity, 0) * 0.8)) 0%,
                            rgba(96, 165, 250, calc(var(--glow-intensity, 0) * 0.4)) 30%,
                            transparent 60%);
                        border-radius: inherit;
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask-composite: exclude;
                        pointer-events: none;
                        opacity: 1;
                        z-index: 1;
                    }
                `}
            </style>
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                        }}
                    ></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-200 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${4 + i * 0.5}s`,
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <div
                        className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm font-medium border border-white/20 mb-6 backdrop-blur">
                            Dịch vụ
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                            Trọn bộ dịch vụ giúp website{" "}
                            <span className="text-blue-200">hoạt động hiệu quả</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                            Thiết kế, SEO, nội dung và tự động hóa — tất cả phối hợp để website hoạt
                            động hiệu quả.
                        </p>
                    </div>

                    <div ref={gridRef} className="bento-section relative">
                        <GlobalSpotlight
                            gridRef={gridRef}
                            disableAnimations={isMobile}
                            enabled={!isMobile}
                            spotlightRadius={300}
                            glowColor="96, 165, 250"
                        />
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${
                                isVisible ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            {services.map((service) => (
                                <ParticleCard
                                    key={service.title}
                                    className="card bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 h-full border border-white/10 card--border-glow"
                                    style={
                                        {
                                            "--glow-x": "50%",
                                            "--glow-y": "50%",
                                            "--glow-intensity": "0",
                                            "--glow-radius": "300px",
                                        } as React.CSSProperties
                                    }
                                    particleCount={isMobile ? 0 : 8}
                                    glowColor="96, 165, 250"
                                    enableTilt={!isMobile}
                                    clickEffect={!isMobile}
                                    enableMagnetism={!isMobile}
                                    disableAnimations={isMobile}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-100 flex items-center justify-center mb-5">
                                        <service.icon className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                                        {service.desc}
                                    </p>
                                </ParticleCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
