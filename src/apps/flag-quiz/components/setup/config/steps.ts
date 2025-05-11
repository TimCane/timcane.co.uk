import { ContinentsStep } from "../steps/continents-step";
import { DifficultyStep } from "../steps/difficulty-step";
import { ModeStep } from "../steps/mode-step";
import { QuestionCountStep } from "../steps/question-count-step";

export const steps = [
  {
    id: 'mode',
    title: 'Select Quiz Mode',
    component: ModeStep
  },
  {
    id: 'continents',
    title: 'Select Continents',
    component: ContinentsStep
  },
  {
    id: 'difficulty',
    title: 'Select Difficulty',
    component: DifficultyStep
  },
  {
    id: 'questionCount',
    title: 'Number of Questions',
    component: QuestionCountStep
  }
];
