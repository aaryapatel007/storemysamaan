import { Home, Building2, Car, Package } from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/constants";

// Map icon names to components
const iconMap = {
    Home,
    Building2,
    Car,
    Package,
};

export default function ServicesGrid() {
    return (
        <section
            id="services"
            className="py-20 md:py-32 relative"
            aria-labelledby="services-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-industrial-orange/10 text-industrial-orange text-sm font-medium mb-4">
                        Our Services
                    </span>
                    <h2
                        id="services-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Storage Solutions for{" "}
                        <span className="text-industrial-orange">Every Need</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                        From personal belongings to industrial equipment, we have the space
                        and security to store it all.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {SERVICES.map((service, index) => {
                        const IconComponent = iconMap[service.icon as keyof typeof iconMap];

                        return (
                            <article
                                key={service.id}
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
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-slate-500 mb-4">
                        Not sure what you need? We&apos;ll help you find the perfect solution.
                    </p>
                    <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="text-industrial-orange hover:text-industrial-orange-light font-semibold transition-colors inline-flex items-center gap-2 group"
                    >
                        Contact us for a custom quote
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
