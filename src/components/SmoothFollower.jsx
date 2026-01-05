// import { useEffect, useRef } from "react";

// const SmoothFollower = ({
//   element,
//   particles = 15,
//   rate = 0.4,
//   baseImageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==",
// }) => {
//   const canvasRef = useRef(null);
//   const cursorRef = useRef({ x: 0, y: 0 });
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);
//   const cursorsInittedRef = useRef(false);

//   class Particle {
//     constructor(x, y, image) {
//       this.position = { x, y };
//       this.image = image;
//     }

//     move(context) {
//       context.drawImage(this.image, this.position.x, this.position.y);
//     }
//   }

//   useEffect(() => {
//     const baseImage = new Image();
//     baseImage.src = baseImageSrc;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     );
//     const hasWrapperEl = element !== undefined;
//     const targetElement = hasWrapperEl ? element : document.body;
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");

//     if (!context) return;

//     canvasRef.current = canvas;
//     canvas.style.top = "0px";
//     canvas.style.left = "0px";
//     canvas.style.pointerEvents = "none";

//     if (hasWrapperEl) {
//       canvas.style.position = "absolute";
//       targetElement.appendChild(canvas);
//       canvas.width = targetElement.clientWidth;
//       canvas.height = targetElement.clientHeight;
//     } else {
//       canvas.style.position = "fixed";
//       document.body.appendChild(canvas);
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     const onMouseMove = (e) => {
//       if (hasWrapperEl && element) {
//         const rect = element.getBoundingClientRect();
//         cursorRef.current.x = e.clientX - rect.left;
//         cursorRef.current.y = e.clientY - rect.top;
//       } else {
//         cursorRef.current.x = e.clientX;
//         cursorRef.current.y = e.clientY;
//       }

//       if (!cursorsInittedRef.current) {
//         cursorsInittedRef.current = true;
//         for (let i = 0; i < particles; i++) {
//           particlesRef.current.push(
//             new Particle(cursorRef.current.x, cursorRef.current.y, baseImage)
//           );
//         }
//       }
//     };

//     const onWindowResize = () => {
//       if (hasWrapperEl && element) {
//         canvas.width = element.clientWidth;
//         canvas.height = element.clientHeight;
//       } else {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       }
//     };

//     const updateParticles = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       let x = cursorRef.current.x;
//       let y = cursorRef.current.y;

//       particlesRef.current.forEach((particle, index) => {
//         const nextParticle =
//           particlesRef.current[index + 1] || particlesRef.current[0];
//         particle.position.x = x;
//         particle.position.y = y;
//         particle.move(context);
//         x += (nextParticle.position.x - particle.position.x) * rate;
//         y += (nextParticle.position.y - particle.position.y) * rate;
//       });
//     };

//     const loop = () => {
//       updateParticles();
//       animationFrameRef.current = requestAnimationFrame(loop);
//     };

//     if (!prefersReducedMotion.matches) {
//       targetElement.addEventListener("mousemove", onMouseMove);
//       window.addEventListener("resize", onWindowResize);
//       loop();
//     }

//     return () => {
//       if (canvasRef.current) canvasRef.current.remove();
//       if (animationFrameRef.current)
//         cancelAnimationFrame(animationFrameRef.current);
//       targetElement.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("resize", onWindowResize);
//     };
//   }, [element, particles, rate, baseImageSrc]);

//   return null;
// };

// export default SmoothFollower;

"use client";

import { useEffect, useRef } from "react";

const SmoothFollower = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    const pos = { x: 0, y: 0 };
    const lines = [];
    let frame = 1;

    // Phase generator
    let phase = Math.random() * 2 * Math.PI;
    const frequency = 0.0015;
    const amplitude = 85;
    const offset = 285;
    const updatePhase = () => {
      phase += frequency;
      return offset + Math.sin(phase) * amplitude;
    };

    const createNodes = () => {
      const nodes = [];
      for (let i = 0; i < E.size; i++) {
        nodes.push({ x: pos.x, y: pos.y, vx: 0, vy: 0 });
      }
      return nodes;
    };

    const createLine = (spring) => ({
      spring,
      friction: E.friction + 0.01 * Math.random() - 0.002,
      nodes: createNodes(),
      update() {
        let e = this.spring;
        for (let i = 0; i < this.nodes.length; i++) {
          let t = this.nodes[i];
          if (i === 0) {
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;
          } else {
            const prev = this.nodes[i - 1];
            t.vx += (prev.x - t.x) * e;
            t.vy += (prev.y - t.y) * e;
            t.vx += prev.vx * E.dampening;
            t.vy += prev.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= E.tension;
        }
      },
      draw() {
        ctx.beginPath();
        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        ctx.moveTo(n, i);
        for (let a = 1; a < this.nodes.length - 1; a++) {
          const e = this.nodes[a];
          const t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        ctx.stroke();
        ctx.closePath();
      },
    });

    const onMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      if (lines.length === 0) {
        for (let i = 0; i < E.trails; i++) {
          lines.push(createLine(0.4 + (i / E.trails) * 0.025));
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    };

    const render = () => {
      if (!ctx.running) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(updatePhase())},50%,50%,0.2)`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      frame++;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    ctx.running = true;
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="pointer-events-none fixed inset-0"
    />
  );
};

export default SmoothFollower;
