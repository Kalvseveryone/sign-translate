import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import * as fp from 'fingerpose';
import { Gestures } from '../utils/GestureDefinitions';

export default function WebcamTranslator() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [modelLoading, setModelLoading] = useState(true);
  const [detectedLetter, setDetectedLetter] = useState(null);
  const [historyText, setHistoryText] = useState("");

  const requestRef = useRef();

  useEffect(() => {
    const runHandpose = async () => {
      // Ensure backend is ready
      await tf.ready();
      const net = await handpose.load();
      console.log('Handpose model loaded.');
      setModelLoading(false);
      
      const detect = async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4
        ) {
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;
          
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;
          
          if(canvasRef.current) {
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;
  
            const hand = await net.estimateHands(video);
            
            if (hand.length > 0) {
              const GE = new fp.GestureEstimator(Gestures);
              const gesture = await GE.estimate(hand[0].landmarks, 8.5); // Minimum confidence 8.5 out of 10
              
              if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                // Find gesture with highest confidence
                const confidence = gesture.gestures.map((p) => p.score);
                const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
                const letter = gesture.gestures[maxConfidence].name;
                setDetectedLetter(letter);
              } else {
                setDetectedLetter(null);
              }

              // Draw hand outline
              const ctx = canvasRef.current.getContext("2d");
              ctx.clearRect(0, 0, videoWidth, videoHeight);
              drawHand(hand, ctx);
            } else {
               setDetectedLetter(null);
               if(canvasRef.current){
                  const ctx = canvasRef.current.getContext("2d");
                  ctx.clearRect(0, 0, videoWidth, videoHeight);
               }
            }
          }
        }
        requestRef.current = requestAnimationFrame(detect);
      };
      
      detect();
    };

    runHandpose();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Simple debouncing for adding letters to text
  useEffect(() => {
    if (detectedLetter) {
        const timeout = setTimeout(() => {
            setHistoryText(prev => prev + detectedLetter);
        }, 1500); // Must hold sign for 1.5 second to register
        return () => clearTimeout(timeout);
    }
  }, [detectedLetter]);

  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Translasi Kamera ke Teks</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Mengenali Isyarat Abjad (PoC): A, B, C, L, V. Tahan posisi tangan selama 1.5 detik untuk mengetik.</p>
      
      {modelLoading && <div style={{ color: 'var(--primary-color)', padding: '2rem' }}>Memuat Model AI TensorFlow.js... mohon tunggu...</div>}
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '640px', background: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: '100%',
            height: 'auto',
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 10,
            width: '100%',
            height: 'auto',
          }}
        />
        {detectedLetter && (
          <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(0,0,0,0.7)', color: 'var(--primary-color)', padding: '10px 20px', borderRadius: '10px', fontSize: '2rem', fontWeight: 'bold', zIndex: 11 }}>
            Terdeteksi: {detectedLetter}
          </div>
        )}
      </div>

      <div style={{ width: '100%', marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <label style={{ color: 'var(--text-muted)' }}>Hasil Translasi:</label>
            <button 
               className="btn-secondary" 
               style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }} 
               onClick={() => setHistoryText(prev => prev + " ")}
            >
                Spasi
            </button>
            <button 
               className="btn-secondary" 
               style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }} 
               onClick={() => setHistoryText("")}
            >
                Clear
            </button>
        </div>
        <textarea
          className="text-input"
          style={{ minHeight: '80px' }}
          readOnly
          value={historyText}
          placeholder="..."
        />
      </div>
    </div>
  );
}

// Helper to draw skeleton
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

function drawHand(predictions, ctx) {
    if (predictions.length > 0) {
        predictions.forEach((prediction) => {
            const landmarks = prediction.landmarks;
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                let finger = Object.keys(fingerJoints)[j];
                for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k + 1];
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1]
                    );
                    ctx.strokeStyle = "rgba(102, 252, 241, 0.8)";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }
            for (let i = 0; i < landmarks.length; i++) {
                const x = landmarks[i][0];
                const y = landmarks[i][1];
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);
                ctx.fillStyle = "aqua";
                ctx.fill();
            }
        });
    }
}
