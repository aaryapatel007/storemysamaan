import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT, COMPANY } from "@/lib/constants";

export default function ContactCTA() {
    return (
        <section
            id="contact"
            className="py-20 md:py-32 section-gradient-cta relative overflow-hidden"
            aria-labelledby="contact-heading"
        >
            {/* Decorative elements */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-industrial-orange/5 rounded-full blur-[150px]"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Section Header */}
                    <span className="inline-block px-4 py-1 rounded-full bg-industrial-orange/10 text-industrial-orange text-sm font-medium mb-4">
                        Get Started Today
                    </span>
                    <h2
                        id="contact-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                    >
                        Ready to{" "}
                        <span className="text-industrial-orange">Secure Your Space?</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-xl mx-auto mb-12 font-light">
                        Contact us now for pricing and space availability.
                        We&apos;ll find the perfect storage solution for your needs.
                    </p>

                    {/* Main CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/${CONTACT.whatsapp}?text=Hi! I'm interested in storage space at ${COMPANY.name}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary py-5 px-10 text-xl w-full sm:w-auto overflow-hidden group shadow-xl shadow-industrial-orange/20"
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle
                                className="w-6 h-6 group-hover:scale-110 transition-transform"
                                aria-hidden="true"
                            />
                            WhatsApp Us
                        </a>

                        {/* Call Button */}
                        <a
                            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                            className="btn-secondary py-5 px-10 text-xl w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-industrial-orange hover:text-industrial-orange group shadow-sm hover:shadow-md"
                            aria-label={`Call us at ${CONTACT.phone}`}
                        >
                            <Phone
                                className="w-6 h-6 group-hover:scale-110 transition-transform"
                                aria-hidden="true"
                            />
                            {CONTACT.phone}
                        </a>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                        {/* Phone */}
                        <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm card-hover">
                            <div className="w-12 h-12 rounded-full bg-industrial-orange/5 flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-industrial-orange" aria-hidden="true" />
                            </div>
                            <h3 className="text-slate-900 font-bold mb-3">Call Us</h3>
                            <div className="space-y-2">
                                <a
                                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                                    className="flex items-center justify-center gap-2 text-slate-600 hover:text-industrial-orange transition-colors font-medium"
                                >
                                    <Phone className="w-4 h-4" aria-hidden="true" />
                                    {CONTACT.phone}
                                </a>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-slate-600 hover:text-green-600 transition-colors font-medium"
                                >
                                    <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
                                    {CONTACT.whatsappDisplay}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm card-hover">
                            <div className="w-12 h-12 rounded-full bg-industrial-orange/5 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-industrial-orange" aria-hidden="true" />
                            </div>
                            <h3 className="text-slate-900 font-bold mb-2">Visit Us</h3>
                            <address className="text-slate-600 not-italic text-sm font-medium">
                                {CONTACT.address}
                            </address>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
