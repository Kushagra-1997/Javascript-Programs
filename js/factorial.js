function factorial(num){
	if(num < 0){
  	return "not possible"
  }
	let result = 1;
	for(let i=1; i<=num; i++){
  	result *= i;
  }
	return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-5));