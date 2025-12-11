"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, ShieldCheck, Timer, PenLine, Users } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
    bulletPoints?: string[];
};

const faqItems: FAQItem[] = [
    {
        question: "Thời gian làm website là bao lâu?",
        answer: "Thông thường 3-6 tuần tuỳ phạm vi và độ phức tạp. Chúng tôi làm rõ yêu cầu trong tuần 1, build & review trong các sprint kế tiếp để bạn luôn theo sát tiến độ.",
        bulletPoints: [
            "Tuần 1: chốt cấu trúc, wireframe, thiết kế chủ đạo",
            "Tuần 2-3: phát triển tính năng lõi, tối ưu hiệu năng",
            "Tuần 4+: nghiệm thu, tinh chỉnh nội dung, tối ưu SEO",
        ],
    },
    {
        question: "Bảo trì như nào?",
        answer: "Chúng tôi theo dõi uptime, cập nhật bảo mật định kỳ và hỗ trợ khắc phục sự cố. Mọi thay đổi nhỏ được xử lý qua ticket rõ ràng.",
        bulletPoints: [
            "Giám sát 24/7, thông báo lỗi tức thời",
            "Sao lưu định kỳ, khôi phục nhanh khi có sự cố",
            "Cập nhật thư viện, vá bảo mật hàng tháng",
        ],
    },
    {
        question: "Có hỗ trợ viết content không?",
        answer: "Có. Đội ngũ content hỗ trợ brainstorming, viết bài chuẩn SEO và đảm bảo tone giọng thương hiệu thống nhất trên toàn bộ website.",
        bulletPoints: [
            "Xây dựng khung nội dung theo hành trình khách hàng",
            "Viết & biên tập đa ngôn ngữ, tối ưu SEO on-page",
            "Chuẩn hóa CTA, thông điệp và microcopy theo brand",
        ],
    },
    {
        question: "Khi xây dựng một website mới cần chuẩn bị những gì?",
        answer: "Bạn nên chuẩn bị nội dung cơ bản về doanh nghiệp (logo, giới thiệu, dịch vụ/sản phẩm chính), các tài nguyên hình ảnh, mục tiêu website, phân tích đối thủ và thông tin liên hệ. Nếu chưa có đủ, đội ngũ chúng tôi có thể tư vấn và hỗ trợ lên cấu trúc từ A-Z.",
        bulletPoints: [
            "Thiết kế glassmorphism đồng bộ, code sạch và có kiểm thử",
            "Quy trình QA, review code, staging trước khi go-live",
            "Đội ngũ trực tiếp tư vấn tăng chuyển đổi, không chỉ làm giao diện",
        ],
    },
    {
        question: "Website có tối ưu hiển thị trên điện thoại không?",
        answer: "Tất cả dự án đều thiết kế responsive chuẩn trên mọi thiết bị. Đảm bảo trải nghiệm mượt mà từ mobile, tablet đến desktop.",
        bulletPoints: [
            "Giao diện linh hoạt, tự động co giãn",
            "Tối ưu tốc độ tải trên 3G/4G",
            "Kiểm thử thực tế trên đa dạng thiết bị",
        ],
    },
    {
        question: "Có được bàn giao mã nguồn không?",
        answer: "Khách hàng luôn nhận được toàn bộ mã nguồn, tài liệu hướng dẫn sử dụng, và database (nếu có) sau khi nghiệm thu và thanh toán.",
        bulletPoints: [
            "Mã nguồn sạch, chú thích rõ ràng",
            "Không khoá phần quản trị, tự do chỉnh sửa",
            "Hỗ trợ migrate lên hosting riêng của khách",
        ],
    },
    {
        question: "Chi phí website đã bao gồm tên miền, hosting chưa?",
        answer: "Thông thường báo giá chưa bao gồm tên miền và hosting, nhưng đội ngũ sẽ tư vấn gói phù hợp hoặc hỗ trợ đăng ký nếu bạn cần.",
        bulletPoints: [
            "Tư vấn miễn phí lựa chọn domain, hosting tối ưu",
            "Hỗ trợ cấu hình SSL, bảo mật server cơ bản",
            "Có thể báo giá trọn gói nếu khách có nhu cầu",
        ],
    },
];

export const FAQSection = () => {
    return (
        <section id="faq" className="relative z-10 px-4 py-16 sm:py-24">
            <div className="absolute inset-0 max-w-5xl mx-auto blur-3xl opacity-40 pointer-events-none">
                <div className="absolute -top-12 left-10 h-64 w-64 rounded-full bg-blue-500/30" />
                <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-400/25" />
            </div>

            <div className="max-w-6xl mx-auto relative">
                <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10"
                        aria-hidden="true"
                    />

                    <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] p-8 sm:p-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 shadow-inner backdrop-blur">
                                <Sparkles className="h-4 w-4" aria-hidden="true" />
                                FAQs - Những câu hỏi hay gặp
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                Giải đáp nhanh để bạn quyết định tự tin
                            </h2>
                            <p className="text-blue-100/90">
                                Mọi quy trình, bảo trì và chất lượng đều minh bạch. Nếu chưa thấy
                                câu trả lời bạn cần, cứ nhắn cho chúng tôi để được tư vấn thêm trong
                                15 phút.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm text-blue-100/90">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-white font-semibold mb-1">
                                        <Timer className="h-4 w-4" aria-hidden="true" />
                                        Lead time rõ ràng
                                    </div>
                                    <p>Checklist hằng tuần, demo liên tục.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-white font-semibold mb-1">
                                        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                                        Bảo trì chủ động
                                    </div>
                                    <p>Cảnh báo sớm, backup định kỳ.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-white font-semibold mb-1">
                                        <PenLine className="h-4 w-4" aria-hidden="true" />
                                        Content có chiến lược
                                    </div>
                                    <p>SEO on-page, CTA rõ ràng.</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                    <div className="flex items-center gap-2 text-white font-semibold mb-1">
                                        <Users className="h-4 w-4" aria-hidden="true" />
                                        Đội ngũ senior
                                    </div>
                                    <p>Design, dev, QA cùng tham gia từng sprint.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6 shadow-inner">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-2"
                                aria-label="Danh sách câu hỏi thường gặp"
                            >
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={item.question}
                                        value={`faq-${index}`}
                                        className="rounded-xl border border-white/10 bg-white/5 px-4"
                                    >
                                        <AccordionTrigger className="text-sm text-white">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-blue-100/90">
                                            <p className="mb-3">{item.answer}</p>
                                            {item.bulletPoints && (
                                                <ul className="space-y-2 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed">
                                                    {item.bulletPoints.map((point) => (
                                                        <li
                                                            key={point}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <span
                                                                className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300"
                                                                aria-hidden="true"
                                                            />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
