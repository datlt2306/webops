"use client";

import { ArrowUpRight } from "lucide-react";

const articles = [
    {
        title: "Checklist SEO kỹ thuật cho website mới",
        desc: "Những bước quan trọng để site sẵn sàng index và tối ưu Core Web Vitals.",
        tag: "SEO",
    },
    {
        title: "5 mẫu landing page tối ưu chuyển đổi B2B",
        desc: "Cấu trúc nội dung, CTA và tracking cần có để đội sales nhận lead nhanh.",
        tag: "CRO",
    },
    {
        title: "Tự động hóa quy trình chăm sóc lead",
        desc: "Kết nối form, CRM, email và chat để giảm thất thoát cơ hội.",
        tag: "Automation",
    },
];

export function NewsSection() {
    return (
        <section id="news" className="py-16 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <div>
                        <p className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-50 text-sm font-medium">
                            Tin tức & tài nguyên
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                            Chia sẻ từ đội ngũ
                        </h2>
                        <p className="text-blue-100 mt-2">
                            Cập nhật insight SEO, UI/UX và các tin tức mới nhất.
                        </p>
                    </div>
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-blue-50 hover:text-white font-semibold transition-all"
                        aria-label="Xem tất cả bài viết"
                    >
                        Xem tất cả
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article.title}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-200/50 transition-all duration-300"
                        >
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-blue-100">
                                {article.tag}
                            </span>
                            <h3 className="text-xl text-white font-semibold mt-4">
                                {article.title}
                            </h3>
                            <p className="text-blue-100/90 mt-3">{article.desc}</p>
                            <button
                                className="mt-4 inline-flex items-center gap-2 text-blue-100 hover:text-white font-medium"
                                aria-label="Đọc bài"
                            >
                                Đọc bài
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
