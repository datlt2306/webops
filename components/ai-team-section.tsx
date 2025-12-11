"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    Banknote,
    Building2,
    Clapperboard,
    Globe2,
    GraduationCap,
    Megaphone,
    ShoppingBag,
    Sparkles,
} from "lucide-react";

export function AITeamSection() {
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

    const categories = [
        { key: "finance", label: "Tài chính", icon: Banknote },
        { key: "education", label: "Giáo dục", icon: GraduationCap },
        { key: "ecommerce", label: "Thương mại điện tử", icon: ShoppingBag },
        { key: "realestate", label: "Bất động sản", icon: Building2 },
        { key: "hospitality", label: "Du lịch - Giải trí", icon: Globe2 },
        { key: "spa", label: "Spa - Làm đẹp", icon: Sparkles },
        { key: "media", label: "Truyền thông", icon: Megaphone },
    ];

    const projects = [
        // Tài chính
        {
            title: "Fintech Lending Platform",
            icon: Banknote,
            tag: "Finance",
            category: "finance",
            image: "/images/projects/rinku.png",
        },
        {
            title: "Ngân hàng số - Onboarding",
            icon: Banknote,
            tag: "Finance",
            category: "finance",
            image: "/images/projects/great-wood.png",
        },
        {
            title: "Bảo hiểm số - Customer Portal",
            icon: Banknote,
            tag: "Finance",
            category: "finance",
            image: "/images/projects/beauty-angel-academy.png",
        },
        // Giáo dục
        {
            title: "EdTech Learning Hub",
            icon: GraduationCap,
            tag: "Education",
            category: "education",
            image: "/images/projects/rinku.png",
        },
        {
            title: "Trung tâm ngoại ngữ - Landing",
            icon: GraduationCap,
            tag: "Education",
            category: "education",
            image: "/images/projects/great-wood.png",
        },
        {
            title: "Học bổng & tuyển sinh",
            icon: GraduationCap,
            tag: "Education",
            category: "education",
            image: "/images/projects/beauty-angel-academy.png",
        },
        // Thương mại điện tử
        {
            title: "Ecom - Marketplace",
            icon: ShoppingBag,
            tag: "Ecommerce",
            category: "ecommerce",
            image: "/images/projects/great-wood.png",
        },
        {
            title: "D2C Beauty Store",
            icon: ShoppingBag,
            tag: "Ecommerce",
            category: "ecommerce",
            image: "/images/projects/beauty-angel-academy.png",
        },
        {
            title: "Fashion Boutique Online",
            icon: ShoppingBag,
            tag: "Ecommerce",
            category: "ecommerce",
            image: "/images/projects/rinku.png",
        },
        // Bất động sản
        {
            title: "Real Estate Listing Hub",
            icon: Building2,
            tag: "Real Estate",
            category: "realestate",
            image: "/images/projects/rinku.png",
        },
        {
            title: "Dự án khu đô thị",
            icon: Building2,
            tag: "Real Estate",
            category: "realestate",
            image: "/images/projects/great-wood.png",
        },
        {
            title: "Cho thuê & Booking",
            icon: Building2,
            tag: "Real Estate",
            category: "realestate",
            image: "/images/projects/beauty-angel-academy.png",
        },
        // Du lịch - Giải trí
        {
            title: "Resort Booking Experience",
            icon: Globe2,
            tag: "Hospitality",
            category: "hospitality",
            image: "/images/projects/beauty-angel-academy.png",
        },
        {
            title: "Travel Tour Marketplace",
            icon: Globe2,
            tag: "Hospitality",
            category: "hospitality",
            image: "/images/projects/rinku.png",
        },
        {
            title: "Event & Ticketing",
            icon: Clapperboard,
            tag: "Entertainment",
            category: "hospitality",
            image: "/images/projects/great-wood.png",
        },
        // Spa - Làm đẹp
        {
            title: "Spa & Beauty Booking",
            icon: Sparkles,
            tag: "Spa",
            category: "spa",
            image: "/images/projects/beauty-angel-academy.png",
        },
        {
            title: "Clinic Aesthetic Site",
            icon: Sparkles,
            tag: "Spa",
            category: "spa",
            image: "/images/projects/rinku.png",
        },
        {
            title: "Salon & Membership",
            icon: Sparkles,
            tag: "Spa",
            category: "spa",
            image: "/images/projects/great-wood.png",
        },
        // Truyền thông
        {
            title: "Agency Portfolio",
            icon: Megaphone,
            tag: "Media",
            category: "media",
            image: "/images/projects/great-wood.png",
        },
        {
            title: "Production House",
            icon: Clapperboard,
            tag: "Media",
            category: "media",
            image: "/images/projects/rinku.png",
        },
        {
            title: "PR & Campaign Hub",
            icon: Megaphone,
            tag: "Media",
            category: "media",
            image: "/images/projects/beauty-angel-academy.png",
        },
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0].key);

    const filteredProjects = useMemo(
        () => projects.filter((project) => project.category === activeCategory),
        [activeCategory]
    );

    return (
        <section id="projects" ref={sectionRef} className="relative z-10">
            <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <div
                            className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Dự án
                        </div>

                        <h2
                            className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Case study tiêu biểu
                        </h2>

                        <p
                            className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Những dự án gần đây chúng tôi triển khai, tập trung vào kết quả đo lường
                            rõ ràng và thời gian thực thi nhanh.
                        </p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50/60 p-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key)}
                                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                        activeCategory === cat.key
                                            ? "bg-white text-blue-700 shadow-sm"
                                            : "text-blue-800/70 hover:text-blue-800"
                                    }`}
                                    aria-label={`Chọn ngành ${cat.label}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`grid gap-6 md:grid-cols-3 xl:grid-cols-4 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-0 flex flex-col"
                                style={{
                                    transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms",
                                }}
                            >
                                <div className="relative w-full h-56 rounded-t-2xl overflow-hidden bg-slate-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-800 ease-out origin-top group-hover:-translate-y-8 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div>
                                            <p className="text-xs text-blue-700 font-semibold uppercase tracking-wide">
                                                {project.tag}
                                            </p>
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
