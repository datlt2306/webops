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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
            .projects-swiper .swiper-pagination {
                position: relative;
                margin-top: 2rem;
            }
            .projects-swiper .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: rgba(255, 255, 255, 0.3);
                opacity: 1;
                transition: all 0.3s ease;
            }
            .projects-swiper .swiper-pagination-bullet-active {
                background: rgba(59, 130, 246, 0.8);
                width: 24px;
                border-radius: 5px;
            }
            .projects-swiper .swiper-pagination-bullet:hover {
                background: rgba(255, 255, 255, 0.5);
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
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
    const handleSelectCategory = (key: string) => {
        setActiveCategory(key);
    };

    const filteredProjects = useMemo(
        () => projects.filter((project) => project.category === activeCategory),
        [activeCategory]
    );

    return (
        <section id="projects" ref={sectionRef} className="relative z-10">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <div
                            className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 backdrop-blur ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Dự án
                        </div>

                        <h2
                            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-200 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Dự án tiêu biểu
                        </h2>

                        <p
                            className={`text-lg text-blue-100 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Những dự án gần đây chúng tôi triển khai, tập trung vào kết quả đo lường
                            rõ ràng và thời gian thực thi nhanh.
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="relative sm:hidden">
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0B1221] to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0B1221] to-transparent z-10" />
                            <div
                                className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-1 pb-3 relative z-20"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                aria-label="Chọn ngành dự án"
                                role="tablist"
                            >
                                {categories.map((cat) => {
                                    const Icon = cat.icon;
                                    const isActive = activeCategory === cat.key;
                                    return (
                                        <button
                                            key={cat.key}
                                            onClick={() => handleSelectCategory(cat.key)}
                                            onTouchStart={(e) => {
                                                e.stopPropagation();
                                                handleSelectCategory(cat.key);
                                            }}
                                            className={`flex shrink-0 snap-start items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 touch-manipulation ${
                                                isActive
                                                    ? "border-blue-300/60 bg-blue-500/15 text-white shadow-[0_10px_35px_rgba(59,130,246,0.35)]"
                                                    : "border-white/10 bg-white/5 text-blue-100/90 hover:border-blue-200/40"
                                            }`}
                                            style={{ touchAction: "manipulation" }}
                                            tabIndex={0}
                                            aria-label={`Chọn ngành ${cat.label}`}
                                            aria-selected={isActive}
                                            role="tab"
                                        >
                                            <span
                                                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                                                    isActive
                                                        ? "border-blue-300/70 bg-blue-500/20"
                                                        : "border-white/15 bg-white/5"
                                                }`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <span className="text-sm font-semibold leading-tight">
                                                {cat.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="hidden justify-center sm:flex">
                            <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.key}
                                        onClick={() => handleSelectCategory(cat.key)}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                            handleSelectCategory(cat.key);
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all touch-manipulation ${
                                            activeCategory === cat.key
                                                ? "bg-blue-500/20 text-white border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                                                : "text-blue-100/80 hover:text-white"
                                        }`}
                                        style={{ touchAction: "manipulation" }}
                                        aria-label={`Chọn ngành ${cat.label}`}
                                        tabIndex={0}
                                        role="tab"
                                        aria-selected={activeCategory === cat.key}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={24}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            modules={[Pagination]}
                            className="projects-swiper"
                        >
                            {filteredProjects.map((project, index) => (
                                <SwiperSlide key={project.title}>
                                    <div
                                        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-0 flex flex-col h-full"
                                        style={{
                                            transitionDelay: isVisible
                                                ? `${150 + index * 100}ms`
                                                : "0ms",
                                        }}
                                    >
                                        <div className="relative w-full h-56 rounded-t-2xl overflow-hidden bg-slate-900/40">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-800 ease-out origin-top group-hover:-translate-y-8 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div>
                                                    <p className="text-xs text-blue-100 font-semibold uppercase tracking-wide">
                                                        {project.tag}
                                                    </p>
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
