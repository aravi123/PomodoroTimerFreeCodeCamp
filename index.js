$(document).ready(function(){
	var minutes = 1;
	var seconds =0;
	var count =0;
	var timer =setInterval(Timer,1000);
	//console.log("called");
	//var timer2 = setInterval(Timer2,1000);
	function Timer(){
		if (seconds == 0) {
			minutes = minutes -1;
			console.log(minutes);
			seconds = 59;
		}
		else if ((minutes== 0)&&(seconds== 1)) {
			//clearInterval(timer);
			count++;
			if(count!=4){
				minutes =2;
				seconds =0;
			}
			else{
				minutes =3;
				seconds=0;
			}
			console.log("Called");
		}
		else {
			seconds = seconds -1;
		}
		console.log(seconds);
	}

});	