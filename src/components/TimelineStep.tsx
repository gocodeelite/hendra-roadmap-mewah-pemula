
import React from 'react';
import { CheckCircle, Clock, DollarSign, Book, Target } from 'lucide-react';

interface TimelineStepProps {
  step: number;
  title: string;
  duration: string;
  budget: string;
  description: string;
  skills: string[];
  tools: string[];
  isCompleted?: boolean;
  isActive?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  title,
  duration,
  budget,
  description,
  skills,
  tools,
  isCompleted = false,
  isActive = false
}) => {
  return (
    <div className={`relative flex gap-6 ${step % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Line */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 to-pink-300"></div>
      
      {/* Step Number Circle */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
          isCompleted ? 'bg-green-500' : isActive ? 'bg-purple-600' : 'bg-gray-400'
        }`}>
          {isCompleted ? <CheckCircle className="w-6 h-6" /> : step}
        </div>
      </div>
      
      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${step % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="md:hidden w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {step}
            </div>
          </div>
          
          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span>{budget}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
          
          {/* Skills */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-purple-500" />
              <span className="font-semibold text-gray-800">Target Skill:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Book className="w-4 h-4 text-orange-500" />
              <span className="font-semibold text-gray-800">Tools & Resources:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;
