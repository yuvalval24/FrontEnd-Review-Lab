count = 0
function changeBackgroundColor(color1, color2){
	if (count%2 == 1){color = color1;}
	else {color=color2;}
	document.getElementsByTagName("body")[0].style.backgroundColor = color;
	count+=1;
}