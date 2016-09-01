function cal(str,substr){
	// 对substr进行hash
	var dict = {};
	dict[substr] =1;


	var p =0 ;
	var len = substr.length;
	var count =0;
	while(p+len-1<str.length){
		if(dict[str.substr(p,len)]){
			count++;
		}
		p++;
	}
	return count;
}

console.assert(cal('1001110110','11')==3);
console.assert(cal('110010010010001','101')==0);
console.assert(cal('110100010101011','1010')==3);