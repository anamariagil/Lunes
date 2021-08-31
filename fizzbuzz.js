/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/

let i=1
while (i<200) {
    if ((i%5 || i%3)==0){
        console.log("FizzBuzz");
    } else {
        if ((i%5)==0) {
            console.log("Buzz");
        } else{
            if ((i%3)==0) {
                console.log("Fizz");
            } else{
                console.log(i);
            }
        }
    }
    i++
}
