function check(pt){
	x = document.forms[0].num1.value;
	y=document.forms[0].num2.value;
	x=parseInt(x);
	y=parseInt(y);
	switch(pt){
	case "+": document.forms[0].answer.value=x+y;
		   break;
	case "-": document.forms[0].answer.value=x-y;
		   break;
	case "*": document.forms[0].answer.value=x*y;
		   break;
	case "/": document.forms[0].answer.value=x/y;
		   break;					
	}	 
}      
