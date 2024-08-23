let array = [5,2,13,34,30,77,67];
let evenCount = 0 ;
let oddCount = 0 ;

array.forEach(function(number){
    if (number % 2 === 0){
        evenCount++;
        console.log(number + 'is even<br>');
    
    }else{
        oddCount++;
        console.log(number + 'is odd<br>');
    }
});
console.log('even count: ' + evenCount);
console.log('odd count:' + oddCount);
