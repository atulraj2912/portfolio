const skills = {
  "Programming Languages": ["JavaScript", "Python", "Java", "C", "C++", "HTML", "CSS", "Machine Learning"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools": ["Git", "Docker"],
};

export function Skills() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="list-disc list-inside">
              {skillList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
