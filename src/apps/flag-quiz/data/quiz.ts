import { type Country, Continent, countries, filterCountriesByFamiliarity, getRandomCountries, getSimilarFlagOptions } from './countries';

export enum QuizMode {
  FlagToCountry = 'flag-to-country',
  CountryToFlag = 'country-to-flag',
  CountryToContinent = 'country-to-continent'
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  Impossible = 'impossible'
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
  [Difficulty.Hard]: 6,
  [Difficulty.Impossible]: 6 // Same as hard, but with more challenging options
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
    
    // Ensure we have enough countries for the quiz
    if (filteredCountries.length < settings.questionCount) {
      throw new Error('Not enough countries available for the selected continents and question count');
    }

    // Use the specified question count
    const questionCount = settings.questionCount;
    
    // Filter countries based on familiarity and difficulty
    // This will prioritize well-known countries for easy difficulty and less familiar ones for harder difficulties
    const difficultyFilteredCountries = getRandomCountries(
      questionCount,
      filteredCountries,
      settings.difficulty as 'easy' | 'medium' | 'hard' | 'impossible'
    );
    
    // Get countries for the quiz
    const selectedCountries = difficultyFilteredCountries;
    
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
        
        // Filter other countries based on familiarity and difficulty level
        // This ensures that the options are appropriate for the selected difficulty
        const difficultyFilteredOptions = filterCountriesByFamiliarity(
          otherCountries,
          settings.difficulty as 'easy' | 'medium' | 'hard' | 'impossible'
        );
        
        // If we don't have enough countries for the options, adjust the option count
        // Make sure we have at least 2 options total (the correct answer + at least 1 other)
        const availableOptionCount = Math.max(2, Math.min(optionCount, difficultyFilteredOptions.length + 1));
        const neededOtherOptions = availableOptionCount - 1;
        
        // Get options using the similar flags feature to make the game harder
        // This will include similar flags based on difficulty level and familiarity
        const otherOptions = getSimilarFlagOptions(
          country,
          difficultyFilteredOptions,
          neededOtherOptions,
          settings.difficulty as 'easy' | 'medium' | 'hard' | 'impossible'
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
