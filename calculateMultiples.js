function calculateMultiplies(first,second,limit) {
	var sum = 0;
	for(var i = 0 ; i < limit ; i++){
		if (i%first === 0 || i%second === 0){
			sum += i;
		}
	}
	return sum;
}
console.log(calculateMultiplies(3,5,10));
