export default function Header() {
    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/**/}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="Your Name/Logo" className="flex">
                            {/* Replace with your name as text or your personal logo */}
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Your Name/Logo" /> 
                            {/* Alternatively, use text for your name: */}
                            {/* <span className="text-2xl font-bold text-gray-900">Your Name</span> */}
                        </a>
                    </div>

                    <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        {/**/}
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>

                        {/**/}
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#about" title="About" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                        <a href="#projects" title="Projects" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Projects </a>
                        <a href="#skills" title="Skills" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Skills </a>
                        <a href="#contact" title="Contact" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
                    </div>
                </nav>

                {/**/}
                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            <a href="#about" title="About" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                            <a href="#projects" title="Projects" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Projects </a>
                            <a href="#skills" title="Skills" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Skills </a>
                            <a href="#contact" title="Contact" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
                        </div>
                    </div>
                    {/* The "Get started now" button is removed for a portfolio header */}
                </nav>
            </div>
        </header>
    );
}