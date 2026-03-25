"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { lessons } from "@/data";

type Lesson = typeof lessons[0];

const CommunityTeaching = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (!selectedLesson) return;
    setCurrentSlide((prev) => (prev + 1) % selectedLesson.images.length);
  };

  const prevSlide = () => {
    if (!selectedLesson) return;
    setCurrentSlide(
      (prev) => (prev - 1 + selectedLesson.images.length) % selectedLesson.images.length
    );
  };

  return (
    <section className="py-20 px-6 md:px-16 lg:px-16" id="community-teaching">
      <h1 className="heading text-center">
        <span className="text-purple">Community Teaching</span>
      </h1>

      {/* LESSON GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => {
              setSelectedLesson(lesson);
              setCurrentSlide(0);
            }}
            className="cursor-pointer bg-[#0f0a0f] border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
          >
            <div className="h-48 w-full relative">
              <img
                src={lesson.images[0]}
                alt={lesson.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-purple font-bold text-lg mb-2">{lesson.title}</h2>
              <p className="text-sm text-[#C1C2D3]">{lesson.description}</p>
              <div className="flex items-center text-purple text-sm mt-3">
                <p>See Details</p>
                <FaLocationArrow className="ms-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedLesson(null)}
          />

          {/* MODAL */}
          <div className="relative z-50 w-[90%] max-w-5xl max-h-[90vh] bg-[#0f0a0f] border border-white/10 rounded-2xl flex flex-col shadow-lg">

            {/* CONTENT AREA */}
            <div className="p-6 flex-1 overflow-auto flex flex-col items-center">
              
              {/* TITLE */}
              <h2 className="text-xl font-bold text-purple mb-4 text-center">
                {selectedLesson.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm opacity-80 mb-6 text-center">
                {selectedLesson.description}
              </p>

              {/* SIMPLE CAROUSEL */}
              <div className="relative w-full flex items-center justify-center mb-2">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 text-purple text-2xl px-2 py-1 opacity-70 hover:opacity-100 z-40"
                >
                  ‹
                </button>

                <img
                  src={selectedLesson.images[currentSlide]}
                  alt={`${selectedLesson.title} ${currentSlide + 1}`}
                  className="rounded-lg w-full max-h-[60vh] object-contain mx-auto"
                />

                <button
                  onClick={nextSlide}
                  className="absolute right-0 text-purple text-2xl px-2 py-1 opacity-70 hover:opacity-100 z-40"
                >
                  ›
                </button>
              </div>

              {/* SLIDE INDEX */}
              <p className="text-sm text-purple mb-4">
                {currentSlide + 1} / {selectedLesson.images.length}
              </p>

              {/* CLOSE BUTTON BOTTOM-RIGHT */}
              <button
                onClick={() => setSelectedLesson(null)}
                className="self-end text-purple text-sm opacity-70 hover:opacity-100 mt-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommunityTeaching;