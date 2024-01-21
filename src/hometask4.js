let numbers = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];

for (let i = 0; i < numbers.length; i++){
    let numbersPlusFive = [];
    numbersPlusFive[i] = numbers[i] + 5;
    console.log('Array element increated by 5: ' +  numbersPlusFive[i]);
};

let setFromNumbers = new Set(numbers);

let setFromNumberPlusTwo = new Set();

setFromNumbers.forEach(number =>{
    setFromNumberPlusTwo.add(number + 2);
});

console.log('Set increased by 2:');
console.log(setFromNumberPlusTwo);

let setFromNumberPlusTwoToArray = Array.from(setFromNumberPlusTwo);

let sumOfArray = 0;

for(let i = 0; i < setFromNumberPlusTwoToArray.length; i++){
    sumOfArray += setFromNumberPlusTwoToArray[i]; 
}

console.log('Sum of Set elements: ' + sumOfArray);

let alphabetArray = [];

for (let i = 65; i < setFromNumberPlusTwoToArray.length + 65; i++){
    alphabetArray.push(String.fromCharCode(i));
}

let mapFromSet = new Map();
for (let i = 0; i < setFromNumberPlusTwoToArray.length; i++){
    let key = alphabetArray[i];
    let value = setFromNumberPlusTwoToArray[i];
    mapFromSet.set(key, value);
}
console.log('Map where key is letter from alphabet and value from Set:');
console.log(mapFromSet);

let mapKeysArray = Array.from(mapFromSet.keys());
let concatenatedMapKeys = mapKeysArray.join('');
console.log('Concatenated Map keys: ' + concatenatedMapKeys);
