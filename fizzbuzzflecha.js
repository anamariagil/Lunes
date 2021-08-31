mul = (i, h) => {
    while (i<=h) {
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
}

mul(10, 100)