import { ShieldCheck, CalendarRange, UserRoundCog, Smile } from "lucide-react";

const features = [
    {
        id: "security",
        icon: ShieldCheck,
        title: "Unmatched Security and Care",
        description: "24/7 monitored, pest-free, and ultra-safe storage.",
    },
    {
        id: "flexible",
        icon: CalendarRange,
        title: "Flexible Storage Plans",
        description: "Plans that fit short, long, or custom terms.",
    },
    {
        id: "account-manager",
        icon: UserRoundCog,
        title: "Key Account Manager",
        description: "Dedicated expert support from onboarding to exit.",
    },
    {
        id: "satisfaction",
        icon: Smile,
        title: "Customer Satisfaction",
        description: "Friendly support for personal & business storage.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="py-20 md:py-32 relative bg-industrial-white"
            aria-labelledby="why-choose-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-industrial-orange/10 text-industrial-orange text-sm font-medium mb-4">
                        Why Us
                    </span>
                    <h2
                        id="why-choose-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Why Choose{" "}
                        <span className="text-industrial-orange">StoreMySammaan?</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                        We go beyond storage — delivering security, flexibility, and exceptional service.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;

                        return (
                            <article
                                key={feature.id}
                                className="glass-card rounded-2xl p-6 sm:p-8 card-hover group shadow-sm transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-industrial-orange/5 flex items-center justify-center mb-6 group-hover:bg-industrial-orange/10 transition-colors duration-300">
                                    <IconComponent
                                        className="w-7 h-7 text-industrial-orange"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
