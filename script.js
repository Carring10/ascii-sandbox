const canvas = document.getElementById("ascii-canvas");
const inputContainer = document.getElementById("input-container");

const canvasArea = (canvas.width / 12) * (canvas.height / 12);

for (let i = 0; i < canvasArea; i++) {
  const input = document.createElement("input");
  inputContainer.append(input);
}