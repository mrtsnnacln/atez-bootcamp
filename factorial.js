function factorial(n) {
    let result = 1; // if n is given as 0 or 1, we will use this default value
    if(n==1 || n==0) {

        return result; // returns 1 directly without calculation

    }else if(n>1){

        for(var i=n; i>0; i--){ //iterative part

            result = result * i;
            
}
        return result; // returns the iterative calculation result
    }else{

        return "Input should be a natural number"; //if n is anything except natural number, throw this.
    }

}

let n = 6;

console.log(factorial(n));
