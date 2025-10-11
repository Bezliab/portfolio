import { useEffect, useState } from "react";

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const createFirework = () => {
      const colors = [
        "#667eea",
        "#764ba2",
        "#f093fb",
        "#f5576c",
        "#4facfe",
        "#00f2fe",
      ];
      const newFirework = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 2,
      };

      setFireworks((prev) => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
      }, 2000);
    };

    const interval = setInterval(createFirework, 3000);

    // Create initial fireworks
    for (let i = 0; i < 4; i++) {
      setTimeout(createFirework, i * 500);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fireworks-container">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            backgroundColor: firework.color,
            width: `${firework.size}px`,
            height: `${firework.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
