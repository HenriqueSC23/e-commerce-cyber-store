document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll("#buy-button");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Add your purchase logic here, like redirecting to a payment system.
      alert("Thank you for your purchase!");
    });
  });
});

const darkColors = ['#121212', '#121212', '#121212', '#121212'];

function getRandomDarkColor() {
  const randomIndex = Math.floor(Math.random() * darkColors.length);
  return darkColors[randomIndex];
}

function changeBackgroundColor() {
  const body = document.body;
  const currentColor = getComputedStyle(body).backgroundColor;
  let newColor = getRandomDarkColor();

  while (currentColor === newColor) {
    // Choose a new color if it is the same as the current color
    newColor = getRandomDarkColor();
  }

  body.style.backgroundColor = newColor;

  setTimeout(changeBackgroundColor, 3500); // Change color every 3.5 seconds (3500 milliseconds)
}

changeBackgroundColor();








