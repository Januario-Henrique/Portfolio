/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { TechStack } from "./components/TechStack/TechStack";
import { Projects } from "./components/Projects/Projects";
import { JavaProjects } from "./components/Projects/JavaProjects";
import { Engineering } from "./components/Engineering/Engineering";
import { Learning } from "./components/Learning/Learning";
import { Education } from "./components/Education/Education";
import { GitHubActivity } from "./components/GitHubActivity/GitHubActivity";
import { ResumeSection } from "./components/Resume/Resume";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { CvModal } from "./components/Resume/CvModal";

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About />
        <TechStack />
        <Projects />
        <JavaProjects />
        <Engineering />
        <Learning />
        <Education />
        <GitHubActivity />
        <ResumeSection onOpenCvModal={() => setCvModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS-Style Curriculum Vitae Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
