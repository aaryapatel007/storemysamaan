"use client";

import { useState } from "react";
import { Menu, X, Phone, Warehouse } from "lucide-react";
import { COMPANY, NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex items-center justify-between h-24 md:h-36">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                        aria-label={`${COMPANY.name} - Home`}
                    >
                        <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img
                                src="/logo.png"
                                alt="StoreMySammaan - Secure warehouse storage facility in Greater Noida"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-slate-800 hidden sm:block">
                            {COMPANY.name}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 hover:text-industrial-orange transition-colors duration-300 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                            className="btn-primary text-sm shadow-sm"
                            aria-label={`Call us at ${CONTACT.phone}`}
                        >
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:text-industrial-orange hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" aria-hidden="true" />
                        ) : (
                            <Menu className="w-6 h-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 hover:text-industrial-orange transition-colors duration-300 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                            className="btn-primary text-center justify-center shadow-sm"
                            aria-label={`Call us at ${CONTACT.phone}`}
                        >
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
