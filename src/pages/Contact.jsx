import { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // reset form
    e.target.reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-2 opacity-90">
          We'd love to hear from you. Reach out anytime.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-blue-600">Email</h3>
            <p className="text-gray-600 mt-2">info@brightfuture.edu</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-blue-600">Phone</h3>
            <p className="text-gray-600 mt-2">+91 98765 43210</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              required
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="location"
            className="w-full h-72"
            src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-sm text-center">
            
            <div className="text-green-500 text-4xl mb-3">✔</div>

            <h3 className="text-xl font-semibold">Message Sent!</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Thanks for contacting us. We'll get back to you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-blue-600 text-white px-5 py-1.5 rounded-full hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}