import { useEffect, useRef } from "react";

export default function ParticlesBackgrounds() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particlesCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;

        // 🔥 LOWER OPACITY (fixes "glow illusion")
        this.color = "rgba(255,255,255,0.15)";

        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // 🔥 HARD RESET ALL GLOW
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";

        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.draw();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createParticles();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔥 EXTRA SAFETY RESET (prevents fake glow)
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none z-0"
    />
  );
}