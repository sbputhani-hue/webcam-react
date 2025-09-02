import React, { useRef } from "react";
import Webcam from "react-webcam";

export default function CameraComponent() {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // Base64 image
  };

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture</button>
    </div>
  );
}
