"use client";

import { Laptop, LineChart, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
            <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
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

                <div className="max-w-7xl mx-auto relative">
                    <div
                        className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 mb-6">
                            Dịch vụ
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
                            Trọn bộ dịch vụ giúp website{" "}
                            <span className="text-blue-700">hoạt động hiệu quả</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Thiết kế, SEO, nội dung và tự động hóa — tất cả phối hợp để website hoạt
                            động hiệu quả.
                        </p>
                    </div>

                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-200"
                                style={{
                                    transitionDelay: isVisible ? `${200 + index * 80}ms` : "0ms",
                                }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
