// Matrix rain effect
function initMatrixEffect() {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function getMatrixColor() {
    const theme = document.documentElement.getAttribute("data-theme");
    return theme === "dark"
      ? "rgba(96, 165, 250, 0.8)"
      : "rgba(37, 99, 235, 0.8)";
  }

  function getBackgroundColor() {
    const theme = document.documentElement.getAttribute("data-theme");
    return theme === "dark"
      ? "rgba(15, 23, 42, 0.05)"
      : "rgba(255, 255, 255, 0.05)";
  }

  function drawMatrix() {
    ctx.fillStyle = getBackgroundColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = getMatrixColor();
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Binary animation on the side
function initBinaryAnimation() {
  const binaryText = document.getElementById("binaryText");

  function generateBinary() {
    let binary = "";
    for (let i = 0; i < 50; i++) {
      binary += Math.random() > 0.5 ? "1" : "0";
      if (i % 8 === 7) binary += "\n";
    }
    binaryText.textContent = binary;
  }

  setInterval(generateBinary, 100);
  generateBinary();
}

// Initialize animations
function initAnimations() {
  initMatrixEffect();
  initBinaryAnimation();
}
