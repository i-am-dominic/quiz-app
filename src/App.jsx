import { useState } from 'react';
import './App.css';

function App() {
  // Properties

  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Where are the Great Pyramids of Giza located?",
      options: [
        { id: 0, text: "West bank of the Nile River", isCorrect: true },
        { id: 1, text: "East bank of the Nile River", isCorrect: false },
        { id: 2, text: "Sahara Desert", isCorrect: false },
        { id: 3, text: "Giza Plateau", isCorrect: false },
      ],
    },
    {
      text: "What writing system did the Mayans develop?",
      options: [
        { id: 0, text: "Aztec script", isCorrect: false },
        { id: 1, text: "Incan quipus", isCorrect: false },
        { id: 2, text: "Maya hieroglyphs", isCorrect: true },
        { id: 3, text: "Zapotec script", isCorrect: false },
      ],
    },
    {
      text: "Which ancient empire was known for its vast network of roads and aqueducts?",
      options: [
        { id: 0, text: "Egyptian", isCorrect: false },
        { id: 1, text: "Roman", isCorrect: true },
        { id: 2, text: "Assyrian", isCorrect: false },
        { id: 3, text: "Chinese", isCorrect: false },
      ],
    },
    {
      text: "What was the name of the devastating plague that swept through Europe in the 14th century?",
      options: [
        { id: 0, text: "The Great Famine", isCorrect: false },
        { id: 1, text: "The Hundred Years' War", isCorrect: false },
        { id: 2, text: "The Great Schism", isCorrect: false },
        { id: 3, text: "The Black Death", isCorrect: true },
      ],
    },
    {
      text: "Who invented the printing press, revolutionising the way knowledge was shared?",
      options: [
        { id: 0, text: "William Caxton", isCorrect: false },
        { id: 1, text: "Johannes Gutenberg", isCorrect: true },
        { id: 2, text: "Wang Chen", isCorrect: false },
        { id: 3, text: "Bi Sheng", isCorrect: false },
      ],
    },
    {
      text: "What year did the Berlin Wall fall, symbolising the end of the Cold War?",
      options: [
        { id: 0, text: "1961", isCorrect: false },
        { id: 1, text: "1985", isCorrect: false },
        { id: 2, text: "1989", isCorrect: true },
        { id: 3, text: "1991", isCorrect: false },
      ],
    },
    {
      text: "Which global organisation was formed after World War II to promote international cooperation and peace?",
      options: [
        { id: 0, text: "United Nations", isCorrect: true },
        { id: 1, text: "World Health Organisation", isCorrect: false },
        { id: 2, text: "League of Nations", isCorrect: false },
        { id: 3, text: "North Atlantic Treaty Organisation (NATO)", isCorrect: false },
      ],
    },
    {
      text: "Who led the French Revolution and became the Emperor of France?",
      options: [
        { id: 0, text: "Louis XVI", isCorrect: false },
        { id: 1, text: "Napoleon Bonaparte", isCorrect: true },
        { id: 2, text: "Maximilien Robespierre", isCorrect: false },
        { id: 3, text: "Jacques-Pierre Brisso", isCorrect: false },
      ],
    },
    {
      text: "Which country gained independence from the British Raj in 1947?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "Pakistan", isCorrect: false },
        { id: 2, text: "Bangladesh", isCorrect: false },
        { id: 3, text: "Both A and B", isCorrect: true },
      ],
    },
    {
      text: "The twin tower attack on US soil took place on which of these dates?",
      options: [
        { id: 0, text: "September 9, 2001", isCorrect: false },
        { id: 1, text: "September 11, 2001", isCorrect: true },
        { id: 2, text: "October 7, 2001", isCorrect: false },
        { id: 3, text: "November 9, 2004", isCorrect: false },
      ],
    },
  ];

  // Helper functions

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }

  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Historical Quiz</h1>

      {/* 2. Current score */}
      <h2>Current Score: {score}</h2>

      { finalResults ? (
      /* 4. Final Results */
      <div className="final-results">
        <h1>Final Results</h1>
        <h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart game</button>
      </div>
      ) : (
      /* 3. Question Card */
      <div className="question-card">
        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h3 className='question-text'>{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
          })}
        </ul>
      </div>
      )}
    </div>
  )
}

export default App
