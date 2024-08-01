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

  // Set CSS Grid properties dynamically
  inputContainer.style.gridTemplateColumns = `repeat(${selectedSize}, 20px)`;
  inputContainer.style.gridTemplateRows = `repeat(${selectedSize}, 20px)`;

  // Append input fields to the input container
  for (let i = 0; i < totalInputs; i++) {
    const input = document.createElement("input");

    input.type = "text";
    input.setAttribute('maxlength', '1');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('id', 'input');

    inputContainer.appendChild(input);
  }
}

updateCanvasSize();

// Add an event listener to handle the change in select element
selectElement.addEventListener("change", updateCanvasSize);

// Auto focus next input field
const input = document.getElementById('input');

for (let input of inputContainer.children) {
  input.oninput = function () {
    if (input.nextElementSibling && input.value.length === 1) {
      input.nextElementSibling.focus();
    }
  }

  // When backspacing, focus the previous input field
  input.onkeydown = function (event) {
    const key = event.key;
    if (input.previousElementSibling && inputContainer.lastElementChild.value === '' && key === 'Backspace' || key === 'Delete') {
      input.previousElementSibling.focus();
    }
  }
}
