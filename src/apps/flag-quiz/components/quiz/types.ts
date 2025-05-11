import { Continent } from '../../data/countries';
import { Difficulty, QuizMode } from '../../data/quiz';

export interface QuizSetupData {
  continents: Continent[];
  difficulty: Difficulty;
  mode: QuizMode;
  questionCount: number;
}
