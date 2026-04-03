import * as fp from 'fingerpose';

// Define the gestures
const signA = new fp.GestureDescription('A');
const signB = new fp.GestureDescription('B');
const signC = new fp.GestureDescription('C');
const signL = new fp.GestureDescription('L');
const signV = new fp.GestureDescription('V');

// -------------------------------------------------------------------------------- //
// SIGN 'A'
// Thumb is straight and stretched (usually alongside the index).
// Other fingers are fully curled.
signA.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signA.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.8);
signA.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);
signA.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signA.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

// -------------------------------------------------------------------------------- //
// SIGN 'B'
// Thumb is curled across palm.
// Other fingers are straight pointing up.
signB.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
signB.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.8);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signB.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    signB.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}

// -------------------------------------------------------------------------------- //
// SIGN 'C'
// All fingers curve half way forming a C shape.
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signC.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

// -------------------------------------------------------------------------------- //
// SIGN 'L'
// Thumb and Index straight and perpendicular. Others full curl.
signL.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signL.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
signL.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);

signL.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signL.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signL.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

// -------------------------------------------------------------------------------- //
// SIGN 'V'
// Index and Middle straight up and spread (V shape).
// Thumb, Ring, Pinky curled.
signV.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signV.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);

signV.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.8);
signV.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.8);
signV.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.8);

signV.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.8);
signV.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);
signV.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.8);

for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signV.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export const Gestures = [signA, signB, signC, signL, signV];
