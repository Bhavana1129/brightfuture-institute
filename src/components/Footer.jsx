export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="font-semibold text-white">
          BrightFuture Institute of Technology
        </p>
        <p className="text-sm mt-1">
          Building leaders of tomorrow through innovation and education.
        </p>

        <p className="text-xs mt-4 opacity-70">
          © {new Date().getFullYear()} BrightFuture Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}