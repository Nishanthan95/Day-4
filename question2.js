//a
var numbers = [1,2,3,4,5,6,7]
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
};oddNumbers(numbers);

//b
var sentence = "hello every one";  

titleCapital = (sentence) => {
    sentence = sentence.toLowerCase().split(' ');
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1); 
    } 
    console.log(sentence.join(' '));
    return sentence.join(' ');
};  

titleCapital(sentence);

//c
var numbers = [1,2,3,4,5];
sum = (numbers)=>{
    var sum = 0;
         for(var i = 0 ; i< numbers.length ; i++){
            sum = sum + numbers[i];
          }console.log(sum); 
          return sum;
          
};
sum(numbers);

//d
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
getPrimeNumbers = (numbers) => {
    numbers = numbers.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numbers);
};getPrimeNumbers(numbers);
