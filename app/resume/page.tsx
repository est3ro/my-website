export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Resume</h1>
      
      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black">Profile</h2>
        <p className="text-gray-600">
        My name is Tugay Garib.
        I am a founder with a strong background in AI and education
        currently building and fundraising for an AI-powered SAT tutoring platform with global ambitions.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-black">Founder</h3>
            <p className="text-gray-600">Lingo Academy • 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Built a full-featured learning management system using Django, React, and PostgreSQL to manage courses, student progress, and analytics</li>
              <li>Consulted over 3,000+ students across multiple countries on academic planning, test prep, and study abroad pathways</li>
              <li>Boosted average SAT scores by 300 points in just 6 weeks through data-driven tutoring strategies and AI-enhanced tools</li>
              <li>Developed personalized learning plans combining AI insights and instructor guidance for scalable, high-impact results</li>
              <li>Spearheaded product vision for AI-powered SAT tutor, reducing dependency on human instructors while maintaining score outcomes</li>
              
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium text-black">Master of Computer Science</h3>
          <p className="text-gray-600">Azerbaijan Technical University • 2024 - 2026</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-black">Bachelor of Computer Science</h3>
          <p className="text-gray-600">Sabanci University • 2016 - 2020</p>
        </div>
      </section>

     
      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black">Skills</h2>
        <div className="space-y-2">
          <ul className="list-disc list-inside text-gray-600">
            <li>Languages: Python, JavaScript, Typescript, Dart, C++, SQL, HTML, CSS</li>
            <li>Frameworks: Django, React, Next.js, Flutter</li>
            <li>Data Science: PyTorch, Kafka, Scikit-learn, Pandas, Numpy, NoSQL, Redis</li>
          </ul>
        </div>
      </section>

      
    </div>
  )
} 