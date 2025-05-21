export default function Hero() {
    return (
        <section id="hero" className="relative pt-12 pb-20 bg-gray-50 overflow-hidden sm:pt-16 lg:pt-24 lg:pb-32">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl xl:text-6xl">
                            Hi, I'm <span className="text-blue-600">Your Name</span>.
                            <br className="hidden md:block" /> I build web experiences.
                        </h1>
                        <p className="mt-6 text-lg font-normal leading-8 text-gray-600">
                            A passionate [Your Profession, e.g., Software Developer / UI/UX Designer] specializing in [Your Niche, e.g., building scalable web applications / crafting intuitive user interfaces].
                        </p>
                        <div className="mt-10 flex justify-center lg:justify-start">
                            <a
                                href="#projects" // Link to your projects section
                                title="View My Work"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                role="button"
                            >
                                View My Work
                            </a>
                            {/* Optional: Add a secondary CTA like "Contact Me" or "Download Resume" */}
                            {/* <a
                                href="#contact"
                                title="Contact Me"
                                className="inline-flex items-center justify-center px-8 py-3 ml-4 text-base font-semibold text-blue-600 transition-all duration-200 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                role="button"
                            >
                                Contact Me
                            </a> */}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative mt-12 lg:mt-0 lg:ml-auto flex justify-center lg:justify-end">
                        {/* Placeholder for your professional photo */}
                        <img
                            className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png" // Replace with your actual photo
                            alt="Your Photo"
                        />
                        {/* Optional: Add a subtle overlay or background shape if desired */}
                        {/* <div className="absolute inset-0 -bottom-20 bg-gradient-to-tr from-blue-100 to-transparent transform -rotate-3 scale-105 rounded-xl -z-10"></div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}