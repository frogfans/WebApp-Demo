var life = 0;
var emotions = document.getElementsByName("emotion");

function donateLife(){
	alert("Your life: -1s\nElder's life: +1s\nThank you!");
	document.getElementById("life").innerHTML = ++life;
}

function selectEmotion(){
	for(i=0;i<emotions.length;i++){
		if(emotions[i].checked){
			var output;
			if(i==0){
				output = "给人一种钦定的感觉";
			}else if(i==1){
				output = "I'm angry!";
			}else if(i==2){
				output = "水可载舟，亦可赛艇";
			}
			alert(output);
			break;
		}
	}
}

