import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Play, Loader2 } from 'lucide-react';

export default function TranslatorInput({ text, setText, isPlaying, onPlay, speed, setSpeed }) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.continuous = false;
        recog.interimResults = true; // allow partial results
        recog.lang = 'id-ID';

        recog.onresult = (event) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            currentTranscript += event.results[i][0].transcript;
          }
          // Only keep valid characters
          const val = currentTranscript.replace(/[^a-zA-Z\s]/g, "");
          setText(val);
        };

        recog.onend = () => {
          setIsListening(false);
        };

        recog.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };

        setRecognition(recog);
      }
    }
  }, [setText]);

  const toggleListening = () => {
    if (!recognition) {
      alert("Browser Anda tidak mendukung Web Speech API.");
      return;
    }
    
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setText(''); // clear text before listening a new sentence
      recognition.start();
      setIsListening(true);
    }
  };
  
  const handleTextChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setText(val);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      onPlay();
    }
  };

  return (
    <div className="glass-panel input-section">
      <div className="input-wrapper" style={{ position: 'relative' }}>
        <textarea
          className="text-input"
          placeholder="Ketik kalimat atau gunakan tombol mikrofon untuk merekam suara..."
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          disabled={isPlaying || isListening}
        ></textarea>
        <button 
          className={`mic-button ${isListening ? 'listening' : ''}`}
          onClick={toggleListening}
          title={isListening ? 'Hentikan Rekaman' : 'Mulai Rekaman Suara'}
          disabled={isPlaying}
          style={{
            position: 'absolute',
            right: '10px',
            bottom: '15px',
            background: isListening ? '#ff4b4b' : 'rgba(102, 252, 241, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: isPlaying ? 'not-allowed' : 'pointer',
            color: isListening ? '#fff' : 'var(--primary-color)',
            transition: 'all 0.3s'
          }}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>
      </div>
      
      <div className="controls-row">
        <div className="speed-control">
          <label className="speed-label">Kecepatan Animasi:</label>
          <select 
            className="speed-select"
            value={speed} 
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isPlaying}
          >
            <option value={1500}>Lambat</option>
            <option value={800}>Sedang</option>
            <option value={400}>Cepat</option>
          </select>
        </div>
        
        <button 
          className="btn-primary" 
          onClick={onPlay} 
          disabled={isPlaying || text.trim().length === 0 || isListening}
        >
          {isPlaying ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Menerjemahkan...
            </>
          ) : (
            <>
              <Play size={20} />
              Terjemahkan (Ctrl+Enter)
            </>
          )}
        </button>
      </div>
    </div>
  );
}
