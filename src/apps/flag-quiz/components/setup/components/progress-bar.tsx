import React from 'react';
import ProgressBar from '/workspaces/timcane.co.uk/src/apps/flag-quiz/components/common/progress-bar';

interface SetupProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const SetupProgressBar: React.FC<SetupProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return <ProgressBar progress={progress} />;
};

export default SetupProgressBar;
