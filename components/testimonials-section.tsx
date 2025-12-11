"use client";

import { useEffect, useRef } from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-column";

export function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elements = entry.target.querySelectorAll(".fade-in-element");
                        elements.forEach((element, index) => {
                            setTimeout(() => {
                                element.classList.add("animate-fade-in-up");
                            }, index * 300);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            text: "Website mới giúp chúng tôi tăng 40% tỉ lệ gửi form chỉ sau 2 tuần, content SEO lên top cho từ khóa chính.",
            name: "Trần Thu Hà",
            role: "CMO - SaaS",
        },
        {
            text: "Tracking rõ ràng, form tối ưu, đội sales nhận lead ngay lập tức. Tốc độ triển khai rất nhanh.",
            name: "Nguyễn Hoàng",
            role: "Head of Growth - Retail",
        },
        {
            text: "Thiết kế gọn, đẹp, tốc độ tải nhanh. Tự động hóa email/WA giúp giữ liên lạc khách hàng mà không tốn thêm nhân sự.",
            name: "Lê Minh",
            role: "Founder - Hospitality",
        },
        {
            text: "SEO technical được làm chuẩn, blog lên top dần, traffic organic tăng ổn định. Rất hài lòng.",
            name: "Phạm Khánh",
            role: "Marketing Manager - Edu",
        },
        {
            text: "UI/UX mới tăng rõ rệt số booking, team hỗ trợ tận tâm và đo lường chi tiết.",
            name: "Vũ Lan",
            role: "Growth Lead - Agency",
        },
        {
            text: "Chúng tôi có hệ thống component và guideline rõ ràng, việc mở rộng page mới nhanh hơn nhiều.",
            name: "Bảo Anh",
            role: "Product Designer",
        },
    ];

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Header Section - Keep as user loves it */}
                <div className="text-center mb-16 md:mb-32">
                    <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
                        <div className="w-8 h-px bg-white/30"></div>
                        Khách hàng nói gì
                        <div className="w-8 h-px bg-white/30"></div>
                    </div>
                    <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
                        Phản hồi
                        <span className="font-medium italic"> từ những dự án gần đây</span>
                    </h2>
                    <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Những phản hồi từ khách hàng là minh chứng rõ ràng cho chất lượng và hiệu
                        quả dịch vụ của chúng tôi.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
                    <div
                        className="flex gap-8 max-w-6xl"
                        style={{
                            maskImage:
                                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <TestimonialsColumn
                            testimonials={testimonials.slice(0, 3)}
                            duration={15}
                            className="flex-1"
                        />
                        <TestimonialsColumn
                            testimonials={testimonials.slice(2, 5)}
                            duration={12}
                            className="flex-1 hidden md:block"
                        />
                        <TestimonialsColumn
                            testimonials={testimonials.slice(1, 4)}
                            duration={18}
                            className="flex-1 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
