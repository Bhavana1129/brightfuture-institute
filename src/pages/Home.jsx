import { Link } from "react-router-dom";
import students from "../assets/students.png";
import faculty from "../assets/faculity.png";
import graduation from "../assets/graduation.png";
import campus1 from "../assets/campus1.jpg";
import campus2 from "../assets/campus2.jpg";


export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            BrightFuture Institute of Technology
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Empowering students with industry-ready skills and
            future-focused education.
          </p>

          <div className="mt-6 space-x-4">
            <Link
              to="/programs"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Programs
            </Link>

            <Link
              to="/admission"
              className="bg-white border px-6 py-2 rounded-lg hover:shadow-md transition"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <img
          src={students}
          alt="Students"
          className="rounded-xl shadow-lg w-full h-[320px] object-cover"
        />
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-center">
        {[
          ["5000+", "Students Graduated"],
          ["50+", "Industry Programs"],
          ["95%", "Placement Rate"],
        ].map(([num, label]) => (
          <div
            key={num}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-blue-600">{num}</h3>
            <p className="text-gray-500 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <img
          src={faculty}
          alt="Faculty"
          className="rounded-xl shadow-lg w-full h-[300px] object-cover"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Choose BrightFuture?
          </h2>

          <p className="text-gray-600 mb-5">
            We focus on experiential learning, industry partnerships,
            and modern infrastructure to prepare students for success.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Experienced Faculty</li>
            <li>✔ Modern Labs & Campus</li>
            <li>✔ Global Certifications</li>
          </ul>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Campus Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[campus1, campus2, graduation].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Campus"
              className="rounded-lg shadow-md h-56 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>
    </div>
  );
}