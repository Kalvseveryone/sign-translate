import React, { useState, useEffect, useRef } from 'react';
import TranslatorInput from './components/TranslatorInput';
import SignPlayer from './components/SignPlayer';
import WebcamTranslator from './components/WebcamTranslator';
import LearnModule from './components/LearnModule';

function App() {
  const [activeTab, setActiveTab] = useState('textToSign'); // 'textToSign' | 'signToText'

  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(800); // ms per letter

  const timerRef = useRef(null);

  const startTranslation = () => {
    if (!text.trim()) return;
    setIsPlaying(true);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (isPlaying) {
      const chars = text.trim().toLowerCase().split('');

      if (currentIndex < chars.length) {
        timerRef.current = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        // Finished
        timerRef.current = setTimeout(() => {
          setIsPlaying(false);
          setCurrentIndex(0);
        }, speed);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentIndex, text, speed]);

  return (
    <div className="app-container">
      <header className="header" style={{ marginBottom: 0 }}>
        <h1>SignTranslate</h1>
        <p>Aplikasi Translasi Bahasa Isyarat 2 Arah (Suara & Kamera)</p>
      </header>

      <div className="tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        <button
          className={`tab-button ${activeTab === 'textToSign' ? 'active' : ''}`}
          onClick={() => setActiveTab('textToSign')}
        >
          Tulis & Suara ➔ Isyarat
        </button>
        <button
          className={`tab-button ${activeTab === 'signToText' ? 'active' : ''}`}
          onClick={() => setActiveTab('signToText')}
        >
          Kamera Web ➔ Teks
        </button>
        <button
          className={`tab-button ${activeTab === 'learn' ? 'active' : ''}`}
          onClick={() => setActiveTab('learn')}
        >
          Belajar BISINDO
        </button>
      </div>

      {activeTab === 'textToSign' && (
        <>
          <TranslatorInput
            text={text}
            setText={setText}
            isPlaying={isPlaying}
            onPlay={startTranslation}
            speed={speed}
            setSpeed={setSpeed}
          />
          <SignPlayer
            text={text}
            isPlaying={isPlaying}
            currentIndex={currentIndex}
          />
        </>
      )}
      
      {activeTab === 'signToText' && (
        <WebcamTranslator />
      )}

      {activeTab === 'learn' && (
        <LearnModule />
      )}

    </div>
  );
}

export default App;
