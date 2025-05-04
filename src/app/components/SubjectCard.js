import React from "react";

export default function SubjectCard({ subject }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h2 style={{ color: "#0047ab" }}>{subject.name}</h2>
      <p style={{ color: "#555" }}>{subject.description}</p>
      <a
        href={`/lessons/${subject.id}`}
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#0047ab",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#003580")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0047ab")}
      >
        Explore
      </a>
    </div>
  );
}