import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function CameraSwitcher() {
  const [devices, setDevices] = useState([]);
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
      const videoDevices = mediaDevices.filter(d => d.kind === "videoinput");
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setDeviceId(videoDevices[0].deviceId); // default to first camera
      }
    });
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{ deviceId }}
      />

      <select onChange={(e) => setDeviceId(e.target.value)} value={deviceId}>
        {devices.map((d, i) => (
          <option key={i} value={d.deviceId}>
            {d.label || `Camera ${i + 1}`}
          </option>
        ))}
      </select>
    </div>
  );
}
