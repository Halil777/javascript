document.addEventListener("DOMContentLoaded", function () {
  const mainMessage = document.getElementById("main-message");
  const changeMessageBtn = document.getElementById("change-message-btn");

  function changeMessage() {
    mainMessage.textContent = "Hello, Selimmmmm";
  }

  changeMessageBtn.addEventListener("click", changeMessage);

  // second fuction

  const greetingMessage = document.getElementById("greeting-message");
  const nameInput = document.getElementById("name-input");
  const greetBtn = document.getElementById("greet-btn");

  function greetUser() {
    const userName = nameInput.value.trim().toLowerCase();

    const inappropriateWords = [
      "fucking",
      "ejen",
      "bajyn",
      "badword",
      "anotherbadword",
    ];

    const containsInappropriateWord = inappropriateWords.some((word) =>
      userName.includes(word)
    );

    if (containsInappropriateWord) {
      alert("Please avoid using inappropriate words.");

      nameInput.value = "";
    } else {
      greetingMessage.textContent = `Hello, ${userName || "Stranger"}!`;
    }
  }

  greetBtn.addEventListener("click", greetUser);

  // third function

  let counter = 0;
  const counterDisplay = document.getElementById("counter-display");
  const incrementCounterBtn = document.getElementById("increment-counter-btn");
  const decrementCounterBtn = document.getElementById("decrement-counter-btn");

  function incrementCounter() {
    counter++;
    counterDisplay.textContent = `Counter: ${counter}`;
  }

  function decrementCounter() {
    counter--;
    counterDisplay.textContent = `Counter: ${counter}`;
  }

  incrementCounterBtn.addEventListener("click", incrementCounter);
  decrementCounterBtn.addEventListener("click", decrementCounter);

  // fourth function

  const sampleImage = document.getElementById("sample-image");
  const increaseSizeBtn = document.getElementById("increase-size-btn");
  const decreaseSizeBtn = document.getElementById("decrease-size-btn");

  function increaseImageSize() {
    const currentWidth = sampleImage.clientHeight;
    const newWidth = currentWidth * 1.2;
    sampleImage.style.width = `${newWidth}px`;
  }

  function decreaseImageSize() {
    const currentWidth = sampleImage.clientWidth;
    const newWidth = currentWidth * 0.8;
    sampleImage.style.width = `${newWidth}px`;
  }

  increaseSizeBtn.addEventListener("click", increaseImageSize);
  decreaseSizeBtn.addEventListener("click", decreaseImageSize);
});
