let testText = "The quick   brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  document.getElementById("inputText").value = testText;
  let userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();

  document.getElementById("output").innerHTML = "";

  startTime = new Date().getTime();
}

function endTest() {
  endTime = new Date().getTime();

  document.getElementById("userInput").readOnly = true;

  let timeElapsed = (endTime - startTime) / 1000; // in seconds
  let userTypedText = document.getElementById("userInput").value;

  //   let typedWords = userTypedText.split(/\s/).filter(word => word !== "").length;

  // regex \s+ itself takes care of empty words "" occurs after more than spaces
  let typedWords = userTypedText.split(/\s+/).length;

  let wpm = 0; // Default value

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Typing Test Results:</h2>" +
    "<p>Total Length: " +
    userTypedText.length +
    "</p>" +
    "<p>Words Typed: " +
    typedWords +
    "</p>" +
    "<p>Time Elapsed: " +
    timeElapsed.toFixed(2) +
    " seconds</p>" +
    "<p>Words Per Minute (WPM): " +
    wpm +
    "</p>";
}
