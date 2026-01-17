import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the most common method used in phishing attacks?",
    options: ["Email", "Phone calls", "Text messages", "Social media"],
    correctAnswer: 0,
    explanation: "Email remains the primary vector for phishing attacks, accounting for over 90% of all phishing attempts.",
  },
  {
    id: 2,
    question: "Which of these is a red flag in a suspicious email?",
    options: ["Company logo present", "Urgent action required", "Proper grammar", "Correct sender domain"],
    correctAnswer: 1,
    explanation: "Urgency is a classic manipulation tactic. Attackers pressure you to act before thinking.",
  },
  {
    id: 3,
    question: "What does AI-powered phishing allow attackers to do?",
    options: ["Send emails faster", "Create more convincing personalized attacks", "Bypass all security", "Access your webcam"],
    correctAnswer: 1,
    explanation: "AI enables attackers to craft highly personalized messages that mimic writing styles and contain relevant personal details.",
  },
  {
    id: 4,
    question: "Before clicking a link, you should:",
    options: ["Click immediately if it looks official", "Hover to preview the actual URL", "Trust if it has HTTPS", "Forward to colleagues first"],
    correctAnswer: 1,
    explanation: "Always hover over links to see where they actually lead. The display text can be different from the actual destination.",
  },
  {
    id: 5,
    question: "What is 'spear phishing'?",
    options: ["Mass email campaigns", "Targeted attacks on specific individuals", "Fishing-related scams", "A type of malware"],
    correctAnswer: 1,
    explanation: "Spear phishing targets specific individuals or organizations with customized attacks based on research.",
  },
  {
    id: 6,
    question: "Which password practice is most secure?",
    options: ["Same password everywhere", "Password123!", "Unique passphrase per account", "Sharing with trusted friends"],
    correctAnswer: 2,
    explanation: "Unique passphrases for each account prevent credential stuffing attacks if one account is compromised.",
  },
  {
    id: 7,
    question: "If you receive an unexpected email from your CEO asking for urgent wire transfer, you should:",
    options: ["Act immediately", "Reply to the email asking for confirmation", "Verify through a different channel", "Forward to IT"],
    correctAnswer: 2,
    explanation: "CEO fraud is common. Always verify unusual requests through a separate, trusted communication channel.",
  },
  {
    id: 8,
    question: "What makes AI-generated phishing emails particularly dangerous?",
    options: ["They are longer", "They contain no spelling errors and sound natural", "They always include attachments", "They come from .ai domains"],
    correctAnswer: 1,
    explanation: "AI eliminates the grammar mistakes that were once easy red flags, making fake emails harder to spot.",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    setShowResult(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnswered(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
    setQuizComplete(false);
  };

  const getLevel = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { level: "Advanced", color: "text-green-500", recommended: "advanced" };
    if (percentage >= 50) return { level: "Intermediate", color: "text-yellow-500", recommended: "intermediate" };
    return { level: "Beginner", color: "text-primary", recommended: "beginner" };
  };

  if (quizComplete) {
    const result = getLevel();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="card-gradient border border-border rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Complete!</h1>
              <p className="text-muted-foreground mb-8">Here's your cybersecurity awareness profile</p>

              <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                <div className="text-6xl font-bold text-foreground mb-2">{percentage}%</div>
                <div className={`text-2xl font-semibold ${result.color}`}>{result.level} Level</div>
                <p className="text-muted-foreground mt-2">
                  You answered {score} out of {questions.length} questions correctly
                </p>
              </div>

              <p className="text-muted-foreground mb-8">
                Based on your results, we recommend starting with our <span className="text-primary font-medium">{result.level}</span> module 
                to continue strengthening your cyber awareness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/modules?level=${result.recommended}`}>
                  <Button variant="hero" size="lg">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={restartQuiz}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground font-mono">
                Score: {score}/{currentQuestion + (answered ? 1 : 0)}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="card-gradient border border-border rounded-2xl p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                let buttonStyle = "w-full justify-start text-left h-auto py-4 px-6";
                
                if (showResult) {
                  if (index === question.correctAnswer) {
                    buttonStyle += " border-green-500 bg-green-500/10 text-foreground";
                  } else if (index === selectedAnswer && index !== question.correctAnswer) {
                    buttonStyle += " border-primary bg-primary/10 text-foreground";
                  }
                } else if (selectedAnswer === index) {
                  buttonStyle += " border-primary bg-primary/10";
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonStyle}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                  >
                    <span className="flex items-center gap-3 w-full">
                      <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-mono shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && index === question.correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      )}
                      {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                        <XCircle className="h-5 w-5 text-primary shrink-0" />
                      )}
                    </span>
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Explanation:</span>{" "}
                  {question.explanation}
                </p>
              </div>
            )}

            {answered && (
              <div className="mt-8 flex justify-end">
                <Button variant="hero" onClick={nextQuestion}>
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
