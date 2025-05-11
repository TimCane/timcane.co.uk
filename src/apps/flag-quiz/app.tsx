import { useEffect, useState } from "react";
import LoadingSplash from "./components/common/loading-splash";
import QuizSetup from "./components/setup/quiz-setup";
import type { QuizSetupData } from "./components/setup/types";
import FlagQuizGame from "./components/quiz/flag-quiz-game";
import { Continent } from "./data/countries";

function App() {
  // Detect user's continent based on timezone
  const getUserContinent = (): Continent => {
    try {
      // Get user's timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Map timezones to continents
      if (timezone.includes('Europe') || timezone.includes('Berlin') || 
          timezone.includes('London') || timezone.includes('Paris') || 
          timezone.includes('Rome') || timezone.includes('Madrid')) {
        return Continent.Europe;
      } else if (timezone.includes('America')) {
        // Check if it's North or South America
        if (timezone.includes('Argentina') || timezone.includes('Brazil') || 
            timezone.includes('Chile') || timezone.includes('Colombia') || 
            timezone.includes('Peru') || timezone.includes('Bogota')) {
          return Continent.SouthAmerica;
        }
        return Continent.NorthAmerica;
      } else if (timezone.includes('Asia') || timezone.includes('Tokyo') || 
                timezone.includes('Shanghai') || timezone.includes('Hong_Kong') || 
                timezone.includes('Singapore') || timezone.includes('Dubai')) {
        return Continent.Asia;
      } else if (timezone.includes('Africa') || timezone.includes('Cairo') || 
                timezone.includes('Johannesburg') || timezone.includes('Nairobi')) {
        return Continent.Africa;
      } else if (timezone.includes('Australia') || timezone.includes('Pacific') || 
                timezone.includes('Auckland') || timezone.includes('Sydney')) {
        return Continent.Oceania;
      }
      
      // Default to Europe if we can't determine
      return Continent.Europe;
    } catch (error) {
      console.error('Error detecting user continent:', error);
      return Continent.Europe; // Default
    }
  };
  
  const [userContinent, setUserContinent] = useState<Continent>(Continent.Europe);
  const [isLoading, setIsLoading] = useState(true);
  const [quizSetupComplete, setQuizSetupComplete] = useState(false);
  const [quizSettings, setQuizSettings] = useState<QuizSetupData | null>(null);

  useEffect(() => {
    // Set user's continent
    setUserContinent(getUserContinent());
    
    // Show loading splash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleQuizSetup = (data: QuizSetupData) => {
    setQuizSettings(data);
    setQuizSetupComplete(true);
  };

  const handleBackToSetup = () => {
    setQuizSetupComplete(false);
  };

  if (isLoading) {
    return <LoadingSplash />;
  }

  if (!quizSetupComplete) {
    return <QuizSetup onComplete={handleQuizSetup} userContinent={userContinent} />;
  }

  return (
    <div className="App">
      {quizSettings && (
        <FlagQuizGame 
          settings={quizSettings}
          onBackToSetup={handleBackToSetup}
        />
      )}
    </div>
  );
}

export default App;
