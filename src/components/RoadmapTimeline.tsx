
import React from 'react';
import TimelineStep from './TimelineStep';

const RoadmapTimeline = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Foundation & Setup",
      duration: "Minggu 1-2",
      budget: "Rp 1.000.000",
      description: "Membangun fondasi yang kuat dengan setup perangkat keras dan software dasar. Investasi awal yang paling penting untuk memulai perjalanan desain grafis.",
      skills: ["Computer Basics", "File Management", "Design Principles"],
      tools: ["Adobe Creative Suite", "Canva Pro", "Hardware Setup"]
    },
    {
      step: 2,
      title: "Design Fundamentals",
      duration: "Minggu 3-6",
      budget: "Rp 300.000",
      description: "Mempelajari prinsip-prinsip dasar desain grafis termasuk tipografi, warna, komposisi, dan hierarki visual yang menjadi pondasi setiap desainer profesional.",
      skills: ["Typography", "Color Theory", "Layout Design", "Composition"],
      tools: ["Adobe Illustrator", "Figma", "Pinterest", "Behance"]
    },
    {
      step: 3,
      title: "Software Mastery",
      duration: "Minggu 7-12",
      budget: "Rp 400.000",
      description: "Menguasai tools professional seperti Adobe Creative Suite dan software alternatif. Focus pada workflow yang efisien dan teknik-teknik advanced.",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Workflow Optimization"],
      tools: ["Adobe CC", "Affinity Suite", "Online Tutorials", "Practice Projects"]
    },
    {
      step: 4,
      title: "Portfolio Development",
      duration: "Minggu 13-16",
      budget: "Rp 200.000",
      description: "Membangun portfolio yang kuat dengan proyek-proyek nyata. Belajar presentasi karya dan personal branding untuk menarik klien potensial.",
      skills: ["Portfolio Curation", "Personal Branding", "Project Presentation", "Client Communication"],
      tools: ["Behance", "Dribbble", "Personal Website", "Social Media"]
    },
    {
      step: 5,
      title: "Specialization & Monetization",
      duration: "Minggu 17-24",
      budget: "Rp 100.000",
      description: "Menentukan spesialisasi dan mulai monetisasi skills. Belajar strategi marketing, pricing, dan membangun network professional di industri kreatif.",
      skills: ["Niche Specialization", "Business Development", "Marketing", "Networking"],
      tools: ["Freelancing Platforms", "Social Media Marketing", "Business Tools", "Analytics"]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Roadmap Pembelajaran
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Timeline terstruktur dari pemula hingga profesional dengan target yang jelas dan terukur untuk setiap tahapan
          </p>
        </div>

        <div className="relative space-y-16">
          {roadmapSteps.map((step, index) => (
            <TimelineStep
              key={step.step}
              {...step}
              isCompleted={index < 1}
              isActive={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
