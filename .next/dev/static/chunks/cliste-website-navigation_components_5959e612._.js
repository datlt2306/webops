(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cliste-website-navigation/components/page-transition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTransition",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PageTransition({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransition.useEffect": ()=>{
            console.log("[v0] Page changed to:", pathname);
            // Fade in when page loads
            setIsAnimating(true);
            const timer = setTimeout({
                "PageTransition.useEffect.timer": ()=>{
                    setIsAnimating(false);
                }
            }["PageTransition.useEffect.timer"], 50);
            return ({
                "PageTransition.useEffect": ()=>clearTimeout(timer)
            })["PageTransition.useEffect"];
        }
    }["PageTransition.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/cliste-website-navigation/components/page-transition.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(PageTransition, "fWYAy1lWuiQ6nKWtO3OCls0vVwM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cliste-website-navigation/components/navigation-transition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationTransition",
    ()=>NavigationTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cliste-website-navigation/node_modules/.pnpm/next@16.0.8_react-dom@19.2.1_react@19.2.1__react@19.2.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NavigationTransition() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const previousPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationTransition.useEffect": ()=>{
            console.log("[v0] NavigationTransition mounted for path:", pathname);
            // Handle link clicks for smooth transitions
            const handleLinkClick = {
                "NavigationTransition.useEffect.handleLinkClick": (e)=>{
                    const target = e.target;
                    const link = target.closest("a");
                    if (link && link.href && link.href.startsWith(window.location.origin)) {
                        const url = new URL(link.href);
                        // Only intercept internal navigation to different pages
                        if (url.pathname !== pathname && !url.hash) {
                            console.log("[v0] Intercepting navigation to:", url.pathname);
                            e.preventDefault();
                            // Start fade out
                            setIsTransitioning(true);
                            console.log("[v0] Transition state set to true");
                            // Navigate after fade out
                            setTimeout({
                                "NavigationTransition.useEffect.handleLinkClick": ()=>{
                                    console.log("[v0] Navigating to:", url.pathname);
                                    router.push(url.pathname);
                                }
                            }["NavigationTransition.useEffect.handleLinkClick"], 300);
                        }
                    }
                }
            }["NavigationTransition.useEffect.handleLinkClick"];
            document.addEventListener("click", handleLinkClick);
            return ({
                "NavigationTransition.useEffect": ()=>{
                    document.removeEventListener("click", handleLinkClick);
                }
            })["NavigationTransition.useEffect"];
        }
    }["NavigationTransition.useEffect"], [
        pathname,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationTransition.useEffect": ()=>{
            // Check if pathname actually changed
            if (pathname !== previousPathname.current) {
                console.log("[v0] Pathname changed from", previousPathname.current, "to", pathname);
                console.log("[v0] isTransitioning state:", isTransitioning);
                if (isTransitioning) {
                    console.log("[v0] Page loaded, fading in");
                }
                // Always fade in after navigation, even if state wasn't set
                setTimeout({
                    "NavigationTransition.useEffect": ()=>{
                        setIsTransitioning(false);
                    }
                }["NavigationTransition.useEffect"], 50);
                previousPathname.current = pathname;
            }
        }
    }["NavigationTransition.useEffect"], [
        pathname,
        isTransitioning
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 bg-black pointer-events-none transition-opacity duration-300 ease-in-out z-[100] ${isTransitioning ? "opacity-100" : "opacity-0"}`
    }, void 0, false, {
        fileName: "[project]/cliste-website-navigation/components/navigation-transition.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(NavigationTransition, "nwhbk3Jve9MM4AUHYvrf2jjDZgI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cliste$2d$website$2d$navigation$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$1_react$40$19$2e$2$2e$1_$5f$react$40$19$2e$2$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NavigationTransition;
var _c;
__turbopack_context__.k.register(_c, "NavigationTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cliste-website-navigation_components_5959e612._.js.map