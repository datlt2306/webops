import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-4 py-20 relative z-6"
        >
            <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in-hero w-full">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/30 text-blue-50 text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                    Agency thiết kế website · SEO
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading text-white md:leading-24">
                    Website giúp doanh nghiệp của bạn{" "}
                    <span className="inline-flex items-center justify-center gap-2">
                        <span className="text-blue-200">tăng trưởng</span>
                        <RotatingText
                            texts={["chuẩn SEO", "bền vững"]}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-white text-blue-900 overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </span>
                </h2>

                <p className="text-base sm:text-xl md:text-2xl text-blue-100 text-balance max-w-3xl mx-auto mb-10 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
                    Thấu hiểu doanh nghiệp. Tối ưu giải pháp. Cùng bạn xây dựng nền tảng vận hành
                    hiệu quả.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-buttons">
                    <Button
                        size="lg"
                        className="bg-white text-blue-900 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
                        aria-label="Nhận tư vấn"
                    >
                        Nhận tư vấn
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {/* 
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 py-4 text-lg font-semibold border-white/40 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
                        aria-label="Xem portfolio"
                    >
                        <Play className="mr-2 h-5 w-5" />
                        Xem portfolio
                    </Button> */}
                </div>

                <div className="text-center px-4 overflow-hidden animate-fade-in-trust">
                    <p className="text-sm text-blue-100 mb-6">
                        Tin dùng trong nhiều lĩnh vực khác nhau
                    </p>
                    <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
                        <div className="flex items-center gap-8 opacity-80 hover:opacity-100 transition-all duration-500 animate-slide-left">
                            <div className="flex items-center gap-8 whitespace-nowrap text-blue-50/80">
                                <div className="text-base sm:text-lg font-semibold">
                                    Giáo dục - Đào tạo
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Bất động sản
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Thương mại điện tử
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Du lịch - Giải trí
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Spa - Làm đẹp
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Tài chính - Ngân hàng
                                </div>
                            </div>
                            <div className="flex items-center gap-8 whitespace-nowrap text-blue-50/80">
                                <div className="text-base sm:text-lg font-semibold">
                                    Giáo dục - Đào tạo
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Bất động sản
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Thương mại điện tử
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Du lịch - Giải trí
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Spa - Làm đẹp
                                </div>
                                <div className="text-base sm:text-lg font-semibold">
                                    Tài chính - Ngân hàng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
