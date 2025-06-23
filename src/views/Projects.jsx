import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
const projects = [
  {
    name: "Superhero Hunter App",
    img: "/projects/superhero.png",
    desc: "Search and learn about your favorite superheroes.",
    tech: ["React", "API"],
    demo: "#",
    repo: "#",
  },
  {
    name: "Blog Site (Node MVC)",
    img: "/projects/blog.png",
    desc: "Full CRUD blog platform using Node.js MVC.",
    tech: ["Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    name: "Timer Watch",
    img: "/projects/timer.png",
    desc: "Simple countdown timer built with vanilla JS.",
    tech: ["JavaScript"],
    demo: "#",
    repo: "#",
  },
];

import React from 'react'

function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          projects.map((p) => (
            <div key={p.name} className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src={p.img}
                alt={p.name}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-600">{p.desc}</p>
                <div className="flex flex-wrap space-x-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-sm bg-purple-100 text-purple-800 py-1 px-3 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={p.demo}
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                  <a
                    href={p.repo}
                    className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg transition"
                  >
                    <FaGithub className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
