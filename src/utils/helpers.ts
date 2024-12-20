// Convert seconds to timer display output string
function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedTime =
    hrs > 0
      ? [
          hrs > 0 ? hrs.toString().padStart(2, "0") : "",
          mins.toString().padStart(2, "0"),
          secs.toString().padStart(2, "0"),
        ].join(":")
      : [
          mins.toString().padStart(2, "0"),
          secs.toString().padStart(2, "0"),
        ].join(":");

  return formattedTime;
}

// Convert user input string to seconds
function userInputCleanup(userInput: string) {
  let totalTime = 0;

  if (userInput.length === 6) {
    // Extract hours, minutes, and seconds from the padded string
    const hours = Number.parseInt(userInput.slice(0, 2), 10);
    const minutes = Number.parseInt(userInput.slice(2, 4), 10);
    const seconds = Number.parseInt(userInput.slice(4, 6), 10);

    // Convert to total seconds
    totalTime = hours * 3600 + minutes * 60 + seconds;
  } else if (userInput.length === 4) {
    // Extract minutes, and seconds from the padded string
    const minutes = Number.parseInt(userInput.slice(0, 2), 10);
    const seconds = Number.parseInt(userInput.slice(2, 4), 10);

    // Convert to total seconds
    totalTime = minutes * 60 + seconds;
  }

  return totalTime;
}

export { formatTime, userInputCleanup };
