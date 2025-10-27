import React, { useState } from "react";

function ContactUsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const PRIMARY_GREEN = "bg-[#079764]";
  const PRIMARY_GREEN_HOVER = "hover:bg-[#17a24a]";
  const TEXT_GREEN = "text-[#079764]";
  const LIGHT_BG = "bg-green-50";
  const DARK_BG = "bg-gray-800";
  const GRADIENT_START = "from-[#17a24a]";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <header className={`${PRIMARY_GREEN} text-white sticky w-full top-0 z-50 shadow`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
              alt="WildGuard Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold ml-2">WildGuard</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-green-200 transition">Home</a>
            <a href="wildLife" className="hover:text-green-200 transition">Wildlife</a>
            <a href="join" className="hover:text-green-200 transition">Join team</a>
            <a href="program" className="hover:text-green-200 transition">Program</a>
            <a href="contact" className="hover:text-green-200 transition">Contact</a>
            <a href="blog" className="hover:text-green-200 transition font-semibold border-b-2 border-transparent hover:border-white">Blog</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#17a24a] px-6 pb-4 space-y-3">
            <a href="/" className="block hover:text-white">Home</a>
            <a href="wildLife" className="block hover:text-white">Wildlife</a>
            <a href="join" className="block hover:text-white">Join team</a>
            <a href="program" className="block hover:text-white">Program</a>
            <a href="contact" className="block hover:text-white">Contact</a>
            <a href="blog" className="block hover:text-white">Blog</a>
          </div>
        )}
      </header>

      {/* CONTACT HEADER */}
      <section className={`py-20 bg-gradient-to-r ${GRADIENT_START} to-[#079764] text-white text-center`}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-2">Contact Us</h1>
          <p className="text-xl">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className={`py-16 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Photo */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              alt="Nature Wildlife"
              className="rounded-xl shadow-lg object-cover w-full max-w-md"
            />
          </div>

          {/* RIGHT: Send a Message Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${PRIMARY_GREEN_HOVER} ${PRIMARY_GREEN} text-white font-semibold px-6 py-3 rounded-lg transition`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${DARK_BG} text-gray-300 py-12`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">WildGuard</h3>
            <p>Protecting wildlife and nature with passion. Join our mission today!</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="wildLife" className="hover:text-white">Wildlife</a></li>
              <li><a href="join" className="hover:text-white">Join team</a></li>
              <li><a href="program" className="hover:text-white">Program</a></li>
              <li><a href="contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p>Email: info@wildguard.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} WildGuard. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ContactUsPage;
