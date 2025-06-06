export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-primary-300">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate <strong className="text-primary-600 dark:text-accent-teal">Software Engineer</strong> specializing in building impactful solutions with <strong className="text-primary-600 dark:text-accent-teal">JavaScript</strong>, <strong className="text-primary-600 dark:text-accent-teal">React</strong>, and <strong className="text-primary-600 dark:text-accent-teal">Laravel</strong>. My work is driven by a mission to bridge gaps in healthcare and empower organizations through innovative software.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-primary-200">Key Projects</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent-teal mr-2">•</span>
                  <div>
                    <h4 className="font-medium dark:text-gray-100">Telemedicine Platform</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Connecting doctors to doctors as referring partners, ensuring patients in remote areas receive timely and expert care.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-teal mr-2">•</span>
                  <div>
                    <h4 className="font-medium dark:text-gray-100">Patient Navigation System</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Streamlining hospital-to-tertiary hospital transfer requests, optimizing patient journeys.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-primary-200 mb-4">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Laravel', 'PHP', 'System Design', 'Authentication', 'Scalable Apps'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-dark-card text-primary-800 dark:text-accent-teal rounded-full text-sm border border-primary-200 dark:border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-primary-50 dark:bg-dark-card rounded-lg border border-primary-100 dark:border-gray-700">
              <h4 className="font-medium text-gray-800 dark:text-primary-200 mb-2">Fun Fact</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I thrive on challenging tasks—where my skills grow the most. Also, coffee is my code fuel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}