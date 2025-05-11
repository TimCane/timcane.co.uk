import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import { Continent } from '../../../data/countries';
import { Difficulty, QuizMode, defaultQuizSettings } from '../../../data/quiz';
import type { QuizSetupData } from '../types';

interface SetupState {
  currentStep: number;
  data: Partial<QuizSetupData>;
}

type SetupAction = 
  | { type: 'UPDATE_DATA'; key: keyof QuizSetupData; value: any }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'TOGGLE_CONTINENT'; continent: Continent };

interface SetupContextType {
  state: SetupState;
  updateData: <K extends keyof QuizSetupData>(key: K, value: QuizSetupData[K]) => void;
  toggleContinent: (continent: Continent) => void;
  nextStep: () => void;
  prevStep: () => void;
  isComplete: boolean;
}

// Define the steps in the quiz setup process
export const STEPS = ['continents', 'difficulty', 'mode', 'questionCount'] as const;
const TOTAL_STEPS = STEPS.length;

// Create initial state function to allow for dynamic initialization
const createInitialState = (initialContinent?: Continent): SetupState => {
  // If initialContinent is provided, start with just that continent selected
  // Otherwise, select all continents by default
  const initialContinents = initialContinent 
    ? [initialContinent] 
    : Object.values(Continent);
    
  return {
    currentStep: 0,
    data: {
      continents: initialContinents,
      difficulty: defaultQuizSettings.difficulty,
      mode: defaultQuizSettings.mode,
      questionCount: defaultQuizSettings.questionCount
    }
  };
};

const SetupContext = createContext<SetupContextType | undefined>(undefined);

function setupReducer(state: SetupState, action: SetupAction): SetupState {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: { ...state.data, [action.key]: action.value }
      };
    case 'TOGGLE_CONTINENT': {
      const currentContinents = state.data.continents || [];
      let newContinents: Continent[];
      
      if (currentContinents.includes(action.continent)) {
        // Don't allow removing the last continent
        if (currentContinents.length <= 1) {
          return state;
        }
        // Remove continent if it's already selected
        newContinents = currentContinents.filter((c: Continent) => c !== action.continent);
      } else {
        // Add continent if it's not selected
        newContinents = [...currentContinents, action.continent];
      }
      
      return {
        ...state,
        data: { ...state.data, continents: newContinents }
      };
    }
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS)
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0)
      };
    default:
      return state;
  }
}

export interface SetupProviderProps {
  children: ReactNode;
  initialContinent?: Continent;
}

export const SetupProvider: React.FC<SetupProviderProps> = ({ children, initialContinent }) => {
  const [state, dispatch] = useReducer(setupReducer, createInitialState(initialContinent));

  const updateData = <K extends keyof QuizSetupData>(key: K, value: QuizSetupData[K]) => {
    dispatch({ type: 'UPDATE_DATA', key, value });
  };

  const toggleContinent = (continent: Continent) => {
    dispatch({ type: 'TOGGLE_CONTINENT', continent });
  };

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const isComplete = state.currentStep === TOTAL_STEPS;

  return (
    <SetupContext.Provider value={{ 
      state, 
      updateData, 
      toggleContinent, 
      nextStep, 
      prevStep, 
      isComplete 
    }}>
      {children}
    </SetupContext.Provider>
  );
};

export const useSetup = () => {
  const context = useContext(SetupContext);
  if (!context) {
    throw new Error('useSetup must be used within a SetupProvider');
  }
  return context;
};
