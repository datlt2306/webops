"use client";

import ProfileCard from "./ProfileCard";
import TiltedCard from "./TiltedCard";

const teamMembers = [
    {
        name: "Lê Trọng Đạt",
        title: "Software Engineer",
        handle: "datlt2306",
        status: "Online" as const,
        contactText: "Liên hệ",
        avatarUrl: "/images/avatar/datlt.png",
    },
    {
        name: "Tân Văn Sơn",
        title: "Designer",
        handle: "sontv",
        status: "Online" as const,
        contactText: "Liên hệ",
        avatarUrl: "/images/avatar/sontv.png",
    },
    {
        name: "Phạm Văn Dũng",
        title: "SEOer",
        handle: "dungpv",
        status: "Online" as const,
        contactText: "Liên hệ",
        avatarUrl: "/images/avatar/dungpv.png",
    },
    {
        name: "Ngô Văn Ngọc",
        title: "Software Engineer",
        handle: "ngocnv",
        status: "Online" as const,
        contactText: "Liên hệ",
        avatarUrl: "/images/avatar/ngocnv.png",
    },
];

const ShowTeamSection = () => {
    return (
        <section
            id="team"
            className="relative z-10 py-16 sm:py-24 px-4"
            aria-labelledby="team-heading"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm font-medium border border-white/20 mb-6 backdrop-blur">
                        Đội ngũ
                    </div>
                    <h2
                        id="team-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-4 sm:mb-6"
                    >
                        Gặp gỡ team phát triển
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <ProfileCard
                            key={member.handle}
                            {...member}
                            showUserInfo={false}
                            enableTilt={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowTeamSection;
