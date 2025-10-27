'use client';
import React, { useState, useEffect } from "react";

const PRIMARY_GREEN = "bg-[#079764]";
const PRIMARY_GREEN_HOVER = "hover:bg-[#17a24a]";
const TEXT_GREEN = "text-[#079764]";
const HERO_OVERLAY = "bg-[#079764]";
const LIGHT_BG = "bg-green-50";
const DARK_FOOTER_BG = "bg-gray-800";

function ProgramsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("https://sheet2api.com/v1/oAwN3vU2TguS/programs");
        const data = await res.json();

        const formatted = data.map((item, index) => ({
          id: item.ID || index,
          title: item["Program Name"] || "Untitled Program",
          description: item.Description || "No description available.",
          country: item["Country/Region"] || "N/A",
          agency: item["Government Agency"] || "N/A",
          year: item["Year Launched"] || "N/A",
          target: item["Target Species/Ecosystems"] || "N/A",
          status: item["Current Status"] || "Active",
        }));

        setPrograms(formatted);
      } catch (err) {
        console.error("Error fetching programs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <header className={`${PRIMARY_GREEN} text-white fixed w-full top-0 z-50 shadow`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
              alt="WildGuard Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold ml-2">WildGuard</h1>
          </div>

          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="hover:text-green-200 transition">Home</a>
            <a href="wildlife" className="hover:text-green-200 transition">Wildlife</a>
            <a href="join" className="hover:text-green-200 transition">Join Team</a>
            <a href="program" className="hover:text-green-200 transition font-semibold border-b-2 border-transparent hover:border-white">Programs</a>
            <a href="contact" className="hover:text-green-200 transition">Contact</a>
            <a href="blog" className="hover:text-green-200 transition">Blog</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-full bg-white rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#17a24a] px-6 pb-4 space-y-3">
            <a href="wildlife" className="block hover:text-white">Wildlife</a>
            <a href="join" className="block hover:text-white">Join Team</a>
            <a href="program" className="block hover:text-white">Programs</a>
            <a href="contact" className="block hover:text-white">Contact</a>
            <a href="blog" className="block hover:text-white">Blog</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661888759779-b10085f08972?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2064')",
        }}
      >
        <div className={`absolute inset-0 ${HERO_OVERLAY} opacity-70`}></div>
        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl font-light">
            Explore initiatives dedicated to wildlife conservation
          </p>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className={`py-16 md:py-24 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              <p className="col-span-3 text-center text-gray-500">Loading programs...</p>
            ) : (
              programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                >
                  <div className="bg-green-200 w-full h-48 flex items-center justify-center text-3xl font-bold text-gray-500">
                    Program
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-green-100 text-green-700">
                      {program.status}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p><span className="font-semibold">Country:</span> {program.country}</p>
                      <p><span className="font-semibold">Agency:</span> {program.agency}</p>
                      <p><span className="font-semibold">Year:</span> {program.year}</p>
                      <p><span className="font-semibold">Target:</span> {program.target}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className={`border-2 border-[#079764] ${TEXT_GREEN} font-semibold px-8 py-3 rounded-lg hover:bg-[#079764] hover:text-white transition`}>
              Load More Programs
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${DARK_FOOTER_BG} text-gray-300 py-12`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
                alt="WildGuard Logo"
                className="w-8 h-8 rounded-full"
              />
              <h3 className="text-xl font-bold text-white ml-2">WildGuard</h3>
            </div>
            <p className="text-sm">
              Dedicated to protecting endangered wildlife and preserving natural habitats for future generations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Wildlife", "Programs", "Join Our Team", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              Subscribe to Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#079764]"
              />
              <button className={`${PRIMARY_GREEN} text-white px-6 py-2 rounded-lg ${PRIMARY_GREEN_HOVER} transition`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-xs">
          © 2025 WildGuard Conservation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ProgramsPage;
