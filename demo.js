var life = 0;
var emotions = document.getElementsByName("emotion");
var count = 0;

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

function move(){
	document.getElementById("pgs").value = count++;
	if(count!=101){
		setTimeout("move()",100);
		if(count%10<5){
			document.getElementById("p2").innerHTML = "+1s";
		}else{
			document.getElementById("p2").innerHTML = "&nbsp;";
		}
	}else{
		document.getElementById("p2").innerHTML = "Life +1 successful!";
		donateLife();
	}
}
