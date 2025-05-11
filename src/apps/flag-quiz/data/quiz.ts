import { type Country, Continent, countries, getCountriesByContinent, getRandomCountries, getCountriesForContinents, getSimilarFlagOptions } from './countries';

export enum QuizMode {
  FlagToCountry = 'flag-to-country',
  CountryToFlag = 'country-to-flag',
  CountryToContinent = 'country-to-continent'
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export interface QuizSettings {
  mode: QuizMode;
  difficulty: Difficulty;
  continents: Continent[];
  questionCount: number;
}

export interface QuizQuestion {
  id: string;
  correctAnswer: Country;
  options: Country[];
}

export interface QuizResult {
  question: QuizQuestion;
  selectedAnswer: Country | null;
  isCorrect: boolean;
  timeSpent: number; // in milliseconds
}

export interface QuizSummary {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number; // in milliseconds
  results: QuizResult[];
}

// Default quiz settings
export const defaultQuizSettings: QuizSettings = {
  mode: QuizMode.FlagToCountry,
  difficulty: Difficulty.Medium,
  continents: Object.values(Continent),
  questionCount: 10
};

// Number of options to show based on difficulty
const optionCountByDifficulty = {
  [Difficulty.Easy]: 3,
  [Difficulty.Medium]: 4,
  [Difficulty.Hard]: 6
};

/**
 * Generate quiz questions based on settings
 * @param settings Quiz settings
 * @returns Array of quiz questions
 */
export const generateQuizQuestions = (settings: QuizSettings): QuizQuestion[] => {
  try {
    // Filter countries by selected continents
    const filteredCountries = settings.continents.length === Object.keys(Continent).length
      ? countries
      : countries.filter(country => settings.continents.includes(country.continent));
    
    // Verify we have at least some countries to work with
    if (filteredCountries.length === 0) {
      throw new Error('No countries available for the selected continents');
    }
    
    // Check if we're in endless mode (questionCount = -1)
    const isEndlessMode = settings.questionCount === -1;
    
    // For non-endless mode, ensure we have enough countries for the quiz
    if (!isEndlessMode && filteredCountries.length < settings.questionCount) {
      throw new Error('Not enough countries available for the selected continents and question count');
    }

    // For endless mode, use all available countries; otherwise use the specified count
    const questionCount = isEndlessMode ? filteredCountries.length : settings.questionCount;
    
    // Shuffle the filtered countries to ensure randomness
    const shuffledCountries = [...filteredCountries].sort(() => 0.5 - Math.random());
    
    // Get countries for the quiz
    const selectedCountries = shuffledCountries.slice(0, isEndlessMode ? shuffledCountries.length : questionCount);
    
    // Verify we have countries to create questions with
    if (selectedCountries.length === 0) {
      throw new Error('No countries available to create quiz questions');
    }
  
    // Generate questions
    return selectedCountries.map((country, index) => {
      try {
        // Number of options based on difficulty
        const optionCount = optionCountByDifficulty[settings.difficulty];
        
        // Get all countries that could be used as options, excluding the correct answer
        const otherCountries = filteredCountries.filter(c => c.code !== country.code);
        
        // If we don't have enough countries for the options, adjust the option count
        // Make sure we have at least 2 options total (the correct answer + at least 1 other)
        const availableOptionCount = Math.max(2, Math.min(optionCount, otherCountries.length + 1));
        const neededOtherOptions = availableOptionCount - 1;
        
        // Get options using the similar flags feature to make the game harder
        // This will include similar flags based on difficulty level
        const otherOptions = getSimilarFlagOptions(
          country,
          otherCountries,
          neededOtherOptions,
          settings.difficulty
        );
        
        // Combine correct answer with other options and shuffle
        const options = [country, ...otherOptions].sort(() => 0.5 - Math.random());
        
        return {
          id: `question-${index + 1}`,
          correctAnswer: country,
          options
        };
      } catch (error) {
        console.error(`Error generating question ${index + 1}:`, error);
        // Return a fallback question with just the correct answer if there's an error
        return {
          id: `question-${index + 1}`,
          correctAnswer: country,
          options: [country]
        };
      }
    });
  } catch (error) {
    console.error('Error in quiz generation:', error);
    throw error;
  }
};
