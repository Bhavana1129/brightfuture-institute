import { useRef, useState } from "react";

export default function Admission() {
  const form = useRef();

  const [showPayment, setShowPayment] = useState(false);
  const [method, setMethod] = useState("apple");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Simple form submit (NO EMAILJS)
  const submitForm = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  // Payment
  const handlePayment = () => setShowPayment(true);

  const processPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Confetti 🎉
      for (let i = 0; i < 60; i++) {
        const conf = document.createElement("div");
        conf.className =
          "fixed w-2 h-2 bg-pink-500 rounded-full animate-bounce";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.top = "-10px";
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 2000);
      }

      setTimeout(() => {
        setShowPayment(false);
        setSuccess(false);
      }, 2500);
    }, 2000);
  };

  // Invoice download
  const downloadInvoice = () => {
    const content = `
BrightFuture Institute - Payment Invoice
---------------------------------------
Name: Demo Student
Amount Paid: ₹500
Payment Mode: ${method.toUpperCase()}
Status: SUCCESS
Thank you for your application!
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "invoice.txt";
    a.click();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Admission Form</h1>
        <p className="mt-2 opacity-90">
          Begin your journey with BrightFuture Institute
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>

          <form ref={form} onSubmit={submitForm} className="space-y-5">
            <input name="name" placeholder="Full Name" className="input" required />
            <input name="email" placeholder="Email" className="input" required />
            <input name="phone" placeholder="Phone" className="input" required />

            <select name="program" className="input">
              <option>Computer Science</option>
              <option>Data Science</option>
              <option>Business Management</option>
              <option>UI/UX Design</option>
            </select>

            <button className="btn-blue">Submit Application</button>
          </form>

          <button onClick={handlePayment} className="btn-pay mt-4">
            Pay ₹500 Application Fee
          </button>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Why Apply?</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Industry-focused curriculum</li>
            <li>✔ Internship opportunities</li>
            <li>✔ Career placement support</li>
            <li>✔ Global certification</li>
          </ul>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[360px] p-6">
            {!success ? (
              <>
                <h3 className="text-xl font-bold text-center mb-4">
                  Choose Payment Method
                </h3>

                {/* Toggle */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setMethod("apple")}
                    className={`flex-1 p-2 rounded ${
                      method === "apple" ? "bg-black text-white" : "bg-gray-200"
                    }`}
                  >
                    🍎 Apple Pay
                  </button>
                  <button
                    onClick={() => setMethod("upi")}
                    className={`flex-1 p-2 rounded ${
                      method === "upi" ? "bg-green-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    🇮🇳 UPI
                  </button>
                </div>

                {/* Apple Pay */}
                {method === "apple" && (
                  <div className="bg-black text-white p-4 rounded-xl mb-4">
                    <p className="text-sm opacity-70">Apple Pay</p>
                    <p className="text-lg font-semibold mt-2">
                      BrightFuture Institute
                    </p>
                    <p className="mt-3">Amount: ₹500</p>
                  </div>
                )}

                {/* UPI */}
                {method === "upi" && (
                  <div className="text-center mb-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                      <p className="font-semibold mb-2">Scan UPI QR</p>
                      <div className="w-32 h-32 bg-gray-300 mx-auto rounded-lg flex items-center justify-center">
                        QR
                      </div>
                      <p className="text-sm mt-2">upi@brightfuture</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={processPayment}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg"
                >
                  {loading ? "Processing..." : "Confirm Payment"}
                </button>

                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full mt-2 text-gray-500 text-sm"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-2">🎉</div>
                <p className="text-green-600 font-bold">
                  Payment Successful!
                </p>

                <button
                  onClick={downloadInvoice}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Download Invoice
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
        }
        .btn-blue {
          background: #2563eb;
          color: white;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
        }
        .btn-pay {
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: white;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}