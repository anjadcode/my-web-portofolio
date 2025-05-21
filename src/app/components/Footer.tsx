export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-gray-50 sm:py-10 lg:py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    {/* LinkedIn */}
                    <a href="YOUR_LINKEDIN_PROFILE_URL" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H5V8h3v11zm-1.5-8.275c-.966 0-1.75-.784-1.75-1.75S5.534 8.225 6.5 8.225s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM19 19h-3v-5.25c0-1.399-.101-2.5-2.305-2.5-1.077 0-1.854.743-2.152 1.48V19H9V8h3v1.65c.583-.75 1.341-1.65 3.125-1.65 2.534 0 4.375 1.637 4.375 5.143V19z"/>
                        </svg>
                    </a>
                    {/* GitHub */}
                    <a href="YOUR_GITHUB_PROFILE_URL" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/>
                        </svg>
                    </a>
                    {/* Optional: Add an icon for your personal website or email */}
                    {/* <a href="mailto:YOUR_EMAIL@EXAMPLE.COM" title="Email" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l8-3.998A2.003 2.003 0 0120 7.882v8.236a2.003 2.003 0 01-2 2H4a2.003 2.003 0 01-2-2V7.882a2.003 2.003 0 01.003-1.998zM2 9.333V7.882c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1.451l-9 4.5L2 9.333z"/>
                        </svg>
                    </a> */}
                </div>

                <p className="text-sm text-gray-600 mt-4">
                    © {currentYear} [Your Name]. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}