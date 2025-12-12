"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = useCallback(() => {
        const shouldShowButton = window.scrollY > 240;
        setIsVisible(shouldShowButton);
    }, []);

    const handleScrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleScrollToTop();
            }
        },
        [handleScrollToTop]
    );

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    if (!isVisible) return null;

    return (
        <button
            type="button"
            aria-label="Cuộn lên đầu trang"
            onClick={handleScrollToTop}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
    );
};

export default ScrollToTopButton;
