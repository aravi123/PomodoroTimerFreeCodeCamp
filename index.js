$(document).ready(function(){
	$('.button').click(function(){
		var flag=1;
		var minutes = 1;
		var seconds =0;
		var count =0;
		var Break = 0;
		if ($('.Session').val()!='') {
			minutes = Number($('.Session').val());
		}
		else{
			minutes = 25;
		}
		if ($('.Break').val()!='') {
			Break = Number($('.Break').val());
		}
		else{
			Break = 5;
		}

		var x = minutes;
		var timer =setInterval(Timer,1000);
		//console.log("called");
		//var timer2 = setInterval(Timer2,1000);
		function Timer(){
			if (flag==1) {
				if (seconds == 0) {
					minutes = minutes -1;
					console.log(minutes);
					seconds = 59;
				}
				else if ((minutes== 0)&&(seconds== 1)) {
					//clearInterval(timer);
					flag=0;
					count++;
					if(count<=4){
						minutes =Break;
						seconds =0;
					}
					else if(count==4){
						minutes =3*Break;
						seconds=0;
						count =0;
					}
					console.log("Called");
				}
				else {
					seconds = seconds -1;
				}
			}
			else{
				if (seconds==0) {
					minutes = minutes -1;
					seconds = 59;
				}
				else if ((minutes==0)&&(seconds == 1)) {
					flag =1;
					minutes = x;
					seconds = 0;
				}
				else{
					seconds = seconds -1;
				}
			}
			console.log(seconds);
			$('#values').html(minutes+":"+seconds);
		}
	});

});	