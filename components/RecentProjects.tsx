"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="py-20 px-6 md:px-16 lg:px-16" id="projects">
      <h1 className="heading text-center">
        <span className="text-purple">Projects</span>
      </h1>

      {/* CONTAINER (biar pinggir lega) */}
      <div className="max-w-6xl mx-auto">
        
        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-20">
          {projects.map((item) => (
            <div key={item.id} className="w-full">
              <div
                onClick={() => setSelectedProject(item)}
                className="block p-5 rounded-2xl bg-[#0f0a0f] border border-white/10 hover:scale-[1.01] transition cursor-pointer"
              >
                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-[300px] object-contain rounded-lg"
                  />
                </div>

                {/* TITLE */}
                <h1 className="font-bold text-lg text-purple mb-1">
                  {item.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-sm opacity-80 mb-4">
                  {item.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {item.techStack?.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* SEE DETAILS */}
                  <div className="flex items-center text-purple text-sm">
                    <p>See Details</p>
                    <FaLocationArrow className="ms-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          {/* MODAL */}
          <div className="relative z-50 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0a0f] border border-white/10 rounded-2xl p-6">
            
            {/* TITLE */}
            <h2 className="text-xl font-bold text-purple mb-4">
              {selectedProject.title}
            </h2>

            {/* OVERVIEW */}
            {selectedProject.details?.overview && (
              <p className="text-sm opacity-80 mb-6">
                {selectedProject.details.overview}
              </p>
            )}

            {/* SCREENSHOTS */}
            {selectedProject.details?.screenshots && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">
                  Screenshots
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.details.screenshots.map(
                    (shot: any, i: number) => (
                      <div key={i}>
                        <img
                          src={shot.img}
                          alt={shot.title}
                          className="rounded-lg border border-white/10 hover:scale-[1.02] transition max-h-[400px] w-auto object-contain"
                        />
                        <p className="text-xs opacity-70 mt-1">
                          {shot.title}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* FEATURES */}
            {selectedProject.details?.features && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-sm opacity-80">
                  {selectedProject.details.features.map(
                    (f: string, i: number) => (
                      <li key={i}>{f}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* SYSTEM DESIGN */}
            {selectedProject.details?.systemDesign && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  System Design
                </h3>
                <ul className="list-disc list-inside text-sm opacity-80">
                  {selectedProject.details.systemDesign.map(
                    (f: string, i: number) => (
                      <li key={i}>{f}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* PIPELINE */}
            {selectedProject.details?.pipeline && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Data Pipeline
                </h3>
                <ul className="list-disc list-inside text-sm opacity-80">
                  {selectedProject.details.pipeline.map(
                    (f: string, i: number) => (
                      <li key={i}>{f}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* CHALLENGES */}
            {selectedProject.details?.challenges && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Challenges
                </h3>
                <p className="text-sm opacity-80">
                  {selectedProject.details.challenges}
                </p>
              </div>
            )}

            {/* IMPACT */}
            {selectedProject.details?.impact && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  Impact
                </h3>
                <p className="text-sm opacity-80">
                  {selectedProject.details.impact}
                </p>
              </div>
            )}

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.techStack?.map(
                (tech: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-white/10 rounded"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between items-center">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple text-sm flex items-center"
              >
                Source Code
                <FaLocationArrow className="ms-2" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-sm opacity-70 hover:opacity-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;