"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export function ROICalculatorSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("pricing")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const plans = [
    {
      name: "Starter",
      price: "12.000.000đ",
      note: "/dự án",
      features: [
        "1 website landing/giới thiệu",
        "Thiết kế UI/UX chuẩn mobile-first",
        "Tối ưu tốc độ & bảo mật cơ bản",
        "Tracking form/submission đơn giản",
        "Bàn giao trong 3-4 tuần",
      ],
    },
    {
      name: "Growth",
      price: "18.000.000đ",
      note: "/dự án",
      highlighted: true,
      features: [
        "Website đa trang, blog chuẩn SEO",
        "UI Kit cơ bản, component tái sử dụng",
        "Technical SEO + schema + tối ưu tốc độ",
        "Tracking GA4 + GTM + pixel, form nâng cao",
        "Tích hợp CRM/email/WA, bàn giao 4-6 tuần",
      ],
    },
    {
      name: "Enterprise",
      price: "Liên hệ",
      note: "theo phạm vi",
      features: [
        "Hệ thống design system đầy đủ",
        "Luồng phê duyệt nội dung, role-based",
        "Tối ưu hiệu năng nâng cao, CDN/edge",
        "Tự động hóa lead nurturing đa kênh",
        "Vận hành & bảo trì dài hạn (SLA)",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-50 mb-6">
            Bảng giá
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
            Linh hoạt theo mục tiêu tăng trưởng
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto text-balance">
            Chọn gói phù hợp hoặc đặt lịch tư vấn để chúng tôi thiết kế giải pháp riêng cho bạn.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white/5 backdrop-blur-sm p-6 md:p-8 flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? "border-blue-400/60 shadow-2xl shadow-blue-500/20"
                  : "border-white/10 hover:border-blue-200/50 hover:shadow-xl"
              }`}
              style={{
                transitionDelay: isVisible ? `${150 + index * 120}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white">Phổ biến</span>
                )}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {plan.price} <span className="text-sm font-medium text-blue-100">{plan.note}</span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-blue-50/90">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-200 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Button
                  className={`w-full rounded-full font-semibold ${plan.highlighted ? "bg-white text-blue-900 hover:bg-blue-50" : "bg-white/10 text-white hover:bg-white/20 border border-white/20"}`}
                  aria-label="Đặt lịch tư vấn"
                >
                  Đặt lịch tư vấn
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 md:mt-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-blue-100/80">
            Giá đã bao gồm thiết kế, phát triển, tối ưu cơ bản và hướng dẫn quản trị. Phạm vi mở rộng sẽ được báo giá rõ ràng
            sau buổi tư vấn.
          </p>
        </div>
      </div>
    </section>
  )
}
