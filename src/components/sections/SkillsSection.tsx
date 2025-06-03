export default function SkillsSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Tailwind CSS", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}