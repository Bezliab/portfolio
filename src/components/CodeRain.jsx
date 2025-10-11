import { useEffect, useRef } from "react";

const CodeRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Code characters to display
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store drop positions
    const drops = [];
    const splashes = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = "#00ff88";
      ctx.font = `${fontSize}px monospace`;

      // Draw falling characters
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Create gradient effect for each character
        const gradient = ctx.createLinearGradient(x, y - 20, x, y + 20);
        gradient.addColorStop(0, "#00ff88");
        gradient.addColorStop(0.5, "#00ccff");
        gradient.addColorStop(1, "#0088ff");

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // Check if character hits the bottom
        if (y > canvas.height && Math.random() > 0.975) {
          // Create splash effect
          splashes.push({
            x: x,
            y: canvas.height,
            particles: Array.from({ length: 8 }, (_, index) => ({
              x: x,
              y: canvas.height,
              vx: (Math.random() - 0.5) * 8,
              vy: Math.random() * -8 - 2,
              life: 30,
              maxLife: 30,
            })),
          });
          drops[i] = 0;
        }

        drops[i]++;

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      // Draw splash particles
      splashes.forEach((splash, splashIndex) => {
        splash.particles.forEach((particle, particleIndex) => {
          const alpha = particle.life / particle.maxLife;
          ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
          ctx.fillRect(particle.x, particle.y, 2, 2);

          // Update particle position
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.3; // gravity
          particle.life--;

          // Remove dead particles
          if (particle.life <= 0) {
            splash.particles.splice(particleIndex, 1);
          }
        });

        // Remove empty splashes
        if (splash.particles.length === 0) {
          splashes.splice(splashIndex, 1);
        }
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default CodeRain;
