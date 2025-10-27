'use client';

import React, { useState, useEffect } from "react";

const PRIMARY_GREEN = "bg-[#079764]";
const PRIMARY_GREEN_HOVER = "hover:bg-[#17a24a]";
const TEXT_GREEN = "text-[#079764]";
const LIGHT_BG = "bg-green-50";
const DARK_FOOTER_BG = "bg-gray-900";

const STATUS_COLORS = {
  'Critically Endangered': 'bg-red-600',
  'Endangered': 'bg-red-500',
  'Vulnerable': 'bg-orange-500',
  'Near Threatened': 'bg-yellow-500',
  'Least Concern': 'bg-green-500',
  'Unknown': 'bg-gray-500',
};

// Species Card Component
const SpeciesCard = ({ species }) => {
  const statusColorClass = STATUS_COLORS[species.status] || 'bg-gray-500';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full bg-gray-200">
        <img
          src={species.imageUrl || "https://via.placeholder.com/400x300"}
          alt={species.name}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${statusColorClass} shadow-md`}
        >
          {species.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{species.name}</h3>
        {species.scientificName && (
          <p className="text-gray-500 text-sm mb-2 italic">{species.scientificName}</p>
        )}
        <div className="space-y-1 text-sm text-gray-600">
          <p><span className="font-semibold">Habitat:</span> {species.habitat}</p>
          <p><span className="font-semibold">Diet:</span> {species.diet}</p>
          <p><span className="font-semibold">Average Lifespan:</span> {species.lifespan} years</p>
          <p><span className="font-semibold">Weight:</span> {species.weight} kg</p>
          <p><span className="font-semibold">Height:</span> {species.height} cm</p>
          {species.speed && <p><span className="font-semibold">Speed:</span> {species.speed}</p>}
        </div>
      </div>
    </div>
  );
};

function WildlifePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [speciesData, setSpeciesData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // Fetch species data from API
  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await fetch("https://sheet2api.com/v1/oAwN3vU2TguS/species");
        const data = await res.json();

        const formatted = data.map((item) => ({
          id: item.ID,
          name: item["Animal Name"]?.trim() || "Unnamed Species",
          scientificName: item.Species?.trim() || "",
          status: item["Conservation Status"]?.trim() || "Unknown",
          habitat: item.Habitat?.trim() || "Unknown",
          diet: item.Diet?.trim() || "Unknown",
          lifespan: item["Average Lifespan (Years)"] || "Unknown",
          weight: item["Weight (kg)"] || "Unknown",
          height: item["Height (cm)"] || "Unknown",
          speed: item.Speed || "",
          imageUrl: item.ImageUrl || "https://via.placeholder.com/400x300",
        }));

        setSpeciesData(formatted);
      } catch (err) {
        console.error("Error fetching species:", err);
      }
    };

    fetchSpecies();
  }, []);

  const filteredSpecies =
    filterStatus === "All"
      ? speciesData
      : speciesData.filter((s) => s.status === filterStatus);

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
            <a href="wildlife" className="hover:text-green-200 transition font-semibold border-b-2 border-transparent hover:border-white">Wildlife</a>
            <a href="join" className="hover:text-green-200 transition">Join Team</a>
            <a href="program" className="hover:text-green-200 transition">Program</a>
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
              <a href="/" className="block hover:text-white">Home</a>
              <a href="wildLife" className="block hover:text-white">Wildlife</a>
              <a href="join" className="block hover:text-white">Join team</a>
              <a href="program" className="block hover:text-white">Program</a>
              <a href="contact" className="block hover:text-white">Contact</a>
              <a href="blog" className="block hover:text-white">Blog</a>
            </div>
        )}
      </header>

      {/* HERO */}
      <section className={`pt-32 pb-20 md:pt-48 md:pb-32 ${PRIMARY_GREEN} flex items-center justify-center`}>
        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
            Discover Wildlife
          </h1>
          <p className="text-lg md:text-xl font-light">
            Explore amazing species and learn about their conservation status
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className={`pt-12 pb-16 md:pt-16 md:pb-24 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-semibold text-gray-700">Filter by Status</h2>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-gray-700 font-medium cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option>All</option>
              <option>Critically Endangered</option>
              <option>Endangered</option>
              <option>Vulnerable</option>
              <option>Near Threatened</option>
              <option>Least Concern</option>
              <option>Unknown</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSpecies.length > 0 ? (
              filteredSpecies.map((species) => (
                <SpeciesCard key={species.id} species={species} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No species found.</p>
            )}
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
              {['Wildlife', 'Programs', 'Join Our Team', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Subscribe to Newsletter</h4>
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

export default WildlifePage;
