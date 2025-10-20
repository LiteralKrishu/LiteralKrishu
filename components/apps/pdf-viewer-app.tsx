"use client"

import { motion } from "framer-motion"

export function PDFViewerApp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full overflow-y-auto bg-white p-8 text-black"
    >
      <div className="mx-auto max-w-2xl space-y-6 font-serif text-sm leading-relaxed">
        {/* Header */}
        <div className="border-b-2 border-black pb-4 text-center">
          <h1 className="text-2xl font-bold">Sousnigdho Das</h1>
          <p className="text-xs">
            AI/ML and Blockchain Enthusiast | Python & Web Developer | Aspiring Full-Stack Engineer
          </p>
          <p className="text-xs">Developer & Manager – Vedonyx / Udality</p>
          <p className="text-xs">📍 Pune, Maharashtra, India</p>
          <p className="text-xs">
            📧 sousnigdhodas@gmail.com | 🔗{" "}
            <a href="https://www.linkedin.com/in/sousnigdho-das-b1740b371" className="underline">
              LinkedIn
            </a>
          </p>
        </div>

        {/* Summary */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Summary</h2>
          <p className="mt-2 text-justify">
            I am a passionate Python developer and AI/ML & Blockchain learner. My coding journey began in 8th grade, and
            I am currently studying at Sri Chaitanya Junior College, working with Vedonyx and Udality.
          </p>
          <p className="mt-2 text-justify">
            Beyond AI/ML & Blockchain, I explore Web Development, aiming to bridge the gap between intelligent systems
            and scalable applications. I enjoy working on multi-stage projects that involve both algorithmic
            problem-solving and practical API integration.
          </p>
        </div>

        {/* Areas of Interest */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Areas of Interest</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Computer Vision (OpenCV, TensorFlow)</li>
            <li>Web Development (Frontend + Backend)</li>
            <li>API Integration & System Design</li>
          </ul>
        </div>

        {/* Collaboration Goals */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Collaboration Goals</h2>
          <p className="mt-2 text-justify">
            I'm open to working with teams and individuals on end-to-end Python projects—from research to deployment.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Experience</h2>
          <div className="mt-2 space-y-3">
            <div>
              <p className="font-bold">Vedonyx</p>
              <p className="text-xs">Senior Software Developer | September 2025 – Present (2 months) | Delhi, India</p>
              <p className="text-xs">Manager | September 2025 – Present (2 months) | Delhi, India</p>
            </div>
            <div>
              <p className="font-bold">Udality</p>
              <p className="text-xs">Senior Software Developer | September 2025 – Present (2 months) | Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Projects</h2>
          <div className="mt-2 space-y-3">
            <div>
              <p className="font-bold">AI Powered Email Assistant (Sep 2025)</p>
              <p className="text-justify">
                AI-Powered-Email-Assistant is designed to help support teams manage hundreds (or thousands) of daily
                emails efficiently. It automatically retrieves support emails, analyzes sentiment, assigns priority,
                extracts key details, and generates context-aware replies using LLMs.
              </p>
              <p className="text-xs">
                Skills: Python · Machine Learning · Visual Web Development · Web Development · React.js · Software
                Development
              </p>
            </div>
            <div>
              <p className="font-bold">WeatherSphere (Aug 2025)</p>
              <p className="text-justify">
                WeatherSphere is a professional-grade weather web application that goes beyond basic forecasts. Designed
                for clarity, responsiveness, and engagement, it integrates real-time APIs with polished UI/UX to deliver
                accurate, visually appealing weather information.
              </p>
              <p className="text-xs">
                Skills: Visual Web Development · Web Development · Software Development · CSS · JavaScript · HTML5
              </p>
            </div>
            <div>
              <p className="font-bold">Product Price Sorter (May 2025 – Jun 2025)</p>
              <p className="text-justify">
                Product Price Sorter aggregates and compares prices of products from major Indian e-commerce platforms
                to identify the cheapest available price for a given item.
              </p>
              <p className="text-xs">Skills: Python · Software Development</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Education</h2>
          <div className="mt-2 space-y-2">
            <div>
              <p className="font-bold">Sri Chaitanya College of Education</p>
              <p className="text-xs">March 2018 – April 2026</p>
            </div>
            <div>
              <p className="font-bold">Central Board of Secondary Education (CBSE)</p>
              <p className="text-xs">Senior Education (11th & 12th) – Stream: Science (PCM + English + CS)</p>
              <p className="text-xs">March 2024 – April 2026</p>
            </div>
            <div>
              <p className="text-xs">High School Student – CBSE Board Exam of Class X</p>
              <p className="text-xs">March 2011 – April 2024</p>
            </div>
          </div>
        </div>

        {/* Top Skills */}
        <div>
          <h2 className="border-b border-black text-lg font-bold">Top Skills</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Artificial Intelligence (AI)</li>
            <li>Machine Learning</li>
            <li>Web Development (React, HTML, CSS, JS)</li>
            <li>Python (Flask, API Design, Data Processing)</li>
            <li>Software Infrastructure & System Design</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-black pt-4 text-center text-xs italic">
          "Building intelligent systems that speak, see, and scale."
        </div>
      </div>
    </motion.div>
  )
}
