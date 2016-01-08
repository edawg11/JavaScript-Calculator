

var numberButtons = document.getElementsByClassName('button');
var operatorButtons = document.getElementsByClassName('operator');
var calcScreen = document.getElementById('calcScreen'); 
var input = [];
var inputString = input.join("");
var calcScreenVal = calcScreen.innerHTML;
var operators = ['+', '-', 'x', '÷'];
var leftSide = [];
var rightSide = [];
var middle = [];
var numArray = ["1","2","3","4","5","6","7","8","9","0"];
var temp;
var operator;
var second;



addEventListenerToButtons();
// (/x/g, '*').replace(/÷/g, '/');



function addEventListenerToButtons(){
	for(i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberClicked);
	}
}
	
// ...
function numberClicked(event) {
	var button = event.target; 
	var buttonVal = button.innerHTML;

	
	
	if (numArray.indexOf(buttonVal) !== -1) {
		
			input.push(buttonVal);
			inputString = input.join("");
			temp = parseFloat(inputString);
			console.log("temp:", temp);
	
		
	}

	if (buttonVal === "AC") {
		input = [];
		inputString = " "
		temp = undefined;
		console.log('tempCleared:', temp)
		operator = "";
		console.log('operatorCleared:', operator);
	};

	calcScreen.textContent = inputString;

	switch (buttonVal) {
		case "+":
			var operator = "+";
			console.log("operator:", operator);
			break;
	
		case "-":
			var operator = "-";
			console.log("operator:", operator);
			break

		case "÷":
			var operator = "/";
			console.log("operator:", operator);
			break;

		case "X":
			var operator = "*";
			console.log("operator:", operator);
			console.log('temp', temp);
			break;	
				

	}
  
  // 	switch (buttonVal) {
  // 		case numArray.indexOf[buttonVal] !== -1:
  // 			input.push(buttonVal);
		// 	inputString = input.join("");
		// 	calcScreenVal = inputString;
		// 	break

		// case "AC" :
  // 			input = [];
  // 			inputString = " ";
  // 			break;

  // 		case numArray.indexOf[buttonVal] === -1:
  // 			middle.push(buttonVal);
  // 			break;

  // 	}
	

	// if (buttonVal === "AC") {
	// input = [];
	// inputString = " "
	// };

	// if (buttonVal ==="x"){
	// 	middle.push(buttonVal);
	// 	console.log("middle", middle)
	// }

	// else {
	// 	console.log("clicked something else")
	// };

	// else {
	// 	console.log('clicked something else')
	// }


 

  // switch(buttonVal) {
  // 	case "AC" :
  // 		input = [];
  // 		inputString = " ";
  // 		break;
  // }


  // if (buttonVal === "AC") {
  // 	input = [];
  // 	inputString = " "
  // };

  // console.log('inputString:', inputString)
  // console.log("middle:", middle)

}



