import { useEffect, useState } from "react";

export default function Fireworks() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // Create curved light streams
    const createStreams = () => {
      const newStreams = [];
      const colors = ["#ff006e", "#8338ec", "#3a86ff", "#06ffa5", "#ffbe0b"];

      for (let i = 0; i < 15; i++) {
        newStreams.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2,
          startX: Math.random() * 20,
          startY: 60 + Math.random() * 30,
          curve: Math.random() * 100 + 50,
        });
      }
      setStreams(newStreams);
    };

    createStreams();
    const interval = setInterval(createStreams, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hyperspeed-container">
      <svg
        className="curved-streams"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {streams.map((stream) => (
          <path
            key={stream.id}
            className="stream-path"
            d={`M ${stream.startX} ${stream.startY} Q ${stream.curve} ${
              stream.startY - 20
            } 100 ${stream.startY - 10}`}
            stroke={stream.color}
            strokeWidth="0.3"
            fill="none"
            style={{
              animationDelay: `${stream.delay}s`,
              animationDuration: `${stream.duration}s`,
            }}
          />
        ))}
      </svg>

      {/* Additional particle effects */}
      <div className="particle-field">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="light-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
