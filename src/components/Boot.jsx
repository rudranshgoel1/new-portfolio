import { useState, useEffect, useRef } from "react";

function BootScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercent((prev) => {
        const next = prev + 0.15;
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => setFadeOut(true), 500);
          return 100;
        }

        return next;
      });
    }, 1);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6 ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        zIndex: 99999,
      }}
      onTransitionEnd={() => {
        if (fadeOut) {
          onComplete();
        }
      }}
    >
      <img
        src="/images/logo.svg"
        alt="Logo"
        style={{ width: 80, height: 80, marginBottom: 8 }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 80px))",
          width: 224,
          height: 4,
          backgroundColor: "#555555",
          borderRadius: 9999,
          overflow: "hidden",
          marginTop: 24,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            backgroundColor: "#ffffff",
            borderRadius: 9999,
            transition: "width 0.05 linear",
          }}
        ></div>
      </div>
    </div>
  );
}

export default BootScreen;