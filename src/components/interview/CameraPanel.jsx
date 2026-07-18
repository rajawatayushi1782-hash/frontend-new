import { useEffect, useRef, useState } from "react";
import "./Interview.css";

function CameraPanel({ onDisconnect }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [status, setStatus] = useState("Connecting...");

  const [warning, setWarning] = useState("");
const timeoutRef = useRef(null);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
      if (timeoutRef.current) {
  clearTimeout(timeoutRef.current);
}

setWarning("");

setStatus("Camera Connected");

      stream.getVideoTracks()[0].onended = async () => {

    setCameraOn(false);

    setStatus("Camera Disconnected");

    setWarning(
        "Camera disconnected. Reconnect within 30 seconds."
    );

    if (onDisconnect) {
        await onDisconnect();
    }

    timeoutRef.current = setTimeout(() => {

        alert(
            "Interview terminated because camera remained disconnected."
        );

        window.location.href = "/dashboard";

    }, 30000);

};

    } catch (err) {
      console.log(err);

      setCameraOn(false);
      setStatus("Camera Permission Denied");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="camera-card">

      <div className="camera-header">

        <h2>  Proctoring Camera</h2>

        <span
          className={
            cameraOn
              ? "camera-live"
              : "camera-off"
          }
        >
          {status}
        </span>

      </div>

      <video
  ref={videoRef}
  autoPlay
  muted
  playsInline
  className="camera-preview"
/>

{warning && (
  <div className="camera-warning">
    {warning}
  </div>
)}

<div className="camera-info">

  <h3>Interview Rules</h3>

  <ul>
    <li>Camera is mandatory</li>
    <li>Microphone is mandatory</li>
    <li>Stay in fullscreen</li>
    <li>Do not switch tabs</li>
    <li>Keep your face visible</li>
  </ul>

</div>
    </div>
  );
}

export default CameraPanel;