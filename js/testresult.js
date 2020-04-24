let inp = document.getElementsByTagName('input');
let labels = document.getElementsByTagName('label');
let check = document.getElementById('check');
	check.onclick = function(e) {
		let totValue=0;
		for(let i=0 ; i<inp.length ; i++){ // total value calc
			totValue+=parseFloat(inp[i].getAttribute('value'), 10);
		}
		let resValue=0;
		for(let i=0 ; i<inp.length ; i++){ // result value calc
			if(inp[i].checked==true) resValue+=parseFloat(inp[i].getAttribute('value'), 10);
			if(inp[i].value>0) labels[i].style.color='green';
			inp[i].disabled = true; // not letting to redo the test
			
		}
		let mark=resValue*12/totValue;
		mark=Math.round(mark);
		parseFloat(resValue);

		let result="Ваш результат "+parseFloat(resValue).toFixed(2)+" з "+parseFloat(totValue);
		alert(result);
		if(mark==1) result="Ваша оцінка 1 бал";
		else if(mark<5 && mark>1) result="Ваша оцінка "+mark+" бали";
		else result="Ваша оцінка за тестову частину "+mark+" балів";
		alert(result);
		document.location.href = "information.html";
	}