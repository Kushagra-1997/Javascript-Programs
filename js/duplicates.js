// How To find duplicate elements in array in javascript

function findDuplicates(arr){
 let frequency = {};
 let duplicates = [];
	arr.forEach(item => {
		if(frequency[item]){   
			frequency[item]++;
    }
    else{
    	frequency[item] =1;
    }
	});
	console.log(frequency);
for(let key in frequency){
  if(frequency[key]>1){
		duplicates.push(key);
  }
}
return duplicates;
}

let arr = [1, 2, 3, 4, 5, 2, 3, 1];
console.log(findDuplicates(arr));