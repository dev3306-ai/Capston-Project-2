import React from "react";

export default function ProgressChart({ progress }) {
  const circleStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "10px solid #0047ab",
    borderTop: `10px solid ${progress >= 100 ? "#00c853" : "#ffcc00"}`, // Green if 100%, yellow otherwise
    transform: `rotate(${(progress / 100) * 360}deg)`,
    transition: "transform 0.3s ease",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={circleStyle}></div>
      <p style={{ marginTop: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
        {progress}%
      </p>
    </div>
  );
}