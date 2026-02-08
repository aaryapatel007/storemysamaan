import { ArrowRight, Phone } from "lucide-react";
import { COMPANY, CONTACT } from "@/lib/constants";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-24 md:pt-40 overflow-hidden bg-white"
            aria-labelledby="hero-heading"
        >
            {/* Background Style */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-industrial-white via-industrial-gray-50 to-industrial-white"
                aria-hidden="true"
            >
                {/* Subtler industrial texture overlay */}
                <div className="absolute inset-0 industrial-stripes opacity-30" />

                {/* Placeholder for background image with lighter overlay */}
                <div className="absolute inset-0 bg-[url('/placeholder-industrial-bg.jpg')] bg-cover bg-center opacity-5" />

                {/* Gradient for text readability on light background */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
            </div>

            {/* Subtler decorative elements */}
            <div
                className="absolute top-1/4 right-10 w-64 h-64 bg-industrial-orange/5 rounded-full blur-[100px]"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/4 left-10 w-48 h-48 bg-slate-200 rounded-full blur-[80px]"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Heading */}
                <h1
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-tight mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                >
                    <span className="block">STORE MY</span>
                    <span className="block bg-gradient-to-r from-industrial-orange-dark via-industrial-orange to-industrial-orange-dark bg-clip-text text-transparent">
                        SAMMAAN
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-bold mb-4 max-w-5xl lg:max-w-none mx-auto lg:whitespace-nowrap">
                    {COMPANY.tagline}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-3xl mx-auto">
                    Utilize our self-owned warehousing space for safe, secure storage of household, commercial and industrial goods — we protect what matters to you.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a
                        href="#contact"
                        className="btn-primary text-lg group shadow-lg shadow-industrial-orange/20"
                    >
                        Get a Quote
                        <ArrowRight
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                        />
                    </a>
                    <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="btn-secondary text-lg hover:shadow-md"
                        aria-label={`Call us at ${CONTACT.phone}`}
                    >
                        <Phone className="w-5 h-5" aria-hidden="true" />
                        Call Now
                    </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-industrial-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>24/7 Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-industrial-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Secure Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-industrial-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Flexible Space</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
                <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
