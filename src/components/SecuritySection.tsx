import { Cctv, Eye, Flame } from "lucide-react";
import { SECURITY_FEATURES } from "@/lib/constants";

// Map icon names to components
const iconMap = {
    Cctv,
    Eye,
    Flame,
};

export default function SecuritySection() {
    return (
        <section
            id="security"
            className="py-20 md:py-32 section-gradient-security relative overflow-hidden"
            aria-labelledby="security-heading"
        >
            {/* Decorative elements */}
            <div
                className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue/10 rounded-full blur-[120px]"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 right-1/4 w-80 h-80 bg-industrial-orange/10 rounded-full blur-[100px]"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
                        Security First
                    </span>
                    <h2
                        id="security-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Your Trust, Our{" "}
                        <span className="bg-gradient-to-r from-slate-900 to-industrial-orange bg-clip-text text-transparent">
                            Priority
                        </span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                        We understand the value of what you store. That&apos;s why we&apos;ve built
                        a fortress of security around every unit.
                    </p>
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SECURITY_FEATURES.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

                        return (
                            <article
                                key={feature.id}
                                className="relative group"
                            >
                                <div className="glow-border rounded-2xl p-8 h-full transition-all duration-300 hover:scale-[1.02] bg-white border border-gray-100 shadow-sm">
                                    {/* Icon container */}
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${index === 0
                                            ? "bg-gradient-to-br from-slate-800 to-slate-900"
                                            : index === 1
                                                ? "bg-gradient-to-br from-industrial-orange to-industrial-orange-light"
                                                : "bg-gradient-to-br from-slate-700 to-industrial-orange"
                                            }`}
                                    >
                                        <IconComponent
                                            className="w-8 h-8 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>

                                    {/* Visual element */}
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Active 24/7 Monitor</span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Additional security info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {[
                        { value: "24/7", label: "Monitoring" },
                        { value: "100%", label: "Coverage" },
                        { value: "0", label: "Incidents" },
                    ].map((stat) => (
                        <div key={stat.label} className="p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                            <div className="text-3xl md:text-4xl font-bold text-industrial-orange mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-500 text-sm font-medium uppercase tracking-tight">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
