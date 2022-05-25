function display(val) {
  document.getElementById("textarea").value += val;
}

function calculate() {
  let input = document.getElementById("textarea").value;
  let output = eval(input);
  document.getElementById("textarea").value = output;
}

function clr() {
  document.getElementById("textarea").value = "";
}
