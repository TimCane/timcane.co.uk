import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/colors';
import type { QuizSetupData } from './types';
import { generateQuizQuestions, type QuizQuestion, type QuizResult, type QuizSummary } from '../../data/quiz';
import { getFlagUrl } from '../../data/flags';
import { 
  Title, 
  FlexContainer,
  Card,
  ActionButton,
  Subtitle
} from '../common/styled-components';
import ProgressBar from '../common/progress-bar';
import { SelectableButton } from '../setup/theme/selectable-button';

// Results screen styled components
const ResultsHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ScoreCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ResultsSection = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const QuestionText = styled.span`
  font-size: 1rem;
  margin: 0 0.5rem;
  color: ${colors.textPrimary};
`;

const CorrectAnswer = styled.div`
  color: ${colors.success};
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const IncorrectAnswer = styled.div`
  color: ${colors.danger};
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const WrongSelection = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${colors.textSecondary};
  margin-top: 0.25rem;
`;

const AutoProgressBar = styled.div<{ $duration: number }>`
  width: 100%;
  height: 4px;
  background-color: ${colors.surface};
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${colors.theme};
    width: 0%;
    animation: progressAnimation ${props => props.$duration}s linear forwards;
  }
  
  @keyframes progressAnimation {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`;

const SkipButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: underline;
  transition: color 0.2s;
  
  &:hover {
    color: ${colors.textPrimary};
  }
`;

interface FlagQuizGameProps {
  settings: QuizSetupData;
  onBackToSetup: () => void;
}

const FlagQuizGame: React.FC<FlagQuizGameProps> = ({ settings, onBackToSetup }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [autoProgressDelay, setAutoProgressDelay] = useState<number>(2000); // 2 seconds delay
  const autoProgressTimer = useRef<NodeJS.Timeout | null>(null);

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

  // Clear timer when component unmounts
  useEffect(() => {
    return () => {
      if (autoProgressTimer.current) {
        clearTimeout(autoProgressTimer.current);
      }
    };
  }, []);

  // Set up auto-progression when question is answered
  useEffect(() => {
    if (isAnswered) {
      autoProgressTimer.current = setTimeout(() => {
        handleNextQuestion();
      }, autoProgressDelay);
    }

    return () => {
      if (autoProgressTimer.current) {
        clearTimeout(autoProgressTimer.current);
      }
    };
  }, [isAnswered]);

  const handleAnswerSelect = (countryCode: string) => {
    if (isAnswered) return;

    const timeSpent = Date.now() - questionStartTime;
    const isAnswerCorrect = countryCode === currentQuestion.correctAnswer.code;

    setSelectedAnswer(countryCode);
    setIsAnswered(true);

    // Save result
    const result: QuizResult = {
      question: currentQuestion,
      selectedAnswer: currentQuestion.options.find(option => option.code === countryCode) || null,
      isCorrect: isAnswerCorrect,
      timeSpent
    };

    setQuizResults([...quizResults, result]);

    // Adjust delay based on correctness (optional)
    setAutoProgressDelay(isAnswerCorrect ? 300 : 750); // Shorter delay for correct answers
  };

  const handleNextQuestion = () => {
    // Clear any existing timer
    if (autoProgressTimer.current) {
      clearTimeout(autoProgressTimer.current);
      autoProgressTimer.current = null;
    }

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
    // Clear any existing timer
    if (autoProgressTimer.current) {
      clearTimeout(autoProgressTimer.current);
      autoProgressTimer.current = null;
    }

    setQuestions(generateQuizQuestions(settings));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizResults([]);
    setQuizComplete(false);
    setStartTime(Date.now());
    setQuestionStartTime(Date.now());
    setAutoProgressDelay(2000); // Reset to default delay
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
    
    // Determine performance level
    let performanceMessage = "";
    if (scorePercentage >= 90) {
      performanceMessage = "Excellent! You're a flag expert!";
    } else if (scorePercentage >= 70) {
      performanceMessage = "Great job! You know your flags well!";
    } else if (scorePercentage >= 50) {
      performanceMessage = "Good effort! Keep practicing!";
    } else {
      performanceMessage = "Keep learning! You'll get better with practice.";
    }

    return (
      <GameContainer>
        <QuizCard>
          <ResultsHeader>
            <Title>Quiz Complete!</Title>
            <Subtitle>{performanceMessage}</Subtitle>
          </ResultsHeader>
          
          <ScoreContainer>
            <ScoreCircleContainer>
              <ScoreCircle $percentage={scorePercentage}>
                <ScoreText>{scorePercentage}%</ScoreText>
              </ScoreCircle>
            </ScoreCircleContainer>
            
            <ScoreDetails>
              <ScoreItem>
                <span>Correct Answers:</span>
                <span>{summary.correctAnswers} / {summary.totalQuestions}</span>
              </ScoreItem>
              <ScoreItem>
                <span>Total Time:</span>
                <span>{Math.floor(summary.totalTime / 60000)} min {Math.floor((summary.totalTime % 60000) / 1000)} sec</span>
              </ScoreItem>
              <ScoreItem>
                <span>Average Time Per Question:</span>
                <span>{Math.round(summary.totalTime / summary.totalQuestions / 1000)} seconds</span>
              </ScoreItem>
            </ScoreDetails>
          </ScoreContainer>

          <ResultsSection>
            <SectionTitle>Question Review</SectionTitle>
            <ResultsGrid>
              {summary.results.map((result, index) => (
                <ResultCard key={index} $isCorrect={result.isCorrect}>
                  <ResultQuestion>
                    {settings.mode === 'flag-to-country' ? (
                      <>
                        <FlagImageSmall src={getFlagUrl(result.question.correctAnswer.code)} alt={result.question.correctAnswer.name} />
                        <QuestionText>→ {result.question.correctAnswer.name}</QuestionText>
                      </>
                    ) : settings.mode === 'country-to-flag' ? (
                      <>
                        <QuestionText>{result.question.correctAnswer.name} →</QuestionText>
                        <FlagImageSmall src={getFlagUrl(result.question.correctAnswer.code)} alt={result.question.correctAnswer.name} />
                      </>
                    ) : (
                      <>
                        <QuestionText>{result.question.correctAnswer.name} → {result.question.correctAnswer.continent}</QuestionText>
                      </>
                    )}
                  </ResultQuestion>
                  <ResultAnswer $isCorrect={result.isCorrect}>
                    {result.isCorrect ? (
                      <CorrectAnswer>✓ Correct</CorrectAnswer>
                    ) : (
                      <IncorrectAnswer>
                        ✗ Incorrect
                        {result.selectedAnswer && (
                          <WrongSelection>You selected: {result.selectedAnswer.name}</WrongSelection>
                        )}
                      </IncorrectAnswer>
                    )}
                  </ResultAnswer>
                </ResultCard>
              ))}
            </ResultsGrid>
          </ResultsSection>

          <ButtonContainer>
            <ActionButton onClick={handleRestartQuiz} $primary>
              Play Again
            </ActionButton>
            <ActionButton onClick={onBackToSetup}>
              Back to Setup
            </ActionButton>
          </ButtonContainer>
        </QuizCard>
      </GameContainer>
    );
  }

  return (
    <GameContainer>
      <ProgressBar progress={progress} color={colors.theme} />

      <QuestionCounter>
        Question {currentQuestionIndex + 1} of {questions.length}
      </QuestionCounter>

      <QuizCard>
        <QuestionContent>
          {settings.mode === 'flag-to-country' ? (
            <FlagImage src={getFlagUrl(currentQuestion.correctAnswer.code)} alt="Flag" />
          ) : settings.mode === 'country-to-flag' ? (
            <CountryName>{currentQuestion.correctAnswer.name}</CountryName>
          ) : (
            <CountryName>{currentQuestion.correctAnswer.name}</CountryName>
          )}
        </QuestionContent>

        <OptionsGrid>
          {currentQuestion.options.map(option => {
            const isSelected = selectedAnswer === option.code;
            const isCorrectOption = option.code === currentQuestion.correctAnswer.code;
            const showCorrectHighlight = isAnswered && isCorrectOption;
            const showIncorrectHighlight = isAnswered && isSelected && !isCorrectOption;

            return (
              <OptionContainer key={option.code}>
                {!isAnswered ? (
                  <FixedHeightSelectableButton
                    selected={false}
                    onClick={() => handleAnswerSelect(option.code)}
                  >
                    <ButtonContent>
                      {settings.mode === 'country-to-flag' ? (
                        <FlagImageAnswer src={getFlagUrl(option.code)} alt={option.name} />
                      ) : (
                        settings.mode === 'country-to-continent' ? option.continent : option.name
                      )}
                    </ButtonContent>
                  </FixedHeightSelectableButton>
                ) : (
                  <AnswerButton
                    $isCorrect={showCorrectHighlight}
                    $isIncorrect={showIncorrectHighlight}
                    $isSelected={isSelected}
                    disabled
                  >
                    <ButtonContent>
                      {settings.mode === 'country-to-flag' ? (
                        <FlagImageAnswer src={getFlagUrl(option.code)} alt={option.name} />
                      ) : (
                        settings.mode === 'country-to-continent' ? option.continent : option.name
                      )}
                    </ButtonContent>
                    {showCorrectHighlight && <CorrectIcon>✓</CorrectIcon>}
                    {showIncorrectHighlight && <IncorrectIcon>✗</IncorrectIcon>}
                  </AnswerButton>
                )}
              </OptionContainer>
            );
          })}
        </OptionsGrid>

        {isAnswered && (
          <div className="progress-container" style={{ width: '100%', margin: '1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AutoProgressBar $duration={autoProgressDelay / 1000} />
            <SkipButton onClick={handleNextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Skip' : 'See Results'}
            </SkipButton>
          </div>
        )}
      </QuizCard>
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
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const QuestionCounter = styled.div`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  margin: 1rem 0;
  text-align: center;
  font-weight: 500;
`;

const QuizCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    padding: 0.5rem;
  }
`;

const FlagImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${colors.shadow};
  
  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const FlagImageSmall = styled.img`
  width: 40px;
  height: auto;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

const FlagImageAnswer = styled.img`
  width: 80px;
  height: auto;
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 90px;
  }
`;

const CountryName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: ${colors.textPrimary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;

const FixedHeightSelectableButton = styled(SelectableButton)`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    height: 100px;
  }
`;

const AnswerButton = styled.button<{
  $isCorrect: boolean;
  $isIncorrect: boolean;
  $isSelected: boolean;
}>`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 2px solid ${props => {
    if (props.$isCorrect) return colors.success;
    if (props.$isIncorrect) return colors.danger;
    return colors.theme;
  }};
  border-radius: 8px;
  background-color: ${props => {
    if (props.$isCorrect) return `${colors.success}33`;
    if (props.$isIncorrect) return `${colors.danger}33`;
    return props.$isSelected ? colors.background : colors.surface;
  }};
  color: ${colors.textPrimary};
  cursor: default;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px; /* Fixed height for consistency */
  box-shadow: ${props => props.$isSelected ? `0 4px 8px rgba(0, 0, 0, 0.2)` : 'none'};
  
  @media (min-width: 768px) {
    padding: 1.2rem 2rem;
    font-size: 1.2rem;
    height: 100px; /* Taller on desktop */
    min-height: 60px;
  }
`;

const CorrectIcon = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: ${colors.success};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const IncorrectIcon = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: ${colors.danger};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const ScoreCircle = styled.div<{ $percentage: number }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    ${colors.theme} ${props => props.$percentage}%,
    ${colors.border} ${props => props.$percentage}% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: ${colors.background};
  }
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ScoreText = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  z-index: 1;
`;

const ScoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 8px;
`;

const ScoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    font-weight: 500;
    color: ${colors.textSecondary};
  }
  
  span:last-child {
    font-weight: 600;
    color: ${colors.textPrimary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const ResultQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  background-color: ${colors.surface};
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;

const ResultCard = styled.div<{ $isCorrect: boolean }>`
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid ${props => props.$isCorrect ? colors.success : colors.danger};
  background-color: ${props => props.$isCorrect ? `${colors.success}33` : `${colors.danger}33`};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ResultAnswer = styled.div<{ $isCorrect: boolean }>`
  font-weight: 600;
  color: ${props => props.$isCorrect ? colors.success : colors.danger};
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0.75rem 0.5rem;
  background-color: ${props => props.$isCorrect ? `${colors.success}22` : `${colors.danger}22`};
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export default FlagQuizGame;
