import { Link } from "react-router-dom";
import { useState } from "react";

const programs = [
  { name: "Computer Science", tag: "Tech", slug: "computer-science" },
  { name: "Data Science", tag: "AI & ML", slug: "data-science" },
  { name: "Business Management", tag: "Management", slug: "business-management" },
  { name: "UI/UX Design", tag: "Creative", slug: "ui-ux-design" },
];

export default function Programs() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="opacity-90 mt-2">
          Industry-driven courses designed for real-world success
        </p>
      </section>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {programs.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Badge */}
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              {p.tag}
            </span>

            <h3 className="text-xl font-semibold mt-4">{p.name}</h3>

            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              A modern curriculum focused on practical learning, live projects,
              and industry exposure to help you build strong career foundations.
            </p>

            {/* ONLY VIEW DETAILS */}
            <div className="mt-6">
              <Link
                to={`/programs/${p.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="text-center pb-12">
        <h3 className="text-2xl font-bold">Not sure which program fits you?</h3>
        <p className="text-gray-500 mt-2">
          Talk to our counselors and get personalized guidance.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow"
        >
          Book a Free Counseling
        </button>
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