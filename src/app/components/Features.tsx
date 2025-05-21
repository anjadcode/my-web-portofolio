export default function Skills() {
    // You can define your skills data here, making it easy to manage
    const skills = [
        {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", // Example: React icon
            description: "Building dynamic user interfaces.", // Optional, keep very short or remove
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", // Example: Node.js icon
            description: "Server-side applications & APIs.",
        },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Example: Tailwind CSS icon
            description: "Rapid UI development.",
        },
        {
            name: "JavaScript (ES6+)",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", // Example: JavaScript icon
            description: "Core language proficiency.",
        },
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", // Example: MongoDB icon
            description: "NoSQL database management.",
        },
        {
            name: "Git & GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", // Example: GitHub icon
            description: "Version control & collaboration.",
        },
        // Add more skills as needed
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            description: "Type-safe codebases.",
        },
        {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            description: "Robust API development.",
        },
    ];

    return (
        <section id="skills" className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">My Tech Stack</h2>
                    {/* Removed the general description for a more minimalist approach */}
                </div>

                <div className="grid grid-cols-2 mt-10 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:mt-16">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-4">
                            {/* Skill Icon */}
                            <img className="w-16 h-16 object-contain" src={skill.icon} alt={`${skill.name} Icon`} />
                            {/* Skill Name */}
                            <h3 className="mt-6 text-xl font-semibold text-gray-900 font-pj text-center">{skill.name}</h3>
                            {/* Optional: Short Description */}
                            {skill.description && (
                                <p className="mt-2 text-base text-gray-600 font-pj text-center hidden sm:block">{skill.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}