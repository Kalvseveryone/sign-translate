export const signDictionary = {
  a: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/a.gif",
  b: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/b.gif",
  c: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/c.gif",
  d: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/d.gif",
  e: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/e.gif",
  f: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/f.gif",
  g: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/g.gif",
  h: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/h.gif",
  i: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/i.gif",
  j: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/j.gif",
  k: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/k.gif",
  l: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/l.gif",
  m: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/m.gif",
  n: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/n.gif",
  o: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/o.gif",
  p: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/p.gif",
  q: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/q.gif",
  r: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/r.gif",
  s: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/s.gif",
  t: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/t.gif",
  u: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/u.gif",
  v: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/v.gif",
  w: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/w.gif",
  x: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/x.gif",
  y: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/y.gif",
  z: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/z.gif",
  " ": "space", // We'll handle space specifically
};

// Also we should provide a fallback image or text if a letter is not found
export const fallbackSign = "https://dummyimage.com/200x200/ffffff/000000&text=N/A";

// Data Pembelajaran BISINDO (Duolingo Style)
export const learningLessons = [
  {
    id: 1,
    title: "Mengenal Huruf A - E",
    questions: [
      {
        type: "multiple_choice",
        questionText: "Huruf apakah ini?",
        image: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/a.gif",
        options: ["A", "B", "C", "D"],
        correctAnswer: "A"
      },
      {
        type: "multiple_choice",
        questionText: "Huruf apakah ini?",
        image: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/b.gif",
        options: ["E", "B", "A", "C"],
        correctAnswer: "B"
      },
      {
        type: "multiple_choice",
        questionText: "Manakah isyarat untuk huruf 'C'?",
        // We can just use text or image for options. Let's stick to guessing the letter from an image for simplicity.
        image: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/c.gif",
        options: ["C", "D", "A", "E"],
        correctAnswer: "C"
      }
    ]
  },
  {
    id: 2,
    title: "Mengenal Huruf F - J",
    questions: [
      {
        type: "multiple_choice",
        questionText: "Huruf apakah ini?",
        image: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/f.gif",
        options: ["F", "G", "H", "I"],
        correctAnswer: "F"
      },
      {
        type: "multiple_choice",
        questionText: "Huruf apakah ini?",
        image: "https://www.lifeprint.com/asl101/fingerspelling/abc-gifs/g.gif",
        options: ["H", "I", "G", "J"],
        correctAnswer: "G"
      }
    ]
  },
  {
    id: 3,
    title: "Praktek Langsung: Huruf Dasar",
    questions: [
      {
        type: "camera_gesture",
        questionText: "Peragakan huruf 'A' di depan kamera",
        targetGesture: "A"
      },
      {
        type: "camera_gesture",
        questionText: "Sekarang, coba huruf 'B'",
        targetGesture: "B"
      },
      {
        type: "camera_gesture",
        questionText: "Luar biasa! Bagaimana dengan huruf 'C'?",
        targetGesture: "C"
      }
    ]
  }
];
