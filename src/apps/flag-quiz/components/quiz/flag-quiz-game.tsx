import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import type { QuizSetupData } from './types';
import { generateQuizQuestions, type QuizQuestion, type QuizResult, type QuizSummary } from '../../data/quiz';
import { getFlagUrl } from '../../data/flags';
import { 
  Title, 
  FlexContainer,
  Card,
  Button,
  ActionButton,
  ProgressBarContainer,
  ProgressBarFill
} from '../common/styled-components';

interface FlagQuizGameProps {
  settings: QuizSetupData;
  onBackToSetup: () => void;
}

const FlagQuizGame: React.FC<FlagQuizGameProps> = ({ settings, onBackToSetup }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);

  // Initialize quiz
  useEffect(() => {
    try {
      const generatedQuestions = generateQuizQuestions(settings);
      setQuestions(generatedQuestions);
      setStartTime(Date.now());
      setQuestionStartTime(Date.now());
    } catch (error) {
      console.error("Error generating quiz questions:", error);
    }
  }, [settings]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleAnswerSelect = (countryCode: string) => {
    if (isAnswered) return;
    
    const timeSpent = Date.now() - questionStartTime;
    const isAnswerCorrect = countryCode === currentQuestion.correctAnswer.code;
    
    setSelectedAnswer(countryCode);
    setIsAnswered(true);
    setIsCorrect(isAnswerCorrect);
    
    // Save result
    const result: QuizResult = {
      question: currentQuestion,
      selectedAnswer: currentQuestion.options.find(option => option.code === countryCode) || null,
      isCorrect: isAnswerCorrect,
      timeSpent
    };
    
    setQuizResults([...quizResults, result]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setQuestionStartTime(Date.now());
    } else {
      // Quiz complete
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(generateQuizQuestions(settings));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizResults([]);
    setQuizComplete(false);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
  };

  const getQuizSummary = (): QuizSummary => {
    const correctAnswers = quizResults.filter(result => result.isCorrect).length;
    const totalTime = Date.now() - startTime;
    
    return {
      totalQuestions: questions.length,
      correctAnswers,
      totalTime,
      results: quizResults
    };
  };

  if (questions.length === 0) {
    return (
      <FlexContainer>
        <Card>
          <Title>Loading Quiz...</Title>
        </Card>
      </FlexContainer>
    );
  }

  if (quizComplete) {
    const summary = getQuizSummary();
    const scorePercentage = Math.round((summary.correctAnswers / summary.totalQuestions) * 100);
    
    return (
      <FlexContainer>
        <Card>
          <Title>Quiz Complete!</Title>
          <ScoreContainer>
            <ScoreCircle $percentage={scorePercentage}>
              <ScoreText>{scorePercentage}%</ScoreText>
            </ScoreCircle>
            <ScoreDetails>
              <ScoreItem>
                <span>Correct Answers:</span>
                <span>{summary.correctAnswers} / {summary.totalQuestions}</span>
              </ScoreItem>
              <ScoreItem>
                <span>Total Time:</span>
                <span>{Math.round(summary.totalTime / 1000)} seconds</span>
              </ScoreItem>
            </ScoreDetails>
          </ScoreContainer>
          
          <ButtonContainer>
            <ActionButton onClick={handleRestartQuiz} $primary>
              Play Again
            </ActionButton>
            <ActionButton onClick={onBackToSetup}>
              Change Settings
            </ActionButton>
          </ButtonContainer>
        </Card>
      </FlexContainer>
    );
  }

  return (
    <GameContainer>
      <ProgressBarContainer>
        <ProgressBarFill $progress={progress} />
      </ProgressBarContainer>
      
      <QuestionCounter>
        Question {currentQuestionIndex + 1} of {questions.length}
      </QuestionCounter>
      
      <QuestionCard>
        {/* Display flag or country name based on quiz mode */}
        <QuestionContent>
          {settings.mode === 'flag-to-country' && (
            <FlagImage 
              src={getFlagUrl(currentQuestion.correctAnswer.code)} 
              alt="Flag" 
            />
          )}
          
          {settings.mode === 'country-to-flag' && (
            <CountryName>{currentQuestion.correctAnswer.name}</CountryName>
          )}
          
          {settings.mode === 'country-to-continent' && (
            <CountryName>{currentQuestion.correctAnswer.name}</CountryName>
          )}
        </QuestionContent>
        
        <OptionsContainer>
          {currentQuestion.options.map(option => (
            <OptionButton
              key={option.code}
              onClick={() => handleAnswerSelect(option.code)}
              $color={
                isAnswered
                  ? option.code === currentQuestion.correctAnswer.code
                    ? colors.success
                    : option.code === selectedAnswer
                      ? colors.error
                      : colors.surface
                  : colors.surface
              }
              $hoverColor={isAnswered ? 'none' : colors.borderLight}
              $activeColor={isAnswered ? 'none' : colors.border}
              disabled={isAnswered}
            >
              {settings.mode === 'country-to-flag' ? (
                <FlagImageSmall src={getFlagUrl(option.code)} alt={option.name} />
              ) : (
                settings.mode === 'country-to-continent' ? option.continent : option.name
              )}
            </OptionButton>
          ))}
        </OptionsContainer>
        
        {isAnswered && (
          <FeedbackContainer $isCorrect={isCorrect}>
            <FeedbackText>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </FeedbackText>
            <ActionButton onClick={handleNextQuestion} $primary>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </ActionButton>
          </FeedbackContainer>
        )}
      </QuestionCard>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: ${colors.background};
  box-sizing: border-box;
`;

const QuestionCounter = styled.div`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  margin: 1rem 0;
`;

const QuestionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const QuestionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const FlagImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${colors.shadow};
`;

const FlagImageSmall = styled.img`
  width: 100%;
  max-width: 120px;
  border-radius: 4px;
`;

const CountryName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: ${colors.textPrimary};
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const OptionButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 1rem;
  width: 100%;
  
  &:disabled {
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`;

const FeedbackContainer = styled.div<{ $isCorrect: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${props => props.$isCorrect ? colors.success + '33' : colors.error + '33'};
  width: 100%;
`;

const FeedbackText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const ScoreCircle = styled.div<{ $percentage: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    ${props => props.$percentage >= 70 ? colors.success : props.$percentage >= 40 ? colors.warning : colors.error} 
    ${props => props.$percentage}%, 
    ${colors.surface} 0%
  );
  box-shadow: 0 4px 8px ${colors.shadow};
  margin-bottom: 2rem;
`;

const ScoreText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

const ScoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const ScoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  
  span:first-child {
    color: ${colors.textSecondary};
  }
  
  span:last-child {
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export default FlagQuizGame;
