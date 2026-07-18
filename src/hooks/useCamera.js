import { useEffect, useRef, useState } from "react";

function useCamera() {

  const videoRef = useRef(null);

  const streamRef = useRef(null);

  const [cameraEnabled, setCameraEnabled] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =============================
  // START CAMERA
  // =============================

  const startCamera = async () => {

    try {

      setLoading(true);

      setError("");

      const stream =
        await navigator.mediaDevices.getUserMedia({

          video: {
            width: 1280,
            height: 720,
            facingMode: "user",
          },

          audio: false,

        });

      streamRef.current = stream;

      if (videoRef.current) {

        videoRef.current.srcObject = stream;

      }

      setCameraEnabled(true);

    } catch (err) {

      console.log(err);

      setError("Camera permission denied.");

      setCameraEnabled(false);

    } finally {

      setLoading(false);

    }

  };

  // =============================
  // STOP CAMERA
  // =============================

  const stopCamera = () => {

    if (streamRef.current) {

      streamRef.current
        .getTracks()
        .forEach(track => track.stop());

    }

    if (videoRef.current) {

      videoRef.current.srcObject = null;

    }

    setCameraEnabled(false);

  };

  // =============================
  // TOGGLE CAMERA
  // =============================

  const toggleCamera = () => {

    if (cameraEnabled) {

      stopCamera();

    } else {

      startCamera();

    }

  };

  // =============================
  // CLEANUP
  // =============================

  useEffect(() => {

    return () => {

      if (streamRef.current) {

        streamRef.current
          .getTracks()
          .forEach(track => track.stop());

      }

    };

  }, []);

  return {

    videoRef,

    cameraEnabled,

    loading,

    error,

    startCamera,

    stopCamera,

    toggleCamera,

  };

}

export default useCamera;