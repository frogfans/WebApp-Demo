var emotions = document.getElementsByName("emotion");
var lifeItem = document.getElementById("life");

function donateLife(){
	alert("Your life:\t\t-1s\nElder's life:\t+1s\nThank you!");
	lifeItem.value = parseInt(lifeItem.value) + 1;
	console.e(lifeItem.value);
	alert(lifeItem.value);
	lifeItem.innerHTML="lifeItem.value";
}

function selectEmotion(){
	for(i=0;i<emotions.length;i++){
		if(emotions[i].checked){
			alert("Your emotion is " + emotions[i].value);
			break;
		}
	}
}

