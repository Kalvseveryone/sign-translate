import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import * as fp from 'fingerpose';
import { Gestures } from '../utils/GestureDefinitions';
import { drawHand } from '../utils/canvasHelper';

export default function CameraQuiz({ targetGesture, onSuccess, onSkip }) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [modelLoading, setModelLoading] = useState(true);
  const [detectedLetter, setDetectedLetter] = useState(null);
  const [facingMode, setFacingMode] = useState("user");

  const requestRef = useRef();

  useEffect(() => {
    // Reset when target changes
    setDetectedLetter(null);
  }, [targetGesture]);

  useEffect(() => {
    const runHandpose = async () => {
      await tf.ready();
      const net = await handpose.load();
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
              const gesture = await GE.estimate(hand[0].landmarks, 7.5);
              
              if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                const confidence = gesture.gestures.map((p) => p.score);
                const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
                const letter = gesture.gestures[maxConfidence].name;
                setDetectedLetter(letter);
              } else {
                setDetectedLetter(null);
              }

              const ctx = canvasRef.current.getContext("2d");
              ctx.clearRect(0, 0, videoWidth, videoHeight);
              drawHand(hand, ctx);
            } else {
               setDetectedLetter(null);
               const ctx = canvasRef.current.getContext("2d");
               ctx.clearRect(0, 0, videoWidth, videoHeight);
            }
          }
        }
        // only keep looping if not unmounted
        requestRef.current = requestAnimationFrame(detect);
      };
      
      detect();
    };

    runHandpose();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Validation logic
  useEffect(() => {
    if (detectedLetter === targetGesture) {
        const timeout = setTimeout(() => {
            // Holds the sign for 1.2s to confirm success
            onSuccess();
        }, 1200); 
        return () => clearTimeout(timeout);
    }
  }, [detectedLetter, targetGesture, onSuccess]);

  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '2rem' }}>
      
      {modelLoading && (
        <div style={{ background: '#ddf4ff', color: '#1cb0f6', padding: '1rem', borderRadius: '12px', fontWeight: 'bold', marginBottom: '1rem', border: '2px solid #84d8ff' }}>
           ⏳ Memuat AI Kamera (TensorFlow)...
        </div>
      )}
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '400px', background: '#000', borderRadius: '16px', overflow: 'hidden', border: '4px solid var(--surface-border)', boxShadow: 'var(--shadow-md)' }}>
        
        <Webcam
          ref={webcamRef}
          videoConstraints={{ facingMode }}
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
            minHeight: '250px' // Ensure canvas has height before video loads
          }}
        />
        
        <button 
           onClick={toggleCamera} 
           style={{ position: 'absolute', top: 10, right: 10, zIndex: 12, background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px', padding: '8px 12px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          🔄
        </button>

        {detectedLetter && (
          <div style={{ 
              position: 'absolute', 
              top: 10, 
              left: 10, 
              background: detectedLetter === targetGesture ? 'var(--secondary-color)' : 'rgba(0,0,0,0.7)', 
              color: '#fff', 
              padding: '6px 12px', 
              borderRadius: '8px', 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              zIndex: 11 
          }}>
            {detectedLetter}
          </div>
        )}
      </div>

      <button className="btn-secondary" style={{ marginTop: '1.5rem', color: '#ea2b2b', borderColor: '#e5e5e5' }} onClick={onSkip}>
        Lewati (Ambil Nyawa)
      </button>

    </div>
  );
}
