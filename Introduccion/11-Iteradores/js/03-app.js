//fixBux

//3 6 9 fizz
// 5 10 15 buss
//15 30 45 fixbuss

for (let i= 0; i < 100; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log( i + 'fizzbuss')
        continue
    }
    if(i % 3 === 0){
        console.log( i + 'fizz')
    }
    if(i % 5 === 0){
        console.log( i + 'buss')
    }
    
}