/* eslint-disable react/jsx-key */
import Navbar from "../Components/Navbar";
import { useState } from "react";

const QUIZ_QUESTIONS = [
  {
    Question: "Which is the fastest version of fencing?",
    Answers: [
      { Answer: "Foil", isCorrect: false },
      { Answer: "Sabre", isCorrect: true },
      { Answer: "Épée", isCorrect: false },
      { Answer: "Running to the bathroom", isCorrect: false },
    ],
  },
  {
    Question: "Evidence of sword fights goes back approximately how long?",
    Answers: [
      { Answer: "3000 Years", isCorrect: true },
      { Answer: "Yesterday, I just learned about this!", isCorrect: false },
      { Answer: "200 Years", isCorrect: false },
      { Answer: "1000 Years", isCorrect: false },
    ],
  },
  {
    Question: "How long is the piste (playing area)?",
    Answers: [
      { Answer: "14 metres", isCorrect: true },
      { Answer: "12 metres", isCorrect: false },
      { Answer: "23 metres", isCorrect: false },
      { Answer: "I get tired thinking about it", isCorrect: false },
    ],
  },
  {
    Question: "Which discipline has been in the Olympics the longest?",
    Answers: [
      { Answer: "Foil", isCorrect: false },
      { Answer: "Épée", isCorrect: false },
      { Answer: "Yelling", isCorrect: false },
      { Answer: "Sabre", isCorrect: true },
    ],
  },
  {
    Question: "What are the blades made of?",
    Answers: [
      { Answer: "Baguettes", isCorrect: false },
      { Answer: "Steel", isCorrect: true },
      { Answer: "Plastic", isCorrect: false },
      { Answer: "Ceramic", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <main className="bg-normal bg-no-repeat bg-cover bg-fixed w-full flex items-center justify-center min-h-screen text-white relative">
      <Navbar />
      <section className="w-screen h-screen grid place-content-center sm:px-4">
        <div className="flex flex-col w-[43rem] bg-red-400 rounded-3xl items-center justify-between bg-gradient-to-t from-[#07394B]/40 to-[#091B24]/30 border-[#6EE9FF] border-2 bg-[#064550]/40 mt-8 sm:w-[20rem] md:max-w-[90vw]">
          <h3 className="p-4 text-4xl text-[#CDEFFF] border-[#6EE9FF] border-b-2 w-full font-semibold text-center sm:text-2xl md:px-6 ">
            Quiz Time
          </h3>
          {showScore ? (
            <div className="flex flex-col mb-10 text-center ">
              <p className="text-2xl">
                You have scored {score} out of {QUIZ_QUESTIONS.length}
              </p>
              <button
                className="bg-[#AF0000] font-semibold px-24 py-2 rounded-md border-[1px] mt-8 hover:bg-[#160000] duration-300"
                type="submit"
                onClick={resetQuiz}
              >
                Play Again!
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl text-[#70D9FF] text-center py-12 font-semibold tracking-wide sm:text-xl sm:py-2 md:text-2xl md:px-4">
                {QUIZ_QUESTIONS[currentQuestion].Question}
              </h2>
              <div className="grid grid-cols-2 gap-x-10 px-10 gap-y-10 w-full pb-10 sm:grid-cols-1 sm:gap-3 sm:py-4">
                {QUIZ_QUESTIONS[currentQuestion].Answers.map((answer) => (
                  <button
                    className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black sm:p-1"
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </div>
              <div className="text-xl rounded-[15px] px-3 py-1  text-[#6EE9FF] mb-8 sm:my-2">
                <p id="p-number">
                  {currentQuestion + 1}
                  <span>/{QUIZ_QUESTIONS.length}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Quiz;
