import React from 'react';
import { signDictionary, fallbackSign } from '../utils/signDictionary';

export default function SignPlayer({ text, isPlaying, currentIndex }) {
  const characters = text.trim().toLowerCase().split("");
  const currentChar = isPlaying && currentIndex < characters.length ? characters[currentIndex] : null;

  return (
    <div className="glass-panel player-section">
      <div className={`sign-display ${isPlaying ? 'playing-state' : ''}`}>
        {currentChar ? (
          currentChar === " " ? (
             <div className="space-indicator">[SPASI]</div>
          ) : signDictionary[currentChar] ? (
             <img 
               key={currentIndex} // forces re-render/animation on char change
               src={signDictionary[currentChar]} 
               alt={`Sign for ${currentChar}`} 
               className="sign-image" 
             />
          ) : (
             <img src={fallbackSign} alt="Unknown" className="sign-image" />
          )
        ) : (
          <div className="space-indicator" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.3)' }}>
            Animasi Akan Tampil Di Sini
          </div>
        )}
      </div>

      <div className="current-letter-display">
        {currentChar === " " ? "_" : currentChar || ""}
      </div>

      <div className="word-progress">
        {characters.map((char, idx) => (
          <div 
            key={idx} 
            className={`char-chip ${char === " " ? 'space' : ''} ${isPlaying && currentIndex === idx ? 'active' : ''}`}
          >
            {char === " " ? "" : char}
          </div>
        ))}
      </div>
    </div>
  );
}
