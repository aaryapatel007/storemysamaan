import { Warehouse } from "lucide-react";
import { COMPANY, NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-white border-t border-slate-100 py-12"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <a
                            href="#"
                            className="flex items-center gap-3 mb-4 group"
                            aria-label={`${COMPANY.name} - Home`}
                        >
                            <div className="relative w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src="/logo.png"
                                    alt="StoreMySammaan - Self storage facility in Surajpur, Greater Noida"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-slate-800">
                                {COMPANY.name}
                            </span>
                        </a>
                        <p className="text-slate-500 max-w-sm mb-4 font-medium">
                            {COMPANY.description}
                        </p>
                        <address className="text-slate-400 not-italic text-sm font-bold tracking-tight">
                            {CONTACT.address}
                        </address>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-500 hover:text-industrial-orange transition-colors font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-slate-400 text-sm font-bold">
                            © {currentYear} {COMPANY.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
