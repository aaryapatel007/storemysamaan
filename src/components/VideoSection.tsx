import { Play } from "lucide-react";

export default function VideoSection() {
    return (
        <section
            className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
            aria-labelledby="video-heading"
        >
            {/* Decorative background element */}
            <div
                className="absolute top-1/2 left-0 w-64 h-64 bg-industrial-orange/5 rounded-full blur-[100px] -translate-y-1/2"
                aria-hidden="true"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-12">
                    <h2
                        id="video-heading"
                        className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
                    >
                        See Our <span className="text-industrial-orange">Facility in Action</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                        Take a virtual tour of our massive industrial storage space and see
                        the security measures we have in place to protect your belongings.
                    </p>
                </div>

                {/* Video Placeholder */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-200">
                    {/* Background Image Placeholder for Video */}
                    <div
                        className="absolute inset-0 bg-[url('/video-placeholder.jpg')] bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                        aria-hidden="true"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-900/5">
                        {/* Play Button */}
                        <div className="w-20 h-20 rounded-full bg-industrial-orange flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110 shadow-industrial-orange/40">
                            <Play className="w-8 h-8 text-white fill-current ml-1" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Video Title Overlay (Bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
                        <p className="text-white font-semibold text-lg text-left drop-shadow-md">
                            Introduction to StoreMySammaan Facility
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}
