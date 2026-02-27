import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const programData = {
  "computer-science": {
    name: "Computer Science",
    tag: "Tech",
    description:
      "Master software development, AI, cloud computing, and system design with real-world projects and industry exposure.",
    duration: "4 Years",
    careers: [
      "Software Developer",
      "Full Stack Engineer",
      "AI Engineer",
      "Cloud Architect",
    ],
    tools: ["React", "Spring Boot", "Python", "AWS", "Docker"],
  },
  "data-science": {
    name: "Data Science",
    tag: "AI & ML",
    description:
      "Learn data analysis, machine learning, and AI technologies to build intelligent systems and data-driven products.",
    duration: "3 Years",
    careers: ["Data Analyst", "ML Engineer", "AI Specialist", "BI Analyst"],
    tools: ["Python", "TensorFlow", "Power BI", "Pandas", "SQL"],
  },
  "business-management": {
    name: "Business Management",
    tag: "Management",
    description:
      "Build leadership, marketing, and entrepreneurship skills to lead modern organizations and startups.",
    duration: "3 Years",
    careers: ["Business Analyst", "Marketing Manager", "HR Executive"],
    tools: ["Marketing Tools", "Excel", "CRM", "Analytics"],
  },
  "ui-ux-design": {
    name: "UI/UX Design",
    tag: "Creative",
    description:
      "Design stunning digital experiences using research, prototyping, and modern UI tools.",
    duration: "2 Years",
    careers: ["UI Designer", "UX Researcher", "Product Designer"],
    tools: ["Figma", "Adobe XD", "Framer", "Notion"],
  },
};

export default function ProgramDetails() {
  const { slug } = useParams();
  const program = programData[slug];

  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!program) {
    return <div className="text-center py-20 text-xl">Program not found</div>;
  }

  const submitCounseling = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      alert("Counseling request submitted! Our advisor will contact you.");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            {program.tag}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {program.name}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            {program.description}
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              to="/admission"
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Book Free Counseling
            </button>
          </div>

          <p className="mt-4 font-semibold">
            Duration: {program.duration}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-center">
        {[
          ["95%", "Placement Rate"],
          ["4.8⭐", "Student Rating"],
          ["100+", "Hiring Partners"],
          ["Live", "Industry Projects"],
        ].map(([value, label]) => (
          <div key={label} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">{value}</h3>
            <p className="text-gray-500 text-sm mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* CURRICULUM */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Industry-aligned curriculum</li>
            <li>✔ Live real-world projects</li>
            <li>✔ Internship opportunities</li>
            <li>✔ Career mentorship</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {program.tools.map((tool) => (
              <span
                key={tool}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Career Opportunities</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            {program.careers.map((career) => (
              <div key={career} className="bg-gray-100 p-5 rounded-lg shadow-sm">
                ✔ {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-16">
        <h3 className="text-2xl font-bold">
          Start your journey in {program.name}
        </h3>

        <p className="text-gray-500 mt-2">
          Limited seats available. Admissions closing soon.
        </p>

        <Link
          to="/admission"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Apply Now
        </Link>
      </section>

      {/* COUNSELING MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[350px] p-6 shadow-xl">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold mb-4">
                  Book Free Counseling
                </h3>

                <form onSubmit={submitCounseling} className="space-y-3">
                  <input
                    required
                    placeholder="Full Name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    required
                    placeholder="Phone Number"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    required
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                  />

                  <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Submit
                  </button>
                </form>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-sm text-gray-500 mt-3"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-2">📞</div>
                <p className="text-green-600 font-semibold">
                  Advisor will contact you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}