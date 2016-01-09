'use strict';

$(document).ready(init);

function init(){
	$('.block').on('click', clickToChooseBlock);
	$('.tower').on('click', clickToChooseDestination);
	
	
}


var chosenBlock;
var destination;
var blockIsChosen = false;
// var clickedId = $(this).attr("id");
// console.log('clicked:'+ $(this).attr("id"));
//   return false; 

function checkForVictory(){
	if($('#c').children('.block').length ===3 ) {
		alert('you won');
	}
}

function clickToChooseBlock(e){
	// console.log(e);
	chosenBlock ="";
	e.stopPropagation();
	if ($(this).is(' :last-child')) {
		chosenBlock = $(this).attr("id");
  		console.log('chosenBlock:', chosenBlock , "is block chosen:", blockIsChosen);
	}
}



function clickToChooseDestination(e){
	switch(chosenBlock){
		case "small":
			$(this).append($('#'+chosenBlock));
				break;
		case "med":
			if ($(this).find('#small').length) {
				console.log('small found') 
			} else {
				$(this).append($('#'+chosenBlock));
			}
				break;	
		case "large":
			if ($(this).find('.block').length) {
				console.log('has children')
			} else {
				$(this).append($('#'+chosenBlock));
			}
				break;
	}
	
	checkForVictory();
}

	
