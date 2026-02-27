import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const navItem = (path, label) => (
    <Link
      to={path}
      onClick={() => setOpen(false)}
      className={`relative pb-1 transition ${
        pathname === path ? "text-blue-600" : "text-gray-700"
      }`}
    >
      {label}
      {pathname === path && (
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded"></span>
      )}
    </Link>
  );

  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
          BrightFuture
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {navItem("/", "Home")}
          {navItem("/programs", "Programs")}
          {navItem("/admission", "Admission")}
          {navItem("/contact", "Contact")}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col items-center py-4 gap-4 shadow-md">
          {navItem("/", "Home")}
          {navItem("/programs", "Programs")}
          {navItem("/admission", "Admission")}
          {navItem("/contact", "Contact")}
        </div>
      )}
    </nav>
  );
}