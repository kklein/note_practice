const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const startButton = document.getElementById('start_button');
startButton.onclick = () => {
  const intervalDuration = document.getElementById("interval_duration_input").value;
  const exerciseDuration = document.getElementById("exercise_duration_input").value;
  const updateNote = () => {
    const randomNumber = Math.floor(Math.random() * notes.length);
    div.textContent = notes[randomNumber];
  }
  const tid = setInterval(updateNote, intervalDuration * 1000);
  const div = document.getElementById('command');
  setTimeout(function() {
    clearInterval(tid)
  }, exerciseDuration * 1000);
}
