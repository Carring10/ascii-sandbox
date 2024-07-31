const selectElement = document.getElementById("canvas-size");
const canvas = document.getElementById("input-container");
const inputContainer = document.getElementById("input-container");

// Function to update canvas size and input fields
function updateCanvasSize() {
  // Get the selected size value
  const selectedSize = parseInt(selectElement.value);

  // Update canvas dimensions
  canvas.width, canvas.height = selectedSize;

  // Clear existing inputs in the input container
  inputContainer.innerHTML = '';

  // Calculate the number of input fields
  const totalInputs = (selectedSize * selectedSize);

  // Set CSS Grid properties dynamically (10px width + 2px padding on each side)
  inputContainer.style.gridTemplateColumns = `repeat(${selectedSize}, 14px)`;
  inputContainer.style.gridTemplateRows = `repeat(${selectedSize}, 14px)`;

  // Append input fields to the input container
  for (let i = 0; i < totalInputs; i++) {
    const input = document.createElement("input");
    input.type = "text";
    inputContainer.appendChild(input);
  }
}

// Add an event listener to handle the change in select element
selectElement.addEventListener("change", updateCanvasSize);

updateCanvasSize();