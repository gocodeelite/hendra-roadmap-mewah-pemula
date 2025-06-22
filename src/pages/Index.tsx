
import React from 'react';
import RoadmapHeader from '../components/RoadmapHeader';
import RoadmapTimeline from '../components/RoadmapTimeline';
import BudgetBreakdown from '../components/BudgetBreakdown';
import ToolsRecommendation from '../components/ToolsRecommendation';
import SuccessMetrics from '../components/SuccessMetrics';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <RoadmapHeader />
      <RoadmapTimeline />
      <BudgetBreakdown />
      <ToolsRecommendation />
      <SuccessMetrics />
      <Footer />
    </div>
  );
};

export default Index;
