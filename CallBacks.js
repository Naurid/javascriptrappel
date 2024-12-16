function math(n1, n2, operation){
    return operation(n1, n2);
}

console.log(math(5, 6, (a,b) => a+b));