import React, { useState } from 'react';
import { learningLessons } from '../utils/signDictionary';
import './LearnModule.css';

const LearnModule = () => {
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [hearts, setHearts] = useState(5);
  const [isFinished, setIsFinished] = useState(false);

  // Home screen: list of lessons
  if (!activeLesson) {
    return (
      <div className="learn-container">
        <h2 style={{ color: '#4b4b4b', marginBottom: '0.5rem' }}>Belajar BISINDO</h2>
        <p style={{ color: '#777', marginBottom: '1rem' }}>Pilih pelajaran untuk mulai belajar bahasa isyarat.</p>
        
        <div className="lessons-menu">
          {learningLessons.map((lesson) => (
            <div key={lesson.id} className="lesson-card" onClick={() => {
              setActiveLesson(lesson);
              setCurrentQuestionIndex(0);
              setHearts(5);
              setIsFinished(false);
              setFeedback(null);
              setSelectedOption(null);
            }}>
              <h3 className="lesson-title">{lesson.title}</h3>
              <button className="lesson-start-btn">Mulai</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Finished screen
  if (isFinished) {
    return (
      <div className="learn-container lesson-complete">
        <div style={{ fontSize: '4rem' }}>🎉</div>
        <h2>Pelajaran Selesai!</h2>
        <p style={{ color: '#777', fontWeight: 'bold' }}>Luar biasa, Anda telah menyelesaikan "{activeLesson.title}" dengan sisa {hearts} Nyawa ❤️</p>
        <button className="finish-btn" onClick={() => setActiveLesson(null)}>Lanjut</button>
      </div>
    );
  }

  const currentQuestion = activeLesson.questions[currentQuestionIndex];
  const progressPercentage = (currentQuestionIndex / activeLesson.questions.length) * 100;

  const handleOptionClick = (option) => {
    if (feedback) return; // Prevent changing answer after checking
    setSelectedOption(option);
  };

  const handleCheck = () => {
    if (!selectedOption) return;

    if (feedback) {
      // Already checked, clicking "Next"
      if (currentQuestionIndex + 1 < activeLesson.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        setIsFinished(true);
      }
      return;
    }

    // Checking answer
    if (selectedOption === currentQuestion.correctAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('wrong');
      setHearts((prev) => Math.max(0, prev - 1));
    }
  };

  const isGameOver = hearts === 0;

  if (isGameOver) {
    return (
      <div className="learn-container lesson-complete">
        <div style={{ fontSize: '4rem' }}>💔</div>
        <h2 style={{ color: '#ea2b2b' }}>Kehabisan Nyawa!</h2>
        <p style={{ color: '#777', fontWeight: 'bold' }}>Jangan menyerah, ayo coba lagi!</p>
        <button className="finish-btn" style={{ backgroundColor: '#1cb0f6', boxShadow: '0 4px 0 #1899d6' }} onClick={() => setActiveLesson(null)}>Kembali ke Menu</button>
      </div>
    );
  }

  return (
    <div className="learn-container">
      {/* Header with Progress Bar and Hearts */}
      <div className="quiz-header">
        <button className="close-btn" onClick={() => setActiveLesson(null)}>✕</button>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="hearts">❤️ {hearts}</div>
      </div>

      {/* Question */}
      <div className="question-text">{currentQuestion.questionText}</div>

      <div className="sign-image-container">
        <img src={currentQuestion.image} alt="Sign" className="sign-image" />
      </div>

      {/* Options */}
      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let btnClass = "option-btn";
          if (selectedOption === option) {
            btnClass += " selected";
            if (feedback === 'correct') btnClass += " correct";
            if (feedback === 'wrong') btnClass += " wrong";
          } else if (feedback === 'correct' && option === currentQuestion.correctAnswer) {
             // highlight correct answer if they got it wrong
             btnClass += " correct";
          }
          
          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => handleOptionClick(option)}
              disabled={!!feedback}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="action-footer">
        {feedback && (
          <div className={`feedback-container ${feedback}`}>
            <span style={{ fontSize: '1.5rem' }}>{feedback === 'correct' ? '✓' : '✕'}</span>
            <span>{feedback === 'correct' ? 'Luar Biasa!' : `Jawaban yang benar: ${currentQuestion.correctAnswer}`}</span>
          </div>
        )}

        <button
          className={`check-btn ${!selectedOption ? '' : feedback === 'correct' ? 'next' : feedback === 'wrong' ? 'retry' : 'active'}`}
          onClick={handleCheck}
          disabled={!selectedOption}
        >
          {feedback ? 'Lanjut' : 'Periksa'}
        </button>
      </div>
    </div>
  );
};

export default LearnModule;
