"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// ✅ SSR SAFE
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
const skillGroups = [
  {
    title: "Backend Engineering",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate (JPA)",
      "Golang",
      "Gin",
      "Node.js",
      "Express",
      "REST API",
      "Microservices",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "No SQL",
      "Data Modeling",
      "Transaction Handling",
    ],
  },
  {
    title: "System & Architecture",
    skills: [
      "System Design",
      "API Design",
      "Distributed Systems",
      "Data Consistency",
      "Transactional Systems",
      "MVC Architecture",
      "DTO Pattern",
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "Python",
      "Data Processing",
      "Time-Series Forecasting",
      "EDA",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "Unit Testing",
      "System Integration Testing (SIT)",
      "API Testing",
      "Debugging",
    ],
  },
  {
    title: "Fintech & Enterprise",
    skills: [
      "ATM / EDC Systems (Testing & Integration)",
      "Transaction Flow Understanding",
      "High-Availability Systems (Tandem)",
    ],
  },
  {
    title: "Frontend (Supporting)",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Docker",
      "Git",
      "Postman",
      "Linux (CLI)",
    ],
  },
];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("agnesmarmarie@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 flex flex-col",
        className
      )}
      style={{
        background: "rgb(15, 10, 15)",
      }}
    >
      <div className="relative h-full min-h-[350px] flex flex-col">
        
        {/* IMAGE */}
        <div className="absolute inset-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover w-full h-full")}
            />
          )}
        </div>

        {/* SPARE IMAGE */}
        {spareImg && (
          <div className="absolute right-0 bottom-0 w-full opacity-80">
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* BACKGROUND ANIMATION */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-50 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-6xl font-bold" />
          </BackgroundGradientAnimation>
        )}

        {/* CONTENT */}
        <div
          className={cn(
            titleClassName,
            "relative z-10 flex flex-col justify-start h-full p-6 lg:p-10"
          )}
          id="skill"
        >
          {/* DESCRIPTION */}
          <div className="text-sm text-[#C1C2D3] mb-2">
            {description}
          </div>

          {/* TITLE */}
          <div className="text-xl lg:text-3xl font-bold mb-4">
            {title}
          </div>

          {/* 🌍 GLOBE */}
          {id === 2 && <GridGlobe />}

          {/* 🧠 SKILLS (FIXED HERE) */}
          {id === 1 && (
            <div className="mt-6 space-y-8">
              {skillGroups.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-semibold text-purple mb-2">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-black/80 text-white px-3 py-1 rounded-md text-xs hover:bg-purple transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ✉️ COPY EMAIL */}
          {id === 6 && (
            <div className="mt-auto relative">
              
              {copied && (
                <div className="absolute -bottom-10 right-0 w-[200px]">
                  <Lottie animationData={animationData} loop={false} />
                </div>
              )}

              <MagicButton
                title={copied ? "Email Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};