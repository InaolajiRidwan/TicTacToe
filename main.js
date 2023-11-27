var player = 1;

function btn(event) {
  if (player == 1) {
    event.srcElement.innerText = "X";
    event.srcElement.disabled = true;

    document.getElementById("dd").innerHTML = "player 0 is your turn";

    player = 2;
  } else {
    event.srcElement.innerText = "O";
    event.srcElement.disabled = true;
    document.getElementById("dd").innerHTML = "player X is your turn";

    player = 1;
  }

  var input1 = document.getElementById("inp1").value;
  var input2 = document.getElementById("inp2").value;

  var btn1 = document.getElementById("btn1").innerHTML;
  var btn2 = document.getElementById("btn2").innerHTML;
  var btn3 = document.getElementById("btn3").innerHTML;
  var btn4 = document.getElementById("btn4").innerHTML;
  var btn5 = document.getElementById("btn5").innerHTML;
  var btn6 = document.getElementById("btn6").innerHTML;
  var btn7 = document.getElementById("btn7").innerHTML;
  var btn8 = document.getElementById("btn8").innerHTML;
  var btn9 = document.getElementById("btn9").innerHTML;

  if (btn1 === "X" && btn2 === "X" && btn3 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn4 === "X" && btn5 === "X" && btn6 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn7 === "X" && btn8 === "X" && btn9 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn1 === "X" && btn4 === "X" && btn7 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn2 === "X" && btn5 === "X" && btn8 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn3 === "X" && btn6 === "X" && btn9 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn1 === "X" && btn5 === "X" && btn9 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  } else if (btn3 === "X" && btn5 === "X" && btn7 === "X") {
    document.getElementById("xx").innerHTML = input1 + " you won";
  }

  // 0 player if statement code

  if (btn1 === "O" && btn2 === "O" && btn3 === "O") {
    document.getElementById("xx").innerHTML = input2 + "you won";
  } else if (btn4 === "O" && btn5 === "O" && btn6 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn7 === "O" && btn8 === "O" && btn9 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn1 === "O" && btn4 === "O" && btn7 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn2 === "O" && btn5 === "O" && btn8 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn3 === "O" && btn6 === "O" && btn9 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn1 === "O" && btn5 === "O" && btn9 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  } else if (btn3 === "O" && btn5 === "O" && btn7 === "O") {
    document.getElementById("xx").innerHTML = "O player won";
  }
}

function reset() {
  document.getElementById("btn1").innerHTML = "";
  document.getElementById("btn2").innerHTML = "";
  document.getElementById("btn3").innerHTML = "";
  document.getElementById("btn4").innerHTML = "";
  document.getElementById("btn5").innerHTML = "";
  document.getElementById("btn6").innerHTML = "";
  document.getElementById("btn7").innerHTML = "";
  document.getElementById("btn8").innerHTML = "";
  document.getElementById("btn9").innerHTML = "";
  document.getElementById("dd").innerHTML = "";
  document.getElementById("xx").innerHTML = "";
  document.getElementById("inp1").value = "";
  document.getElementById("inp2").value = "";
}
