import * as fp from 'fingerpose';

const signA = new fp.GestureDescription('A');
signA.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signA.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.8);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signA.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signB = new fp.GestureDescription('B');
signB.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
signB.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.8);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signB.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    signB.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}

const signC = new fp.GestureDescription('C');
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signC.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

const signD = new fp.GestureDescription('D');
signD.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signD.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signD.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
    signD.addCurl(finger, fp.FingerCurl.FullCurl, 0.8);
}

const signE = new fp.GestureDescription('E');
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signE.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signF = new fp.GestureDescription('F');
signF.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
signF.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signF.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    signF.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}

const signG = new fp.GestureDescription('G');
signG.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signG.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
signG.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
signG.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signG.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
signG.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signG.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signH = new fp.GestureDescription('H');
signH.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signH.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
signH.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
signH.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
signH.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
signH.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signH.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signI = new fp.GestureDescription('I');
signI.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
signI.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    signI.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signJ = new fp.GestureDescription('J');
signJ.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
signJ.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
signJ.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    signJ.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signK = new fp.GestureDescription('K');
signK.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signK.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
signK.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
signK.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.8);
signK.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);
for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signK.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signL = new fp.GestureDescription('L');
signL.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signL.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
signL.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
signL.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signL.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signL.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signM = new fp.GestureDescription('M');
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signM.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
signM.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);

const signN = new fp.GestureDescription('N');
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signN.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
signN.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);

const signO = new fp.GestureDescription('O');
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signO.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

const signP = new fp.GestureDescription('P');
signP.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signP.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
signP.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
signP.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signP.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signQ = new fp.GestureDescription('Q');
signQ.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signQ.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signQ.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
signQ.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signQ.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signR = new fp.GestureDescription('R');
signR.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signR.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signR.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signS = new fp.GestureDescription('S');
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signS.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}
// Thumb crosses over index for S instead of tucked under like A
signS.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.8);
signS.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.8);

const signT = new fp.GestureDescription('T');
for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signT.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signU = new fp.GestureDescription('U');
signU.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signU.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
signU.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
signU.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    signU.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signV = new fp.GestureDescription('V');
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

const signW = new fp.GestureDescription('W');
signW.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
signW.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
signW.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.8);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    signW.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    signW.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
}

const signX = new fp.GestureDescription('X');
signX.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signX.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signY = new fp.GestureDescription('Y');
signY.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
signY.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);
signY.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);
signY.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
signY.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.8);
signY.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.8);
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    signY.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

const signZ = new fp.GestureDescription('Z');
signZ.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
signZ.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
signZ.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    signZ.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export const Gestures = [
  signA, signB, signC, signD, signE, signF, signG, signH, signI, signJ,
  signK, signL, signM, signN, signO, signP, signQ, signR, signS, signT,
  signU, signV, signW, signX, signY, signZ
];
