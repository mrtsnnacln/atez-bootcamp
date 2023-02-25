function print_my_arguments(args){

    let result = 0;

    for(var i=0; i<args.length; i++){
        result = result * args[i];
    }
    return result;
}

let testArray = [1,2,3];
print_my_arguments(testArray)

console.log(result);