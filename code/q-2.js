function cal (str){
	var arr =[];
	for(var i=0;i<str.length;i++){
		var char = str.charAt(i);
		var prev;
		if(char ==')'){
			if(arr[arr.length-1] =='('){
				arr.pop();
			}else{
				return false;
			}
		}else if(char==']'){
			if(arr[arr.length-1] =='['){
				arr.pop();
			}else{
				return false;
			}
		}else{
			arr.push(char);
		}
	}

	return arr.length==0;
}



console.assert(!cal('[(])'));
console.assert(!cal('(])'));
console.assert(cal('([[]()])'));