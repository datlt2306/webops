"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

export function ProblemSolutionSection() {
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

    const highlights = [
        {
            title: "Thiết kế tập trung chuyển đổi",
            desc: "UI/UX rõ ràng, nội dung định vị giá trị và phễu lead mạch lạc để tăng tỉ lệ form/đặt lịch.",
            icon: Sparkles,
        },
        {
            title: "SEO & nội dung bền vững",
            desc: "Nghiên cứu từ khóa, cấu trúc thông tin chuẩn SEO, tối ưu tốc độ và technical SEO ngay từ đầu.",
            icon: ShieldCheck,
        },
        {
            title: "Tự động hóa vận hành",
            desc: "Kết nối CRM, email, Zalo/WA chat và tracking — mọi tương tác được ghi nhận và nuôi dưỡng tự động.",
            icon: CheckCircle2,
        },
    ];

    const stats = [
        {
            label: "Dự án triển khai thực tế",
            value: "120+",
            useCountUp: true,
            countUpValue: 120,
            suffix: "+",
        },
        { label: "Thời gian bàn giao trung bình", value: "4-6 tuần" },
        {
            label: "Tăng trưởng chuyển đổi sau tối ưu",
            value: "+35%",
            useCountUp: true,
            countUpValue: 35,
            prefix: "+",
            suffix: "%",
        },
    ];

    return (
        <section id="about" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                        Về chúng tôi
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                        Webops Agency tập trung vào hiệu quả & tăng trưởng số
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        Chúng tôi thiết kế trải nghiệm, tối ưu SEO và tự động hóa hành trình khách
                        hàng để website trở thành kênh bán hàng vận hành 24/7.
                    </p>
                </div>

                <div
                    className={`grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-100 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-400 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                {stat.useCountUp ? (
                                    <>
                                        {stat.prefix && <span>{stat.prefix}</span>}
                                        <CountUp
                                            from={0}
                                            to={stat.countUpValue}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        {stat.suffix && <span>{stat.suffix}</span>}
                                    </>
                                ) : (
                                    stat.value
                                )}
                            </div>
                            <p className="text-blue-100/80 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div
                    className={`text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-700 mt-12 sm:mt-16 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-balance">
                        Bạn có hài lòng với website hiện tại của mình không?
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-blue-100/90 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        Chúng tôi kiểm tra miễn phí tốc độ, thiết kế, nội dung và khả năng thu hút
                        khách để bạn thấy cơ hội cải thiện.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-900 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
                        aria-label="Xem đánh giá miễn phí"
                    >
                        Xem đánh giá miễn phí
                    </Button>
                </div>
            </div>
        </section>
    );
}
