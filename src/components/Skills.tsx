const skills = {
  "Programming Languages": ["JavaScript", "Python", "Java", "C", "C++", "HTML", "CSS", "Machine Learning"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools": ["Git", "Docker"],
};

export function Skills() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-black dark:text-white">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <li key={skill} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-3 py-1 rounded-full text-sm md:text-base font-medium shadow-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
